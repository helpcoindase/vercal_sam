import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { RowDataPacket } from 'mysql2';

export async function GET(req: NextRequest) {
  const user = await requireAuth(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const [postStats] = await pool.query<RowDataPacket[]>(
      `SELECT 
        COUNT(*) as total_posts,
        SUM(CASE WHEN post_status = 'published' THEN 1 ELSE 0 END) as published_posts,
        SUM(CASE WHEN post_status = 'draft' THEN 1 ELSE 0 END) as draft_posts
       FROM posts`
    );

    const [catStats] = await pool.query<RowDataPacket[]>('SELECT COUNT(*) as total_categories FROM category');
    const [tagStats] = await pool.query<RowDataPacket[]>('SELECT COUNT(*) as total_tags FROM tags');
    const [userStats] = await pool.query<RowDataPacket[]>('SELECT COUNT(*) as total_users FROM users');

    const [recentPosts] = await pool.query<RowDataPacket[]>(
      `SELECT p.post_id, p.post_slug, p.post_title, p.post_status, p.created_at, c.category_name
       FROM posts p
       LEFT JOIN category c ON p.category_id = c.category_id
       ORDER BY p.created_at DESC
       LIMIT 5`
    );

    return NextResponse.json({
      success: true,
      stats: {
        totalPosts: postStats[0]?.total_posts || 0,
        publishedPosts: postStats[0]?.published_posts || 0,
        draftPosts: postStats[0]?.draft_posts || 0,
        totalCategories: catStats[0]?.total_categories || 0,
        totalTags: tagStats[0]?.total_tags || 0,
        totalUsers: userStats[0]?.total_users || 0,
      },
      recentPosts,
    });
  } catch (error: any) {
    console.error('Stats error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
