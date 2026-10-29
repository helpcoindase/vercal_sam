import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const SECRET_KEY = process.env.JWT_SECRET || 'samwarthika_ayurveda_jwt_secret_key_2026_super_secure';
const encodedSecret = new TextEncoder().encode(SECRET_KEY);

export interface SessionUser {
  id: number;
  username: string;
  email: string;
  role: string;
}

export async function signToken(user: SessionUser): Promise<string> {
  return await new SignJWT({
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedSecret);
}

export async function verifyToken(token: string): Promise<SessionUser | null> {
  try {
    const { payload } = await jwtVerify(token, encodedSecret);
    return {
      id: Number(payload.id),
      username: String(payload.username),
      email: String(payload.email),
      role: String(payload.role),
    };
  } catch {
    return null;
  }
}

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  if (!token) return null;
  return await verifyToken(token);
}

export async function requireAuth(req?: NextRequest): Promise<SessionUser | null> {
  let token: string | undefined;
  if (req) {
    token = req.cookies.get('admin_token')?.value;
    if (!token) {
      const authHeader = req.headers.get('authorization');
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.substring(7);
      }
    }
  } else {
    const cookieStore = await cookies();
    token = cookieStore.get('admin_token')?.value;
  }

  if (!token) return null;
  return await verifyToken(token);
}

export async function verifyPassword(providedPass: string, storedHash: string): Promise<boolean> {
  if (!storedHash) return false;
  // Handle PHP $2y$ prefix by replacing with $2a$ or $2b$ for bcryptjs
  const normalizedHash = storedHash.replace(/^\$2y\$/, '$2a$');
  try {
    const isMatch = await bcrypt.compare(providedPass, normalizedHash);
    if (isMatch) return true;
  } catch {
    // If not a valid hash, fallback to direct compare for legacy plaintext
  }
  return providedPass === storedHash;
}

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}
