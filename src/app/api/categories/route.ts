import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { RowDataPacket } from 'mysql2';

export async function GET() {
  try {
    const [categories] = await pool.query<RowDataPacket[]>(
      `SELECT c.category_id, c.category_name, c.category_slug,
              COUNT(CASE WHEN p.post_status = 'published' THEN 1 END) as post_count
       FROM category c
       LEFT JOIN posts p ON c.category_id = p.category_id
       GROUP BY c.category_id, c.category_name, c.category_slug
       ORDER BY c.category_name ASC`
    );

    return NextResponse.json({ success: true, categories });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
