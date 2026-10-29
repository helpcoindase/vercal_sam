import mysql from 'mysql2/promise';

declare global {
  // eslint-disable-next-line no-var
  var _mysqlPool: mysql.Pool | undefined;
}

const dbHost = process.env.DB_HOST || 'localhost';
const dbUser = process.env.DB_USER !== undefined ? process.env.DB_USER : 'root';
const dbPass = process.env.DB_PASS !== undefined ? process.env.DB_PASS : '';
const dbName = process.env.DB_NAME || 'samwarthika';
const dbPort = Number(process.env.DB_PORT) || 3306;

const pool = global._mysqlPool || mysql.createPool({
  host: dbHost,
  user: dbUser,
  password: dbPass,
  database: dbName,
  port: dbPort,
  waitForConnections: true,
  connectionLimit: 8,       // Keeps memory & connection usage optimized
  maxIdle: 8,
  idleTimeout: 60000,       // Close idle connections after 60s
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
});

if (process.env.NODE_ENV !== 'production') {
  global._mysqlPool = pool;
}

export default pool;

export interface Post {
  post_id: number;
  post_slug: string;
  category_id: number | null;
  category_name?: string | null;
  category_slug?: string | null;
  post_title: string;
  post_status: 'draft' | 'published';
  post_content: string;
  author_name?: string | null;
  meta_title?: string | null;
  meta_description?: string | null;
  meta_keyword?: string | null;
  created_at: string;
  updated_at: string;
  published_at?: string | null;
  image_path?: string | null;
  schema_data?: string | null;
  tags?: { tag_id: number; tag_name: string; tag_slug: string }[];
}

export interface Category {
  category_id: number;
  category_name: string;
  category_slug: string;
  post_count?: number;
}

export interface Tag {
  tag_id: number;
  tag_name: string;
  tag_slug: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  name?: string | null;
  role: string;
  created_at?: string;
  last_login?: string | null;
}
