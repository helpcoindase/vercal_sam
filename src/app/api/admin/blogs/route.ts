import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

function generateSlug(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function cleanHtml(rawHtml: string): string {
  if (!rawHtml) return '';
  let html = rawHtml.toString();

  // Strip all inline style attributes
  html = html.replace(/\s*style="[^"]*"/gi, '');
  html = html.replace(/\s*style='[^']*'/gi, '');

  // Unwrap document-wide blockquote
  let trimmed = html.trim();
  if (trimmed.startsWith('<blockquote>') && trimmed.endsWith('</blockquote>')) {
    const inner = trimmed.substring('<blockquote>'.length, trimmed.length - '</blockquote>'.length).trim();
    if (!inner.includes('</blockquote>')) {
      html = inner;
    }
  }

  // Fix heading wrappers around block elements
  html = html.replace(/<h[1-6]>([\s\S]*?)<\/h[1-6]>/gi, (match, inner) => {
    if (inner.includes('<p>') || inner.includes('<ul>') || inner.includes('<ol>') || inner.includes('<table>')) {
      return inner;
    }
    return match;
  });

  html = html.replace(/<span>([\s\S]*?)<\/span>/gi, '$1');
  html = html.replace(/(<p>\s*(<br\s*\/?>)?\s*<\/p>\s*){2,}/gi, '<p></p>');

  return html.trim();
}

// GET /api/admin/blogs - Paginated list of all posts
export async function GET(req: NextRequest) {
  const user = await requireAuth(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '10')));
    const offset = (page - 1) * limit;

    const status = searchParams.get('status')?.trim();
    const search = searchParams.get('search')?.trim();
    const category = searchParams.get('category')?.trim();

    const conditions: string[] = ['1=1'];
    const params: any[] = [];

    if (status && status !== 'all') {
      conditions.push('p.post_status = ?');
      params.push(status);
    }

    if (category) {
      conditions.push('p.category_id = ?');
      params.push(Number(category));
    }

    if (search) {
      conditions.push('(p.post_title LIKE ? OR p.post_slug LIKE ? OR p.meta_description LIKE ?)');
      const wild = `%${search}%`;
      params.push(wild, wild, wild);
    }

    const whereClause = conditions.join(' AND ');

    const [countResult] = await pool.query<RowDataPacket[]>(
      `SELECT COUNT(*) as total FROM posts p WHERE ${whereClause}`,
      params
    );
    const total = countResult[0]?.total || 0;

    const [posts] = await pool.query<RowDataPacket[]>(
      `SELECT p.post_id, p.post_slug, p.post_title, p.post_status, p.image_path, p.author_name,
              p.created_at, p.updated_at, p.published_at,
              c.category_id, c.category_name, c.category_slug
       FROM posts p
       LEFT JOIN category c ON p.category_id = c.category_id
       WHERE ${whereClause}
       ORDER BY p.created_at DESC
       LIMIT ? OFFSET ?`,
      [...params, limit, offset]
    );

    // Fetch tags for these posts
    if (posts.length > 0) {
      const postIds = posts.map((p) => p.post_id);
      const [tagRows] = await pool.query<RowDataPacket[]>(
        `SELECT pt.post_id, t.tag_id, t.tag_name, t.tag_slug
         FROM post_tags pt
         INNER JOIN tags t ON pt.tag_id = t.tag_id
         WHERE pt.post_id IN (?)`,
        [postIds]
      );

      const tagMap: Record<number, any[]> = {};
      tagRows.forEach((row) => {
        if (!tagMap[row.post_id]) tagMap[row.post_id] = [];
        tagMap[row.post_id].push({
          tag_id: row.tag_id,
          tag_name: row.tag_name,
          tag_slug: row.tag_slug,
        });
      });

      posts.forEach((post) => {
        post.tags = tagMap[post.post_id] || [];
      });
    }

    return NextResponse.json({
      success: true,
      posts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    console.error('Admin blogs list error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/admin/blogs - Create a new post
export async function POST(req: NextRequest) {
  const user = await requireAuth(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      title,
      content,
      slug,
      category_id,
      post_status = 'draft',
      author_name,
      meta_title,
      meta_description,
      meta_keyword,
      image_path,
      schema_data,
      tags = [],
    } = body;

    if (!title || !title.trim()) {
      return NextResponse.json({ error: 'Blog title is required' }, { status: 400 });
    }

    const cleanTitle = title.trim();
    let finalSlug = slug ? generateSlug(slug) : generateSlug(cleanTitle);

    // Ensure slug is unique
    const [existing] = await pool.query<RowDataPacket[]>(
      'SELECT post_id FROM posts WHERE post_slug = ? LIMIT 1',
      [finalSlug]
    );
    if (existing.length > 0) {
      finalSlug = `${finalSlug}-${Date.now().toString().slice(-4)}`;
    }

    const cleanContent = cleanHtml(content);
    const cleanMetaTitle = meta_title?.trim() || cleanTitle;
    const cleanMetaDesc =
      meta_description?.trim() ||
      cleanContent.replace(/<[^>]*>?/gm, '').substring(0, 160);
    const cleanMetaKeyword = meta_keyword?.trim() || '';
    const cleanStatus = post_status === 'published' ? 'published' : 'draft';
    const publishedAt = cleanStatus === 'published' ? new Date() : null;
    const cleanAuthor = author_name?.trim() || null;

    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO posts 
       (post_title, post_content, post_slug, category_id, author_name, meta_title, meta_description, meta_keyword, 
        image_path, schema_data, post_status, created_at, updated_at, published_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), ?)`,
      [
        cleanTitle,
        cleanContent,
        finalSlug,
        category_id ? Number(category_id) : null,
        cleanAuthor,
        cleanMetaTitle,
        cleanMetaDesc,
        cleanMetaKeyword,
        image_path || null,
        schema_data || null,
        cleanStatus,
        publishedAt,
      ]
    );

    const postId = result.insertId;

    // Handle tags
    if (Array.isArray(tags) && tags.length > 0) {
      for (const tagItem of tags) {
        let tagId: number | null = null;
        const tagName = typeof tagItem === 'string' ? tagItem.trim() : tagItem.tag_name?.trim();
        if (!tagName) continue;

        const tagSlug = generateSlug(tagName);
        const [existingTag] = await pool.query<RowDataPacket[]>(
          'SELECT tag_id FROM tags WHERE tag_slug = ? LIMIT 1',
          [tagSlug]
        );

        if (existingTag.length > 0) {
          tagId = existingTag[0].tag_id;
        } else {
          const [insertTag] = await pool.query<ResultSetHeader>(
            'INSERT INTO tags (tag_name, tag_slug) VALUES (?, ?)',
            [tagName, tagSlug]
          );
          tagId = insertTag.insertId;
        }

        if (tagId) {
          await pool.query(
            'INSERT IGNORE INTO post_tags (post_id, tag_id) VALUES (?, ?)',
            [postId, tagId]
          );
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Blog post created successfully',
      post_id: postId,
      slug: finalSlug,
    });
  } catch (error: any) {
    console.error('Create blog error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
