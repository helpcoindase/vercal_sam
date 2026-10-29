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
    const [categories] = await pool.query<RowDataPacket[]>(
      `SELECT c.category_id, c.category_name, c.category_slug,
              COUNT(p.post_id) as total_posts
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

export async function POST(req: NextRequest) {
  const user = await requireAuth(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { category_name } = await req.json();
    if (!category_name || !category_name.trim()) {
      return NextResponse.json({ error: 'Category name is required' }, { status: 400 });
    }

    const cleanName = category_name.trim();
    const slug = generateSlug(cleanName);

    const [existing] = await pool.query<RowDataPacket[]>(
      'SELECT category_id FROM category WHERE category_slug = ? OR category_name = ? LIMIT 1',
      [slug, cleanName]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        { success: true, category_id: existing[0].category_id, category_name: cleanName, category_slug: slug, existing: true },
        { status: 200 }
      );
    }

    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO category (category_name, category_slug) VALUES (?, ?)',
      [cleanName, slug]
    );

    return NextResponse.json({
      success: true,
      category_id: result.insertId,
      category_name: cleanName,
      category_slug: slug,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const user = await requireAuth(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get('id') || '0');

    if (!id) {
      return NextResponse.json({ error: 'Category ID is required' }, { status: 400 });
    }

    // Set category_id = null for posts before removing
    await pool.query('UPDATE posts SET category_id = NULL WHERE category_id = ?', [id]);
    await pool.query('DELETE FROM category WHERE category_id = ?', [id]);

    return NextResponse.json({ success: true, message: 'Category deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
