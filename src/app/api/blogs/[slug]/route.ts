import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { RowDataPacket } from 'mysql2';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    if (!slug) {
      return NextResponse.json({ error: 'Post slug is required' }, { status: 400 });
    }

    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT p.*, c.category_name, c.category_slug 
       FROM posts p 
       LEFT JOIN category c ON p.category_id = c.category_id 
       WHERE (p.post_slug = ? OR p.post_id = ?) AND p.post_status = 'published'
       LIMIT 1`,
      [slug, isNaN(Number(slug)) ? 0 : Number(slug)]
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
      [post.post_id]
    );
    post.tags = tags;

    // Fetch related posts (same category or latest, excluding current)
    const [related] = await pool.query<RowDataPacket[]>(
      `SELECT p.post_id, p.post_slug, p.post_title, p.image_path, p.created_at, c.category_name
       FROM posts p
       LEFT JOIN category c ON p.category_id = c.category_id
       WHERE p.post_status = 'published' AND p.post_id != ?
       ORDER BY (p.category_id = ?) DESC, p.created_at DESC
       LIMIT 3`,
      [post.post_id, post.category_id || 0]
    );

    // Fetch next and prev posts
    const [prevPost] = await pool.query<RowDataPacket[]>(
      `SELECT post_title, post_slug FROM posts WHERE post_id < ? AND post_status = 'published' ORDER BY post_id DESC LIMIT 1`,
      [post.post_id]
    );
    const [nextPost] = await pool.query<RowDataPacket[]>(
      `SELECT post_title, post_slug FROM posts WHERE post_id > ? AND post_status = 'published' ORDER BY post_id ASC LIMIT 1`,
      [post.post_id]
    );

    return NextResponse.json({
      success: true,
      post,
      related,
      navigation: {
        prev: prevPost[0] || null,
        next: nextPost[0] || null,
      },
    });
  } catch (error: any) {
    console.error('Error fetching blog detail:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post: ' + error.message },
      { status: 500 }
    );
  }
}
