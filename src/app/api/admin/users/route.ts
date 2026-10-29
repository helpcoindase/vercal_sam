import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { requireAuth, hashPassword } from '@/lib/auth';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

// GET /api/admin/users - List users
export async function GET(req: NextRequest) {
  const currentUser = await requireAuth(req);
  if (!currentUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const [users] = await pool.query<RowDataPacket[]>(
      `SELECT id, username, email, name, role, created_at, last_login 
       FROM users 
       ORDER BY created_at DESC`
    );
    return NextResponse.json({ success: true, users });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/admin/users - Create user
export async function POST(req: NextRequest) {
  const currentUser = await requireAuth(req);
  if (!currentUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { username, email, password, name, role = 'Administrator' } = body;

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: 'Username, email and password are required' },
        { status: 400 }
      );
    }

    // Check if username or email already exists
    const [existing] = await pool.query<RowDataPacket[]>(
      'SELECT id FROM users WHERE username = ? OR email = ? LIMIT 1',
      [username.trim(), email.trim()]
    );
    if (existing.length > 0) {
      return NextResponse.json(
        { error: 'Username or email already in use' },
        { status: 400 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO users (username, email, password, name, role, created_at)
       VALUES (?, ?, ?, ?, ?, NOW())`,
      [username.trim(), email.trim(), hashedPassword, name?.trim() || null, role]
    );

    return NextResponse.json({
      success: true,
      message: 'User created successfully',
      id: result.insertId,
    });
  } catch (error: any) {
    console.error('Create user error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE /api/admin/users?id=... - Delete user
export async function DELETE(req: NextRequest) {
  const currentUser = await requireAuth(req);
  if (!currentUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const deleteId = parseInt(searchParams.get('id') || '0');

    if (!deleteId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Prevent self-delete
    if (deleteId === currentUser.id) {
      return NextResponse.json({ error: 'You cannot delete yourself' }, { status: 400 });
    }

    // Check target user role
    const [target] = await pool.query<RowDataPacket[]>(
      'SELECT role FROM users WHERE id = ?',
      [deleteId]
    );

    if (target.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (target[0].role === 'Developer' && currentUser.role !== 'Developer') {
      return NextResponse.json(
        { error: 'Access Denied: You cannot delete a Developer account' },
        { status: 403 }
      );
    }

    await pool.query('DELETE FROM users WHERE id = ?', [deleteId]);

    return NextResponse.json({ success: true, message: 'User deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
