import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import pool from '@/lib/db';
import { RowDataPacket } from 'mysql2';
import { Metadata } from 'next';
import { Calendar, Clock, Tag as TagIcon, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getPostData(slug: string) {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT p.*, c.category_name, c.category_slug 
       FROM posts p 
       LEFT JOIN category c ON p.category_id = c.category_id 
       WHERE (p.post_slug = ? OR p.post_id = ?) AND p.post_status = 'published'
       LIMIT 1`,
      [slug, isNaN(Number(slug)) ? 0 : Number(slug)]
    );

    if (!rows || rows.length === 0) return null;
    const post = rows[0];

    const [tags] = await pool.query<RowDataPacket[]>(
      `SELECT t.tag_id, t.tag_name, t.tag_slug 
       FROM post_tags pt 
       INNER JOIN tags t ON pt.tag_id = t.tag_id 
       WHERE pt.post_id = ?`,
      [post.post_id]
    );

    const [related] = await pool.query<RowDataPacket[]>(
      `SELECT p.post_id, p.post_slug, p.post_title, p.image_path, p.created_at, c.category_name
       FROM posts p
       LEFT JOIN category c ON p.category_id = c.category_id
       WHERE p.post_status = 'published' AND p.post_id != ?
       ORDER BY (p.category_id = ?) DESC, p.created_at DESC
       LIMIT 3`,
      [post.post_id, post.category_id || 0]
    );

    const [prevPost] = await pool.query<RowDataPacket[]>(
      `SELECT post_title, post_slug FROM posts WHERE post_id < ? AND post_status = 'published' ORDER BY post_id DESC LIMIT 1`,
      [post.post_id]
    );
    const [nextPost] = await pool.query<RowDataPacket[]>(
      `SELECT post_title, post_slug FROM posts WHERE post_id > ? AND post_status = 'published' ORDER BY post_id ASC LIMIT 1`,
      [post.post_id]
    );

    return {
      post,
      tags,
      related,
      navigation: {
        prev: prevPost[0] || null,
        next: nextPost[0] || null,
      },
    };
  } catch (error) {
    console.error('Database error in getPostData:', error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getPostData(slug);
  if (!data || !data.post) {
    return {
      title: 'Blog Post Not Found | Samwarthika Ayurveda Hospital',
    };
  }

  const post = data.post;
  const title = post.meta_title || post.post_title;
  const description =
    post.meta_description ||
    post.post_content?.replace(/<[^>]*>?/gm, '').substring(0, 160) ||
    '';
  const keywords = post.meta_keyword ? post.meta_keyword.split(',') : [];
  const authorName = post.author_name?.trim() || 'Samwarthika Ayurveda Care';
  const canonicalUrl = `https://www.samwarthika.com/blog/${slug}`;

  let ogImageUrl = '/assets/images/subbanner/ayurvedic-blog.webp';
  if (post.image_path) {
    ogImageUrl = post.image_path.startsWith('http') || post.image_path.startsWith('/')
      ? post.image_path
      : `/${post.image_path}`;
  }

  return {
    title: `${title} | Samwarthika Ayurveda Hospital`,
    description,
    keywords,
    authors: [{ name: authorName }],
    creator: authorName,
    publisher: 'Samwarthika Ayurveda Hospital',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: canonicalUrl,
      siteName: 'Samwarthika Ayurveda Hospital',
      publishedTime: post.published_at || post.created_at,
      modifiedTime: post.updated_at || post.created_at,
      authors: [authorName],
      images: [{ url: ogImageUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: authorName,
      images: [ogImageUrl],
    },
    other: {
      'author': authorName,
      'article:author': authorName,
      'article:publisher': 'Samwarthika Ayurveda Hospital',
    },
  };
}

function calculateReadingTime(text: string): number {
  const words = text ? text.replace(/<[^>]*>?/gm, '').trim().split(/\s+/).length : 0;
  return Math.max(1, Math.ceil(words / 200));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getPostData(slug);

  if (!data || !data.post) {
    notFound();
  }

  const { post, tags, related, navigation } = data;
  const readingTime = calculateReadingTime(post.post_content || '');
  const authorName = post.author_name?.trim() || 'Samwarthika Ayurveda Care';
  const canonicalUrl = `https://www.samwarthika.com/blog/${slug}`;

  const formattedDate = new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  let imageUrl = '/assets/images/subbanner/ayurvedic-blog.webp';
  if (post.image_path) {
    imageUrl = post.image_path.startsWith('http') || post.image_path.startsWith('/')
      ? post.image_path
      : `/${post.image_path}`;
  }

  // Schema Markup
  let parsedSchema: any = null;
  if (post.schema_data && post.schema_data.trim()) {
    try {
      parsedSchema = JSON.parse(post.schema_data);
    } catch {
      // Fallback
    }
  }

  const defaultArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.post_title,
    image: [imageUrl],
    datePublished: post.published_at || post.created_at,
    dateModified: post.updated_at || post.created_at,
    author: {
      '@type': post.author_name ? 'Person' : 'Organization',
      name: authorName,
      url: 'https://samwarthika.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Samwarthika Ayurveda Hospital',
      logo: {
        '@type': 'ImageObject',
        url: 'https://samwarthika.com/assets/images/logo.webp',
      },
    },
    description: post.meta_description || post.post_title,
  };

  return (
    <>
      {/* Primary BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(defaultArticleSchema),
        }}
      />

      {/* Optional Additional FAQ / Custom Schema */}
      {parsedSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(parsedSchema),
          }}
        />
      )}

      <Header />

      <main className="min-h-screen bg-[#fafaf7]">
        {/* Breadcrumb banner */}
        <section className="bg-[#eaf4ee] py-8 border-b border-[#d8e8de]">
          <div className="w-[90%] max-w-[1200px] mx-auto">
            <nav className="flex flex-wrap items-center gap-2 text-sm text-[#4a5843]">
              <Link href="/" className="hover:text-[var(--primary)] transition">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[var(--primary)] transition">
                Blog
              </Link>
              <span>/</span>
              <span className="text-gray-600 font-medium">
                {post.post_title}
              </span>
            </nav>
          </div>
        </section>

        {/* Article Container */}
        <article className="w-[90%] max-w-[960px] mx-auto py-12 md:py-16">
          {/* Header Metadata */}
          <div className="mb-8">
            {post.category_name && (
              <Link
                href={`/blog?category=${post.category_slug || post.category_id}`}
                className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider bg-[#dbead7] text-[var(--primary)] rounded-full mb-4 hover:bg-[var(--primary)] hover:text-white transition"
              >
                {post.category_name}
              </Link>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--secondary)] leading-tight mb-6">
              {post.post_title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-y border-gray-200 py-3.5">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[var(--primary)]" />
                <span>{formattedDate}</span>
              </div>
              <div className="text-gray-400">|</div>
              <span className="text-[#304A10] font-medium">Samwarthika Ayurveda Care</span>
              {post.author_name && (
                <>
                  <div className="text-gray-400">|</div>
                  <span className="text-[#304A10] font-medium">
                    {post.author_name}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Featured Image */}
          {post.image_path && (
            <div className="relative w-full h-[280px] sm:h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-10 bg-gray-100">
              <Image
                src={imageUrl}
                alt={post.post_title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 960px) 100vw, 960px"
              />
            </div>
          )}

          {/* Blog Content */}
          <div
            className="blog-article-content max-w-none text-[#333a2d] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.post_content }}
          />

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 mr-2">
                  <TagIcon className="w-4 h-4 text-[var(--primary)]" />
                  Tags:
                </span>
                {tags.map((t: any) => (
                  <Link
                    key={t.tag_id}
                    href={`/blog?tag=${t.tag_slug || t.tag_id}`}
                    className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs rounded-full hover:border-[var(--primary)] hover:text-[var(--primary)] transition"
                  >
                    #{t.tag_name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-8 p-6 bg-[#f2f7f3] rounded-2xl flex flex-wrap items-center justify-between gap-4 border border-[#e1ede3]">
            <div>
              <h4 className="font-serif text-lg font-bold text-[var(--secondary)]">
                Liked this article?
              </h4>
              <p className="text-sm text-gray-600">
                Share ancient Ayurvedic wellness knowledge with your family & friends.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  post.post_title + ' '
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#25D366] text-white text-xs font-semibold rounded-lg hover:opacity-90 transition flex items-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                WhatsApp
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#1877F2] text-white text-xs font-semibold rounded-lg hover:opacity-90 transition flex items-center gap-1.5"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Prev / Next Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-gray-200">
            {navigation.prev ? (
              <Link
                href={`/blog/${navigation.prev.post_slug}`}
                className="p-4 rounded-xl border border-gray-200 hover:border-[var(--primary)] hover:bg-white transition group flex flex-col"
              >
                <span className="text-xs text-gray-500 flex items-center gap-1 group-hover:text-[var(--primary)]">
                  <ArrowLeft className="w-3.5 h-3.5" /> Previous Post
                </span>
                <span className="font-serif text-sm font-semibold text-gray-800 line-clamp-1 mt-1 group-hover:text-[var(--primary)]">
                  {navigation.prev.post_title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {navigation.next && (
              <Link
                href={`/blog/${navigation.next.post_slug}`}
                className="p-4 rounded-xl border border-gray-200 hover:border-[var(--primary)] hover:bg-white transition group flex flex-col text-right sm:ml-auto w-full"
              >
                <span className="text-xs text-gray-500 flex items-center justify-end gap-1 group-hover:text-[var(--primary)]">
                  Next Post <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="font-serif text-sm font-semibold text-gray-800 line-clamp-1 mt-1 group-hover:text-[var(--primary)]">
                  {navigation.next.post_title}
                </span>
              </Link>
            )}
          </div>
        </article>

        {/* Related Posts Section */}
        {related && related.length > 0 && (
          <section className="bg-white py-16 border-t border-gray-200">
            <div className="w-[90%] max-w-[1200px] mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[var(--secondary)]">
                    Related Articles
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Explore more Ayurvedic healing guides and health tips
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="text-sm font-semibold text-[var(--primary)] hover:underline flex items-center gap-1"
                >
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((item: any) => {
                  let rImage = '/assets/images/subbanner/ayurvedic-blog.webp';
                  if (item.image_path) {
                    rImage = item.image_path.startsWith('http') || item.image_path.startsWith('/')
                      ? item.image_path
                      : `/${item.image_path}`;
                  }
                  return (
                    <Link
                      key={item.post_id}
                      href={`/blog/${item.post_slug}`}
                      className="group bg-[#fafaf7] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                      <div className="relative w-full h-[200px] overflow-hidden">
                        <Image
                          src={rImage}
                          alt={item.post_title}
                          fill
                          className="object-cover group-hover:scale-105 transition duration-500"
                        />
                        {item.category_name && (
                          <span className="absolute top-3 left-3 px-2.5 py-0.5 text-xs font-semibold bg-white/90 backdrop-blur-sm text-[var(--primary)] rounded-full">
                            {item.category_name}
                          </span>
                        )}
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <h4 className="font-serif text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-[var(--primary)] transition">
                          {item.post_title}
                        </h4>
                        <div className="text-xs text-gray-400 mt-4">
                          {new Date(item.created_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
