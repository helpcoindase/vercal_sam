/**
 * ============================================================================
 * Production Node.js Backend Server for Samwarthika Blog & CMS Dashboard
 * ============================================================================
 * Features:
 *  - High-performance Express API with low memory footprint
 *  - Direct MySQL Connection Pooling with keep-alive & auto-reconnect
 *  - Full REST API for Public Blog and Admin Dashboard
 *  - Secure JWT Authentication & BCrypt Password Hashing (compatible with PHP $2y$)
 *  - Image Uploads via Multer (stored in public/images/blogs)
 *  - Production-ready error handling, CORS and graceful shutdown
 * ============================================================================
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'samwarthika_ayurveda_production_jwt_secret_2026_secure';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

// ============================================================================
// 1. MySQL Connection Pool
// ============================================================================
const dbHost = process.env.DB_HOST || 'localhost';
const dbUser = process.env.DB_USER !== undefined ? process.env.DB_USER : 'root';
const dbPass = process.env.DB_PASS !== undefined ? process.env.DB_PASS : '';
const dbName = process.env.DB_NAME || 'samwarthika';
const dbPort = Number(process.env.DB_PORT) || 3306;

const pool = mysql.createPool({
  host: dbHost,
  user: dbUser,
  password: dbPass,
  database: dbName,
  port: dbPort,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
});

// Test connection on startup
(async () => {
  try {
    const conn = await pool.getConnection();
    console.log(`[Database] Connected successfully to MySQL (${dbHost}:${dbPort}/${dbName})`);
    conn.release();
  } catch (err) {
    console.error(`[Database Error] Failed to connect to MySQL:`, err.message);
  }
})();

// ============================================================================
// 2. Middlewares & Static Files
// ============================================================================
app.use(cors({
  origin: process.env.CORS_ORIGIN === '*' ? true : (process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : true),
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-access-token'],
}));

app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Upload directory setup
const localUploadDir = path.join(__dirname, 'public', 'images', 'blogs');
const rootUploadDir = path.join(__dirname, '..', 'public', 'images', 'blogs');

// Ensure upload folders exist
try {
  fs.mkdirSync(localUploadDir, { recursive: true });
} catch (e) { }

// Serve static images from both backend folder and root Next.js public folder
app.use('/images/blogs', express.static(localUploadDir));
if (fs.existsSync(rootUploadDir)) {
  app.use('/images/blogs', express.static(rootUploadDir));
}
// Also serve assets if referenced
const rootAssetsDir = path.join(__dirname, '..', 'public', 'assets');
if (fs.existsSync(rootAssetsDir)) {
  app.use('/assets', express.static(rootAssetsDir));
}

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // If root frontend directory exists, write to root public folder so Next.js also sees it, otherwise local
    const dest = fs.existsSync(rootUploadDir) ? rootUploadDir : localUploadDir;
    cb(null, dest);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase() || '.jpg';
    const cleanName = path
      .basename(file.originalname, ext)
      .replace(/[^a-zA-Z0-9_-]/g, '')
      .substring(0, 50);
    cb(null, `${Date.now()}_${cleanName}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 25 * 1024 * 1024 }, // 25MB
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|webp|gif|avif|svg/;
    const ext = allowed.test(path.extname(file.originalname).toLowerCase());
    const mime = allowed.test(file.mimetype);
    if (ext && mime) {
      return cb(null, true);
    }
    cb(new Error('Only image files (jpg, png, webp, gif, avif, svg) are allowed'));
  },
});

// ============================================================================
// 3. Helper Functions
// ============================================================================
function generateSlug(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function cleanHtml(rawHtml) {
  if (!rawHtml) return '';
  let html = rawHtml.toString();

  // 1. Strip all inline style="..." attributes (especially oklch, font-size, etc.)
  html = html.replace(/\s*style="[^"]*"/gi, '');
  html = html.replace(/\s*style='[^']*'/gi, '');

  // 2. If entire document is wrapped in <blockquote>...</blockquote>, unwrap it
  let trimmed = html.trim();
  if (trimmed.startsWith('<blockquote>') && trimmed.endsWith('</blockquote>')) {
    const inner = trimmed.substring('<blockquote>'.length, trimmed.length - '</blockquote>'.length).trim();
    if (!inner.includes('</blockquote>')) {
      html = inner;
    }
  }

  // 3. Fix invalid heading wrappers where headings wrap block elements
  html = html.replace(/<h[1-6]>([\s\S]*?)<\/h[1-6]>/gi, (match, inner) => {
    if (inner.includes('<p>') || inner.includes('<ul>') || inner.includes('<ol>') || inner.includes('<table>')) {
      return inner;
    }
    return match;
  });

  // 4. Strip spans without classes or attributes
  html = html.replace(/<span>([\s\S]*?)<\/span>/gi, '$1');

  // 5. Clean up redundant empty tags
  html = html.replace(/(<p>\s*(<br\s*\/?>)?\s*<\/p>\s*){2,}/gi, '<p></p>');

  return html.trim();
}

async function verifyPassword(provided, storedHash) {
  if (!storedHash) return false;
  // Normalize PHP $2y$ prefix to $2a$ for bcryptjs
  const normalized = storedHash.replace(/^\$2y\$/, '$2a$');
  try {
    const isMatch = await bcrypt.compare(provided, normalized);
    if (isMatch) return true;
  } catch (e) { }
  return provided === storedHash; // legacy fallback
}

// Authentication Middleware
function authenticateAdmin(req, res, next) {
  let token = null;

  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7);
  } else if (req.headers['x-access-token']) {
    token = req.headers['x-access-token'];
  } else if (req.headers.cookie) {
    // Parse cookie if present
    const match = req.headers.cookie.match(/admin_token=([^;]+)/);
    if (match) token = match[1];
  }

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Access token missing' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized: Invalid or expired token' });
  }
}

// ============================================================================
// 4. Health Check Route
// ============================================================================
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    service: 'Samwarthika Ayurveda Backend API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

app.get('/health', async (req, res) => {
  try {
    const [result] = await pool.query('SELECT 1 as live');
    res.json({ status: 'healthy', database: 'connected', uptime: process.uptime() });
  } catch (err) {
    res.status(500).json({ status: 'unhealthy', database: err.message });
  }
});

// ============================================================================
// 5. Authentication API Routes
// ============================================================================

// POST /api/auth/login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const [rows] = await pool.query(
      'SELECT id, username, email, password, role FROM users WHERE username = ? OR email = ? LIMIT 1',
      [username.trim(), username.trim()]
    );

    if (!rows || rows.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const user = rows[0];
    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Update last_login
    await pool.query('UPDATE users SET last_login = NOW() WHERE id = ?', [user.id]);

    const sessionUser = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role || 'Administrator',
    };

    const token = jwt.sign(sessionUser, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    // Set cookie for browser clients
    res.cookie('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      success: true,
      token,
      user: sessionUser,
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Internal server error: ' + err.message });
  }
});

// GET /api/auth/me
app.get('/api/auth/me', authenticateAdmin, (req, res) => {
  res.json({ authenticated: true, user: req.user });
});

// POST /api/auth/logout
app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('admin_token');
  res.json({ success: true, message: 'Logged out successfully' });
});

// ============================================================================
// 6. Public Blog API Routes
// ============================================================================

// GET /api/blogs - Public paginated list of published posts
app.get('/api/blogs', async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit) || 6));
    const offset = (page - 1) * limit;

    const category = req.query.category ? req.query.category.trim() : null;
    const tag = req.query.tag ? req.query.tag.trim() : null;
    const search = req.query.search ? req.query.search.trim() : null;

    const conditions = ["p.post_status = 'published'"];
    const params = [];

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

    // Total count
    const [countResult] = await pool.query(
      `SELECT COUNT(*) as total 
       FROM posts p 
       LEFT JOIN category c ON p.category_id = c.category_id 
       WHERE ${whereClause}`,
      params
    );
    const total = countResult[0]?.total || 0;

    // Posts query
    const [posts] = await pool.query(
      `SELECT p.post_id, p.post_slug, p.post_title, p.author_name, p.post_status, 
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

    // Fetch tags in a single batch
    if (posts.length > 0) {
      const postIds = posts.map((p) => p.post_id);
      const [tagRows] = await pool.query(
        `SELECT pt.post_id, t.tag_id, t.tag_name, t.tag_slug
         FROM post_tags pt
         INNER JOIN tags t ON pt.tag_id = t.tag_id
         WHERE pt.post_id IN (?)`,
        [postIds]
      );

      const tagMap = {};
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

    res.json({
      success: true,
      posts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    console.error('Error fetching blogs:', err);
    res.status(500).json({ error: 'Failed to fetch blogs: ' + err.message });
  }
});

// GET /api/blogs/:slug - Public single post by slug
app.get('/api/blogs/:slug', async (req, res) => {
  try {
    const slug = req.params.slug;
    const [rows] = await pool.query(
      `SELECT p.*, c.category_name, c.category_slug 
       FROM posts p 
       LEFT JOIN category c ON p.category_id = c.category_id 
       WHERE (p.post_slug = ? OR p.post_id = ?) AND p.post_status = 'published'
       LIMIT 1`,
      [slug, isNaN(Number(slug)) ? 0 : Number(slug)]
    );

    if (!rows || rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const post = rows[0];

    // Tags
    const [tags] = await pool.query(
      `SELECT t.tag_id, t.tag_name, t.tag_slug 
       FROM post_tags pt 
       INNER JOIN tags t ON pt.tag_id = t.tag_id 
       WHERE pt.post_id = ?`,
      [post.post_id]
    );
    post.tags = tags;

    // Related posts
    const [related] = await pool.query(
      `SELECT p.post_id, p.post_slug, p.post_title, p.image_path, p.created_at, c.category_name
       FROM posts p
       LEFT JOIN category c ON p.category_id = c.category_id
       WHERE p.post_status = 'published' AND p.post_id != ?
       ORDER BY (p.category_id = ?) DESC, p.created_at DESC
       LIMIT 3`,
      [post.post_id, post.category_id || 0]
    );

    // Prev / Next
    const [prevPost] = await pool.query(
      `SELECT post_title, post_slug FROM posts WHERE post_id < ? AND post_status = 'published' ORDER BY post_id DESC LIMIT 1`,
      [post.post_id]
    );
    const [nextPost] = await pool.query(
      `SELECT post_title, post_slug FROM posts WHERE post_id > ? AND post_status = 'published' ORDER BY post_id ASC LIMIT 1`,
      [post.post_id]
    );

    res.json({
      success: true,
      post,
      related,
      navigation: {
        prev: prevPost[0] || null,
        next: nextPost[0] || null,
      },
    });
  } catch (err) {
    console.error('Error fetching blog detail:', err);
    res.status(500).json({ error: 'Failed to fetch blog post: ' + err.message });
  }
});

// GET /api/categories - Public categories
app.get('/api/categories', async (req, res) => {
  try {
    const [categories] = await pool.query(
      `SELECT c.category_id, c.category_name, c.category_slug,
              COUNT(CASE WHEN p.post_status = 'published' THEN 1 END) as post_count
       FROM category c
       LEFT JOIN posts p ON c.category_id = p.category_id
       GROUP BY c.category_id, c.category_name, c.category_slug
       ORDER BY c.category_name ASC`
    );
    res.json({ success: true, categories });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/tags - Public tags
app.get('/api/tags', async (req, res) => {
  try {
    const [tags] = await pool.query(
      `SELECT t.tag_id, t.tag_name, t.tag_slug, COUNT(pt.post_id) as post_count
       FROM tags t
       LEFT JOIN post_tags pt ON t.tag_id = pt.tag_id
       GROUP BY t.tag_id, t.tag_name, t.tag_slug
       ORDER BY t.tag_name ASC`
    );
    res.json({ success: true, tags });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================================================================
// 7. Admin Dashboard API Routes (Protected)
// ============================================================================

// GET /api/admin/stats
app.get('/api/admin/stats', authenticateAdmin, async (req, res) => {
  try {
    const [postStats] = await pool.query(
      `SELECT 
        COUNT(*) as total_posts,
        SUM(CASE WHEN post_status = 'published' THEN 1 ELSE 0 END) as published_posts,
        SUM(CASE WHEN post_status = 'draft' THEN 1 ELSE 0 END) as draft_posts
       FROM posts`
    );

    const [catStats] = await pool.query('SELECT COUNT(*) as total_categories FROM category');
    const [tagStats] = await pool.query('SELECT COUNT(*) as total_tags FROM tags');
    const [userStats] = await pool.query('SELECT COUNT(*) as total_users FROM users');

    const [recentPosts] = await pool.query(
      `SELECT p.post_id, p.post_slug, p.post_title, p.post_status, p.created_at, c.category_name
       FROM posts p
       LEFT JOIN category c ON p.category_id = c.category_id
       ORDER BY p.created_at DESC
       LIMIT 5`
    );

    res.json({
      success: true,
      stats: {
        totalPosts: Number(postStats[0]?.total_posts || 0),
        publishedPosts: Number(postStats[0]?.published_posts || 0),
        draftPosts: Number(postStats[0]?.draft_posts || 0),
        totalCategories: Number(catStats[0]?.total_categories || 0),
        totalTags: Number(tagStats[0]?.total_tags || 0),
        totalUsers: Number(userStats[0]?.total_users || 0),
      },
      recentPosts,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/admin/blogs - Admin paginated list of all posts
app.get('/api/admin/blogs', authenticateAdmin, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 10));
    const offset = (page - 1) * limit;

    const status = req.query.status ? req.query.status.trim() : null;
    const search = req.query.search ? req.query.search.trim() : null;
    const category = req.query.category ? req.query.category.trim() : null;

    const conditions = ['1=1'];
    const params = [];

    if (status && status !== 'all') {
      conditions.push('p.post_status = ?');
      params.push(status);
    }

    if (category) {
      conditions.push('p.category_id = ?');
      params.push(Number(category));
    }

    if (search) {
      conditions.push('(p.post_title LIKE ? OR p.post_slug LIKE ? OR p.meta_description LIKE ?)');
      const wild = `%${search}%`;
      params.push(wild, wild, wild);
    }

    const whereClause = conditions.join(' AND ');

    const [countResult] = await pool.query(
      `SELECT COUNT(*) as total FROM posts p WHERE ${whereClause}`,
      params
    );
    const total = countResult[0]?.total || 0;

    const [posts] = await pool.query(
      `SELECT p.post_id, p.post_slug, p.post_title, p.author_name, p.post_status, p.image_path,
              p.created_at, p.updated_at, p.published_at,
              c.category_id, c.category_name, c.category_slug
       FROM posts p
       LEFT JOIN category c ON p.category_id = c.category_id
       WHERE ${whereClause}
       ORDER BY p.created_at DESC
       LIMIT ? OFFSET ?`,
      [...params, limit, offset]
    );

    if (posts.length > 0) {
      const postIds = posts.map((p) => p.post_id);
      const [tagRows] = await pool.query(
        `SELECT pt.post_id, t.tag_id, t.tag_name, t.tag_slug
         FROM post_tags pt
         INNER JOIN tags t ON pt.tag_id = t.tag_id
         WHERE pt.post_id IN (?)`,
        [postIds]
      );

      const tagMap = {};
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

    res.json({
      success: true,
      posts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/admin/blogs - Create new post
app.post('/api/admin/blogs', authenticateAdmin, async (req, res) => {
  try {
    const {
      title,
      content,
      slug,
      category_id,
      author_name,
      post_status = 'draft',
      meta_title,
      meta_description,
      meta_keyword,
      image_path,
      schema_data,
      tags = [],
    } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({ error: 'Blog title is required' });
    }

    const cleanTitle = title.trim();
    let finalSlug = slug ? generateSlug(slug) : generateSlug(cleanTitle);

    // Verify slug uniqueness
    const [existing] = await pool.query(
      'SELECT post_id FROM posts WHERE post_slug = ? LIMIT 1',
      [finalSlug]
    );
    if (existing.length > 0) {
      finalSlug = `${finalSlug}-${Date.now().toString().slice(-4)}`;
    }

    const cleanContent = cleanHtml(content);
    const cleanMetaTitle = meta_title?.trim() || cleanTitle;
    const cleanMetaDesc =
      meta_description?.trim() ||
      cleanContent.replace(/<[^>]*>?/gm, '').substring(0, 160);
    const cleanMetaKeyword = meta_keyword?.trim() || '';
    const cleanStatus = post_status === 'published' ? 'published' : 'draft';
    const publishedAt = cleanStatus === 'published' ? new Date() : null;
    const cleanAuthor = author_name?.trim() || null;

    const [result] = await pool.query(
      `INSERT INTO posts 
       (post_title, post_content, post_slug, category_id, author_name, meta_title, meta_description, meta_keyword, 
        image_path, schema_data, post_status, created_at, updated_at, published_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), ?)`,
      [
        cleanTitle,
        cleanContent,
        finalSlug,
        category_id ? Number(category_id) : null,
        cleanAuthor,
        cleanMetaTitle,
        cleanMetaDesc,
        cleanMetaKeyword,
        image_path || null,
        schema_data || null,
        cleanStatus,
        publishedAt,
      ]
    );

    const postId = result.insertId;

    // Tags
    if (Array.isArray(tags) && tags.length > 0) {
      for (const tagItem of tags) {
        let tagId = null;
        const tagName = typeof tagItem === 'string' ? tagItem.trim() : tagItem.tag_name?.trim();
        if (!tagName) continue;

        const tagSlug = generateSlug(tagName);
        const [existingTag] = await pool.query(
          'SELECT tag_id FROM tags WHERE tag_slug = ? LIMIT 1',
          [tagSlug]
        );

        if (existingTag.length > 0) {
          tagId = existingTag[0].tag_id;
        } else {
          const [insertTag] = await pool.query(
            'INSERT INTO tags (tag_name, tag_slug) VALUES (?, ?)',
            [tagName, tagSlug]
          );
          tagId = insertTag.insertId;
        }

        if (tagId) {
          await pool.query(
            'INSERT IGNORE INTO post_tags (post_id, tag_id) VALUES (?, ?)',
            [postId, tagId]
          );
        }
      }
    }

    res.json({
      success: true,
      message: 'Blog post created successfully',
      post_id: postId,
      slug: finalSlug,
    });
  } catch (err) {
    console.error('Create blog error:', err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/admin/blogs/:id - Get single post by ID
app.get('/api/admin/blogs/:id', authenticateAdmin, async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const [rows] = await pool.query(
      `SELECT p.*, c.category_name 
       FROM posts p 
       LEFT JOIN category c ON p.category_id = c.category_id 
       WHERE p.post_id = ? 
       LIMIT 1`,
      [postId]
    );

    if (!rows || rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const post = rows[0];

    const [tags] = await pool.query(
      `SELECT t.tag_id, t.tag_name, t.tag_slug 
       FROM post_tags pt 
       INNER JOIN tags t ON pt.tag_id = t.tag_id 
       WHERE pt.post_id = ?`,
      [postId]
    );
    post.tags = tags;

    res.json({ success: true, post });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/admin/blogs/:id - Update post
app.put('/api/admin/blogs/:id', authenticateAdmin, async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const {
      title,
      content,
      slug,
      category_id,
      author_name,
      post_status,
      meta_title,
      meta_description,
      meta_keyword,
      image_path,
      schema_data,
      tags = [],
    } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({ error: 'Blog title is required' });
    }

    const cleanTitle = title.trim();
    let finalSlug = slug ? generateSlug(slug) : generateSlug(cleanTitle);

    const [existing] = await pool.query(
      'SELECT post_id FROM posts WHERE post_slug = ? AND post_id != ? LIMIT 1',
      [finalSlug, postId]
    );
    if (existing.length > 0) {
      finalSlug = `${finalSlug}-${postId}`;
    }

    const cleanContent = cleanHtml(content);
    const cleanMetaTitle = meta_title?.trim() || cleanTitle;
    const cleanMetaDesc =
      meta_description?.trim() ||
      cleanContent.replace(/<[^>]*>?/gm, '').substring(0, 160);
    const cleanMetaKeyword = meta_keyword?.trim() || '';
    const cleanStatus = post_status === 'published' ? 'published' : 'draft';
    const cleanAuthor = author_name !== undefined ? (author_name?.trim() || null) : undefined;

    const [current] = await pool.query(
      'SELECT post_status, published_at FROM posts WHERE post_id = ?',
      [postId]
    );
    let publishedAt = current[0]?.published_at;
    if (cleanStatus === 'published' && !publishedAt) {
      publishedAt = new Date();
    }

    await pool.query(
      `UPDATE posts SET 
        post_title = ?,
        post_content = ?,
        post_slug = ?,
        category_id = ?,
        author_name = COALESCE(?, author_name),
        meta_title = ?,
        meta_description = ?,
        meta_keyword = ?,
        image_path = COALESCE(?, image_path),
        schema_data = ?,
        post_status = ?,
        published_at = ?,
        updated_at = NOW()
       WHERE post_id = ?`,
      [
        cleanTitle,
        cleanContent,
        finalSlug,
        category_id ? Number(category_id) : null,
        cleanAuthor,
        cleanMetaTitle,
        cleanMetaDesc,
        cleanMetaKeyword,
        image_path || null,
        schema_data || null,
        cleanStatus,
        publishedAt,
        postId,
      ]
    );

    // Update tags
    await pool.query('DELETE FROM post_tags WHERE post_id = ?', [postId]);

    if (Array.isArray(tags) && tags.length > 0) {
      for (const tagItem of tags) {
        let tagId = null;
        const tagName = typeof tagItem === 'string' ? tagItem.trim() : tagItem.tag_name?.trim();
        if (!tagName) continue;

        const tagSlug = generateSlug(tagName);
        const [existingTag] = await pool.query(
          'SELECT tag_id FROM tags WHERE tag_slug = ? LIMIT 1',
          [tagSlug]
        );

        if (existingTag.length > 0) {
          tagId = existingTag[0].tag_id;
        } else {
          const [insertTag] = await pool.query(
            'INSERT INTO tags (tag_name, tag_slug) VALUES (?, ?)',
            [tagName, tagSlug]
          );
          tagId = insertTag.insertId;
        }

        if (tagId) {
          await pool.query(
            'INSERT IGNORE INTO post_tags (post_id, tag_id) VALUES (?, ?)',
            [postId, tagId]
          );
        }
      }
    }

    res.json({
      success: true,
      message: 'Post updated successfully',
      post_id: postId,
      slug: finalSlug,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/admin/blogs/:id - Delete post
app.delete('/api/admin/blogs/:id', authenticateAdmin, async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    await pool.query('DELETE FROM post_tags WHERE post_id = ?', [postId]);
    const [result] = await pool.query('DELETE FROM posts WHERE post_id = ?', [postId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Post not found or already deleted' });
    }

    res.json({ success: true, message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================================================================
// 8. Categories & Tags Admin Routes
// ============================================================================
app.get('/api/admin/categories', authenticateAdmin, async (req, res) => {
  try {
    const [categories] = await pool.query(
      `SELECT c.category_id, c.category_name, c.category_slug,
              COUNT(p.post_id) as total_posts
       FROM category c
       LEFT JOIN posts p ON c.category_id = p.category_id
       GROUP BY c.category_id, c.category_name, c.category_slug
       ORDER BY c.category_name ASC`
    );
    res.json({ success: true, categories });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/admin/categories', authenticateAdmin, async (req, res) => {
  try {
    const { category_name } = req.body;
    if (!category_name || !category_name.trim()) {
      return res.status(400).json({ error: 'Category name is required' });
    }

    const cleanName = category_name.trim();
    const slug = generateSlug(cleanName);

    const [existing] = await pool.query(
      'SELECT category_id FROM category WHERE category_slug = ? OR category_name = ? LIMIT 1',
      [slug, cleanName]
    );

    if (existing.length > 0) {
      return res.json({
        success: true,
        category_id: existing[0].category_id,
        category_name: cleanName,
        category_slug: slug,
        existing: true,
      });
    }

    const [result] = await pool.query(
      'INSERT INTO category (category_name, category_slug) VALUES (?, ?)',
      [cleanName, slug]
    );

    res.json({
      success: true,
      category_id: result.insertId,
      category_name: cleanName,
      category_slug: slug,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/admin/categories', authenticateAdmin, async (req, res) => {
  try {
    const id = parseInt(req.query.id);
    if (!id) return res.status(400).json({ error: 'Category ID is required' });

    await pool.query('UPDATE posts SET category_id = NULL WHERE category_id = ?', [id]);
    await pool.query('DELETE FROM category WHERE category_id = ?', [id]);

    res.json({ success: true, message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/admin/tags', authenticateAdmin, async (req, res) => {
  try {
    const [tags] = await pool.query(
      `SELECT t.tag_id, t.tag_name, t.tag_slug, COUNT(pt.post_id) as total_posts
       FROM tags t
       LEFT JOIN post_tags pt ON t.tag_id = pt.tag_id
       GROUP BY t.tag_id, t.tag_name, t.tag_slug
       ORDER BY t.tag_name ASC`
    );
    res.json({ success: true, tags });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/admin/tags', authenticateAdmin, async (req, res) => {
  try {
    const { tag_name } = req.body;
    if (!tag_name || !tag_name.trim()) {
      return res.status(400).json({ error: 'Tag name is required' });
    }

    const cleanName = tag_name.trim();
    const slug = generateSlug(cleanName);

    const [existing] = await pool.query(
      'SELECT tag_id FROM tags WHERE tag_slug = ? OR tag_name = ? LIMIT 1',
      [slug, cleanName]
    );

    if (existing.length > 0) {
      return res.json({
        success: true,
        tag_id: existing[0].tag_id,
        tag_name: cleanName,
        tag_slug: slug,
        existing: true,
      });
    }

    const [result] = await pool.query(
      'INSERT INTO tags (tag_name, tag_slug) VALUES (?, ?)',
      [cleanName, slug]
    );

    res.json({
      success: true,
      tag_id: result.insertId,
      tag_name: cleanName,
      tag_slug: slug,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================================================================
// 9. User Accounts Admin Routes
// ============================================================================
app.get('/api/admin/users', authenticateAdmin, async (req, res) => {
  try {
    const [users] = await pool.query(
      `SELECT id, username, email, name, role, created_at, last_login 
       FROM users 
       ORDER BY created_at DESC`
    );
    res.json({ success: true, users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/admin/users', authenticateAdmin, async (req, res) => {
  try {
    const { username, email, password, name, role = 'Administrator' } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Username, email and password are required' });
    }

    const [existing] = await pool.query(
      'SELECT id FROM users WHERE username = ? OR email = ? LIMIT 1',
      [username.trim(), email.trim()]
    );
    if (existing.length > 0) {
      return res.status(400).json({ error: 'Username or email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      `INSERT INTO users (username, email, password, name, role, created_at)
       VALUES (?, ?, ?, ?, ?, NOW())`,
      [username.trim(), email.trim(), hashedPassword, name?.trim() || null, role]
    );

    res.json({
      success: true,
      message: 'User created successfully',
      id: result.insertId,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/admin/users', authenticateAdmin, async (req, res) => {
  try {
    const deleteId = parseInt(req.query.id);
    if (!deleteId) return res.status(400).json({ error: 'User ID is required' });

    if (deleteId === req.user.id) {
      return res.status(400).json({ error: 'You cannot delete yourself' });
    }

    const [target] = await pool.query('SELECT role FROM users WHERE id = ?', [deleteId]);
    if (target.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (target[0].role === 'Developer' && req.user.role !== 'Developer') {
      return res.status(403).json({ error: 'Access Denied: You cannot delete a Developer account' });
    }

    await pool.query('DELETE FROM users WHERE id = ?', [deleteId]);
    res.json({ success: true, message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================================================================
// 10. File Upload Route (Single & Multiple Content Images)
// ============================================================================
app.post('/api/admin/upload', authenticateAdmin, upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'content_images', maxCount: 10 }
]), (req, res) => {
  try {
    // Single featured image
    if (req.files && req.files['image'] && req.files['image'][0]) {
      const file = req.files['image'][0];
      return res.json({
        success: true,
        url: `images/blogs/${file.filename}`,
        fileName: file.filename,
      });
    }

    // Multiple content images
    if (req.files && req.files['content_images'] && req.files['content_images'].length > 0) {
      const uploaded = req.files['content_images'].map((file) => ({
        url: `images/blogs/${file.filename}`,
        fileName: file.filename,
      }));
      return res.json({
        success: true,
        images: uploaded,
      });
    }

    res.status(400).json({ error: 'No image uploaded' });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: err.message });
  }
});

// ============================================================================
// 11. Error Handlers & Server Listener
// ============================================================================
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found', path: req.originalUrl });
});

app.use((err, req, res, next) => {
  console.error('[Unhandled Error]', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message,
  });
});

const server = app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(` Samwarthika Production Backend API running on port ${PORT}`);
  console.log(` Local URL: http://localhost:${PORT}`);
  console.log(` Health:    http://localhost:${PORT}/health`);
  console.log(`=======================================================`);
});

// Graceful Shutdown
const shutdown = async (signal) => {
  console.log(`\n[Server] Received ${signal}. Gracefully closing MySQL pool and stopping server...`);
  server.close(async () => {
    try {
      await pool.end();
      console.log('[Server] MySQL connections closed. Process terminating.');
      process.exit(0);
    } catch (e) {
      process.exit(1);
    }
  });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
