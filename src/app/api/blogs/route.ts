import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { RowDataPacket } from 'mysql2';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') || '6')));
    const offset = (page - 1) * limit;

    const category = searchParams.get('category')?.trim();
    const tag = searchParams.get('tag')?.trim();
    const search = searchParams.get('search')?.trim();

    const conditions: string[] = ["p.post_status = 'published'"];
    const params: any[] = [];

    if (category) {
      conditions.push('(c.category_slug = ? OR c.category_id = ?)');
      params.push(category, isNaN(Number(category)) ? 0 : Number(category));
    }

    if (tag) {
      conditions.push(`p.post_id IN (
        SELECT pt.post_id FROM post_tags pt 
        INNER JOIN tags t ON pt.tag_id = t.tag_id 
        WHERE t.tag_slug = ? OR t.tag_id = ?
      )`);
      params.push(tag, isNaN(Number(tag)) ? 0 : Number(tag));
    }

    if (search) {
      conditions.push('(p.post_title LIKE ? OR p.meta_description LIKE ? OR p.meta_keyword LIKE ?)');
      const wild = `%${search}%`;
      params.push(wild, wild, wild);
    }

    const whereClause = conditions.join(' AND ');

    // Count query
    const [countResult] = await pool.query<RowDataPacket[]>(
      `SELECT COUNT(*) as total 
       FROM posts p 
       LEFT JOIN category c ON p.category_id = c.category_id 
       WHERE ${whereClause}`,
      params
    );
    const total = countResult[0]?.total || 0;

    // Posts query (only necessary fields to minimize bandwidth & memory)
    const [posts] = await pool.query<RowDataPacket[]>(
      `SELECT p.post_id, p.post_slug, p.post_title, p.post_status, p.author_name,
              p.meta_title, p.meta_description, p.meta_keyword,
              p.image_path, p.created_at, p.published_at,
              c.category_name, c.category_slug, c.category_id
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
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs: ' + error.message },
      { status: 500 }
    );
  }
}
