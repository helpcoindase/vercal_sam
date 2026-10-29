import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { RowDataPacket } from 'mysql2';

export async function GET() {
  try {
    const [tags] = await pool.query<RowDataPacket[]>(
      `SELECT t.tag_id, t.tag_name, t.tag_slug, COUNT(pt.post_id) as post_count
       FROM tags t
       LEFT JOIN post_tags pt ON t.tag_id = pt.tag_id
       GROUP BY t.tag_id, t.tag_name, t.tag_slug
       ORDER BY t.tag_name ASC`
    );

    return NextResponse.json({ success: true, tags });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
