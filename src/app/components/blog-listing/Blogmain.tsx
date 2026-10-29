'use client';

import React, { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Search, Calendar, Clock, ArrowRight, Loader2, Sparkles, Filter } from 'lucide-react';

interface PostItem {
  post_id: number;
  post_slug: string;
  post_title: string;
  post_status: string;
  meta_title?: string;
  meta_description?: string;
  image_path?: string;
  created_at: string;
  category_name?: string;
  category_slug?: string;
  tags?: { tag_id: number; tag_name: string }[];
}

interface CategoryItem {
  category_id: number;
  category_name: string;
  category_slug: string;
  post_count?: number;
}

export default function Blogmain() {
  const searchParams = useSearchParams();
  const urlPage = parseInt(searchParams.get('page') || '1', 10);
  const urlCategory = searchParams.get('category') || '';
  const urlSearch = searchParams.get('search') || '';

  const [posts, setPosts] = useState<PostItem[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(urlCategory);
  const [searchTerm, setSearchTerm] = useState<string>(urlSearch);
  const [activeSearch, setActiveSearch] = useState<string>(urlSearch);
  const [page, setPage] = useState<number>(urlPage > 0 ? urlPage : 1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [, startTransition] = useTransition();

  // Helper to sync query params to browser URL
  const syncUrl = (newPage: number, newCat?: string, newSearch?: string) => {
    const params = new URLSearchParams();
    const cat = newCat !== undefined ? newCat : selectedCategory;
    const s = newSearch !== undefined ? newSearch : activeSearch;

    if (cat) params.set('category', cat);
    if (s) params.set('search', s);
    if (newPage > 1) params.set('page', newPage.toString());

    const qs = params.toString();
    const newUrl = qs ? `/blog?${qs}` : '/blog';
    window.history.pushState(null, '', newUrl);
  };

  // Fetch categories on mount
  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => {
        if (data.categories) setCategories(data.categories);
      })
      .catch((err) => console.error('Error fetching categories:', err));
  }, []);

  // Fetch posts when page, category oractiveSearch changes
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    const query = new URLSearchParams({
      page: page.toString(),
      limit: '6',
    });

    if (selectedCategory) query.set('category', selectedCategory);
    if (activeSearch) query.set('search', activeSearch);

    fetch(`/api/blogs?${query.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled && data.success) {
          setPosts(data.posts || []);
          setTotalPages(data.pagination?.totalPages || 1);
          setTotalPosts(data.pagination?.total || 0);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          console.error('Error loading posts:', err);
          setLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [page, selectedCategory, activeSearch]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      const cleaned = searchTerm.trim();
      setPage(1);
      setActiveSearch(cleaned);
      syncUrl(1, undefined, cleaned);
    });
  };

  const handleCategorySelect = (slug: string) => {
    startTransition(() => {
      setSelectedCategory(slug);
      setPage(1);
      syncUrl(1, slug, undefined);
    });
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) return;
    setPage(newPage);
    syncUrl(newPage);

    const section = document.getElementById('blog-listing-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Generate pagination items matching gemhospitals.com reference:
  // Page 1 of 64: [1, 2, 3, '...', 64] with Next >
  // Page 2 of 64: < Prev with [1, 2, 3, 4, '...', 64] and Next >
  const getPaginationItems = (): (number | string)[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (page === 1) {
      return [1, 2, 3, '...', totalPages];
    }

    if (page === 2) {
      return [1, 2, 3, 4, '...', totalPages];
    }

    if (page === 3) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }

    if (page >= totalPages - 2) {
      return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', page - 1, page, page + 1, '...', totalPages];
  };

  const getImageUrl = (imagePath?: string) => {
    if (!imagePath) return '/assets/images/subbanner/ayurvedic-blog.webp';
    if (imagePath.startsWith('http') || imagePath.startsWith('/')) return imagePath;
    return `/${imagePath}`;
  };

  return (
    <section id="blog-listing-section" className="py-12 md:py-16 bg-[#fafaf7]">
      <div className="w-[90%] max-w-[1280px] mx-auto">
        {/* Filter and Search Bar */}
        <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Categories Tab Bar */}
          <div className="flex flex-wrap items-center gap-2 flex-1">
            <button
              onClick={() => handleCategorySelect('')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                selectedCategory === ''
                  ? 'bg-[var(--primary)] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Articles
            </button>
            {categories.map((cat) => (
              <button
                key={cat.category_id}
                onClick={() => handleCategorySelect(cat.category_slug || cat.category_id.toString())}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  selectedCategory === (cat.category_slug || cat.category_id.toString())
                    ? 'bg-[var(--primary)] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.category_name}
                {cat.post_count !== undefined && cat.post_count > 0 && (
                  <span className="ml-1.5 text-xs opacity-75">({cat.post_count})</span>
                )}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <form onSubmit={handleSearchSubmit} className="relative w-full md:w-72 lg:w-80 shrink-0">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search blogs, health tips..."
              className="w-full pl-10 pr-24 py-2.5 rounded-full border border-gray-300 text-sm text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition shadow-2xs"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 px-4 py-1.5 bg-[var(--primary)] text-white text-xs font-semibold rounded-full hover:bg-[var(--secondary)] transition cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>

        {/* Status line */}
        {activeSearch && (
          <div className="flex items-center justify-end mb-8 text-sm text-gray-500">
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveSearch('');
                setPage(1);
              }}
              className="text-xs font-semibold text-[var(--primary)] hover:underline cursor-pointer"
            >
              Clear filter
            </button>
          </div>
        )}

        {/* Loading Spinner */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 animate-pulse"
              >
                <div className="h-56 bg-gray-200" />
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-1/3" />
                  <div className="h-6 bg-gray-200 rounded w-5/6" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          /* Empty state */
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 p-8">
            <Sparkles className="w-12 h-12 text-[var(--primary)] mx-auto mb-4 opacity-50" />
            <h3 className="text-2xl font-serif text-[var(--secondary)] mb-2">No articles found</h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
              We couldn&apos;t find any posts matching your criteria. Try searching with different keywords
              or explore another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('');
                setSearchTerm('');
                setActiveSearch('');
                setPage(1);
              }}
              className="px-6 py-2.5 bg-[var(--primary)] text-white text-sm font-semibold rounded-full hover:bg-[var(--secondary)] transition cursor-pointer"
            >
              View All Articles
            </button>
          </div>
        ) : (
          /* Posts Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              });
              const img = getImageUrl(post.image_path);

              return (
                <article
                  key={post.post_id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                >
                  {/* Thumbnail */}
                  <Link
                    href={`/blog/${post.post_slug}`}
                    className="relative block w-full h-[240px] overflow-hidden bg-gray-100"
                  >
                    <Image
                      src={img}
                      alt={post.post_title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {post.category_name && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm text-[var(--primary)] text-xs font-semibold rounded-full shadow-sm">
                        {post.category_name}
                      </span>
                    )}
                  </Link>

                  {/* Content Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta info */}
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[var(--primary)]" />
                          {formattedDate}
                        </span>
                      </div>

                      {/* Title */}
                      <Link href={`/blog/${post.post_slug}`}>
                        <h3 className="font-serif text-xl font-normal text-[var(--secondary)] group-hover:text-[var(--primary)] transition line-clamp-2 mb-4 leading-snug">
                          {post.post_title}
                        </h3>
                      </Link>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href={`/blog/${post.post_slug}`}
                        className="text-xs font-semibold text-[var(--primary)] group-hover:text-[#5d773d] flex items-center gap-1.5 uppercase tracking-wider transition"
                      >
                        Read Article
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Pagination Controls matching gemhospitals.com style */}
        {totalPages > 1 && (
          <nav
            aria-label="Blog Pagination"
            className="flex flex-wrap items-center justify-center gap-2 mt-12 sm:mt-16 select-none"
          >
            {/* Prev Button (Only shown when page > 1) */}
            {page > 1 && (
              <button
                type="button"
                onClick={() => handlePageChange(page - 1)}
                className="px-4 py-2 sm:py-2.5 rounded-2xl bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-200/90 text-sm font-semibold shadow-2xs transition flex items-center gap-1 cursor-pointer"
                aria-label="Previous Page"
              >
                &lt; Prev
              </button>
            )}

            {/* Page Numbers */}
            {getPaginationItems().map((item, index) => {
              if (item === '...') {
                return (
                  <span
                    key={`ellipsis-${index}`}
                    className="w-8 h-10 flex items-center justify-center text-gray-400 font-semibold text-sm"
                  >
                    ...
                  </span>
                );
              }

              const pageNum = Number(item);
              const isActive = pageNum === page;

              return (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-10 h-10 rounded-2xl text-sm font-semibold flex items-center justify-center transition cursor-pointer ${
                    isActive
                      ? 'bg-[var(--primary)] text-white font-bold shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-200/90 shadow-2xs'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Button (Only shown when page < totalPages) */}
            {page < totalPages && (
              <button
                type="button"
                onClick={() => handlePageChange(page + 1)}
                className="px-4 py-2 sm:py-2.5 rounded-2xl bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-200/90 text-sm font-semibold shadow-2xs transition flex items-center gap-1 cursor-pointer"
                aria-label="Next Page"
              >
                Next &gt;
              </button>
            )}
          </nav>
        )}
      </div>
    </section>
  );
}
