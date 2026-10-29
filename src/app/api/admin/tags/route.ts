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

export async function GET(req: NextRequest) {
  const user = await requireAuth(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const [tags] = await pool.query<RowDataPacket[]>(
      `SELECT t.tag_id, t.tag_name, t.tag_slug, COUNT(pt.post_id) as total_posts
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

export async function POST(req: NextRequest) {
  const user = await requireAuth(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { tag_name } = await req.json();
    if (!tag_name || !tag_name.trim()) {
      return NextResponse.json({ error: 'Tag name is required' }, { status: 400 });
    }

    const cleanName = tag_name.trim();
    const slug = generateSlug(cleanName);

    const [existing] = await pool.query<RowDataPacket[]>(
      'SELECT tag_id FROM tags WHERE tag_slug = ? OR tag_name = ? LIMIT 1',
      [slug, cleanName]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        { success: true, tag_id: existing[0].tag_id, tag_name: cleanName, tag_slug: slug, existing: true },
        { status: 200 }
      );
    }

    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO tags (tag_name, tag_slug) VALUES (?, ?)',
      [cleanName, slug]
    );

    return NextResponse.json({
      success: true,
      tag_id: result.insertId,
      tag_name: cleanName,
      tag_slug: slug,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
