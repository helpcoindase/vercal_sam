# Samwarthika Ayurvedic Hospital — Production Backend API

A standalone, production-grade Node.js / Express backend service connecting to MySQL database.

## Architecture

- **Frontend (Root / Next.js)**: Runs on port `3000` (or static `out/` export on S3/Nginx).
- **Backend (`/backend`)**: Standalone Node.js Express server running on port `5000` (`server.js`).
- **Database**: MySQL (Localhost or AWS RDS).

---

## Folder Structure

```
work/
├── backend/                  <-- STANDALONE BACKEND
│   ├── server.js             <-- Full backend server (Auth, Blog, CMS Admin, Uploads)
│   ├── package.json          <-- Backend dependencies
│   ├── .env                  <-- Environment variables (Local/AWS)
│   └── public/images/blogs/  <-- Uploaded blog images
├── src/                      <-- FRONTEND (Next.js)
│   ├── app/
│   │   ├── blog/             <-- Public blog pages
│   │   └── admin/            <-- CMS Admin dashboard
│   └── ...
├── blog.sql                  <-- Database schema
└── next.config.ts
```

---

## Quick Start (Local Development)

1. Open a terminal in the `backend` folder:
   ```bash
   cd backend
   npm install
   npm start
   ```

2. The server will start on port `5000`:
   - API Base: `http://localhost:5000`
   - Health Check: `http://localhost:5000/health`
   - Blogs API: `http://localhost:5000/api/blogs`

---

## Production Deployment on AWS EC2

### 1. Environment Variables (`backend/.env`)

For production with AWS RDS MySQL:

```env
PORT=5000
NODE_ENV=production

# AWS RDS Database
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
DB_PORT=

JWT_SECRET=samwarthika_super_secure_production_key_2026
JWT_EXPIRES_IN=7d
CORS_ORIGIN=*
```

### 2. Start with PM2 (24/7 background process manager)

```bash
cd /var/www/samwarthika/backend
npm install --production
sudo npm install -g pm2
pm2 start server.js --name "samwarthika-backend"
pm2 save
pm2 startup
```

### 3. Nginx Reverse Proxy (Optional Subdomain or Path)

Map `api.yourdomain.com` or `/api` to port `5000`:

```nginx
server {
    listen 80;
    server_name api.yourdomain.com;
    client_max_body_size 25M;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## API Reference

### Public Endpoints:
- `GET /health` — Server and database health check
- `GET /api/blogs` — Query params: `page`, `limit`, `category`, `tag`, `search`
- `GET /api/blogs/:slug` — Single article with tags, category and related posts
- `GET /api/categories` — Categories with article count
- `GET /api/tags` — Tags with article count

### Admin Endpoints (Require Bearer Token):
- `POST /api/auth/login` — Admin login (`admin` / `admin123`)
- `GET /api/auth/me` — Verify session
- `POST /api/auth/logout` — Logout
- `GET /api/admin/stats` — Dashboard statistics
- `GET /api/admin/blogs` — Manage posts list (filters: `all`, `published`, `draft`)
- `POST /api/admin/blogs` — Create post with SEO and schema
- `GET /api/admin/blogs/:id` — Get post details for editing
- `PUT /api/admin/blogs/:id` — Update post
- `DELETE /api/admin/blogs/:id` — Delete post
- `GET / POST / DELETE /api/admin/categories` — Manage categories
- `GET / POST /api/admin/tags` — Manage tags
- `GET / POST / DELETE /api/admin/users` — Manage admin users
- `POST /api/admin/upload` — Upload featured or content images
