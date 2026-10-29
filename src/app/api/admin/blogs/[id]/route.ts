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

// GET /api/admin/blogs/[id]
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await requireAuth(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const postId = parseInt(id);

    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT p.*, c.category_name 
       FROM posts p 
       LEFT JOIN category c ON p.category_id = c.category_id 
       WHERE p.post_id = ? 
       LIMIT 1`,
      [postId]
    );

    if (!rows || rows.length === 0) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const post = rows[0];

    // Fetch tags
    const [tags] = await pool.query<RowDataPacket[]>(
      `SELECT t.tag_id, t.tag_name, t.tag_slug 
       FROM post_tags pt 
       INNER JOIN tags t ON pt.tag_id = t.tag_id 
       WHERE pt.post_id = ?`,
      [postId]
    );
    post.tags = tags;

    return NextResponse.json({ success: true, post });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT /api/admin/blogs/[id] - Update post
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await requireAuth(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const postId = parseInt(id);

    const body = await req.json();
    const {
      title,
      content,
      slug,
      category_id,
      post_status,
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

    // Verify slug uniqueness (excluding current post)
    const [existing] = await pool.query<RowDataPacket[]>(
      'SELECT post_id FROM posts WHERE post_slug = ? AND post_id != ? LIMIT 1',
      [finalSlug, postId]
    );
    if (existing.length > 0) {
      finalSlug = `${finalSlug}-${postId}`;
    }

    const cleanContent = cleanHtml(content);
    const cleanMetaTitle = meta_title?.trim() || cleanTitle;
    const cleanMetaDesc =
      meta_description?.trim() ||
      cleanContent.replace(/<[^>]*>?/gm, '').substring(0, 160);
    const cleanMetaKeyword = meta_keyword?.trim() || '';
    const cleanStatus = post_status === 'published' ? 'published' : 'draft';
    const cleanAuthor = author_name !== undefined ? (author_name?.trim() || null) : undefined;

    // Check if transitioning to published
    const [current] = await pool.query<RowDataPacket[]>(
      'SELECT post_status, published_at FROM posts WHERE post_id = ?',
      [postId]
    );
    let publishedAt = current[0]?.published_at;
    if (cleanStatus === 'published' && !publishedAt) {
      publishedAt = new Date();
    }

    await pool.query(
      `UPDATE posts SET 
        post_title = ?,
        post_content = ?,
        post_slug = ?,
        category_id = ?,
        author_name = ?,
        meta_title = ?,
        meta_description = ?,
        meta_keyword = ?,
        image_path = COALESCE(?, image_path),
        schema_data = ?,
        post_status = ?,
        published_at = ?,
        updated_at = NOW()
       WHERE post_id = ?`,
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
        postId,
      ]
    );

    // Update tags: remove old relations then re-insert
    await pool.query('DELETE FROM post_tags WHERE post_id = ?', [postId]);

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
      message: 'Post updated successfully',
      post_id: postId,
      slug: finalSlug,
    });
  } catch (error: any) {
    console.error('Update post error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE /api/admin/blogs/[id] - Delete post
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await requireAuth(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const postId = parseInt(id);

    // Delete tag associations first
    await pool.query('DELETE FROM post_tags WHERE post_id = ?', [postId]);

    // Delete post
    const [result] = await pool.query<ResultSetHeader>(
      'DELETE FROM posts WHERE post_id = ?',
      [postId]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ error: 'Post not found or already deleted' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Post deleted successfully' });
  } catch (error: any) {
    console.error('Delete post error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
