'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FileText,
  PenTool,
  Search,
  Filter,
  Trash2,
  Edit,
  ExternalLink,
  AlertTriangle,
  Loader2,
  CheckCircle,
} from 'lucide-react';

interface BlogRow {
  post_id: number;
  post_slug: string;
  post_title: string;
  post_status: string;
  image_path?: string;
  created_at: string;
  category_name?: string;
  tags?: { tag_id: number; tag_name: string }[];
}

export default function AdminBlogsPage() {
  const [posts, setPosts] = useState<BlogRow[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [search, setSearch] = useState('');
  const [activeSearch, setActiveSearch] = useState('');

  // Delete modal state
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Fetch categories for filtering
  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => {
        if (data.categories) setCategories(data.categories);
      })
      .catch((err) => console.error(err));
  }, []);

  // Fetch posts
  const loadPosts = () => {
    setLoading(true);
    const query = new URLSearchParams({
      page: page.toString(),
      limit: '10',
    });
    if (statusFilter !== 'all') query.set('status', statusFilter);
    if (categoryFilter) query.set('category', categoryFilter);
    if (activeSearch) query.set('search', activeSearch);

    fetch(`/api/admin/blogs?${query.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPosts(data.posts || []);
          setTotalPages(data.pagination?.totalPages || 1);
          setTotalPosts(data.pagination?.total || 0);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadPosts();
  }, [page, statusFilter, categoryFilter, activeSearch]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    setActiveSearch(search.trim());
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    setDeleteLoading(true);

    try {
      const res = await fetch(`/api/admin/blogs/${deleteId}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      if (data.success) {
        setToastMessage('Post deleted successfully');
        setTimeout(() => setToastMessage(null), 3000);
        setDeleteId(null);
        loadPosts();
      } else {
        alert(data.error || 'Failed to delete post');
      }
    } catch {
      alert('Error connecting to server');
    } finally {
      setDeleteLoading(false);
    }
  };

  const getImageUrl = (path?: string) => {
    if (!path) return '/assets/images/subbanner/ayurvedic-blog.webp';
    if (path.startsWith('http') || path.startsWith('/')) return path;
    return `/${path}`;
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-[var(--primary)] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce">
          <CheckCircle className="w-5 h-5 text-green-300" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
            Manage Blog Posts
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Browse, filter, edit or delete existing articles ({totalPosts} total)
          </p>
        </div>
        <Link
          href="/admin/blogs/create"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[#22350a] text-white text-xs font-semibold uppercase tracking-wider shadow-md transition"
        >
          <PenTool className="w-4 h-4" />
          New Blog Post
        </Link>
      </div>

      {/* Filters Bar */}
      <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Status Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
          {['all', 'published', 'draft'].map((s) => (
            <button
              key={s}
              onClick={() => {
                setStatusFilter(s);
                setPage(1);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition whitespace-nowrap cursor-pointer ${statusFilter === s
                ? 'bg-[var(--primary)] text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Category & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <select
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value);
              setPage(1);
            }}
            className="px-3.5 py-2 rounded-xl border border-gray-200 text-xs text-gray-700 focus:outline-none focus:border-[var(--primary)] bg-white"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c.category_id} value={c.category_id}>
                {c.category_name}
              </option>
            ))}
          </select>

          <form onSubmit={handleSearchSubmit} className="relative min-w-[240px]">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search title, slug..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 text-xs text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:border-[var(--primary)]"
            />
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-3" />
          </form>
        </div>
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-[11px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50/80 border-b border-gray-100">
              <tr>
                <th className="py-3.5 px-5">Image</th>
                <th className="py-3.5 px-4">Title & Slug</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Tags</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Created Date</th>
                <th className="py-3.5 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-gray-400 text-xs">
                    <Loader2 className="w-6 h-6 animate-spin mx-auto text-[var(--primary)] mb-2" />
                    Loading articles from MySQL...
                  </td>
                </tr>
              ) : posts.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-gray-400 text-xs">
                    No articles found matching filters.
                  </td>
                </tr>
              ) : (
                posts.map((post) => (
                  <tr key={post.post_id} className="hover:bg-gray-50/60 transition">
                    {/* Thumbnail */}
                    <td className="py-3 px-5">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-100 shadow-inner flex-shrink-0">
                        <Image
                          src={getImageUrl(post.image_path)}
                          alt={post.post_title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </td>

                    {/* Title */}
                    <td className="py-3 px-4 max-w-[280px]">
                      <span className="font-semibold text-gray-900 block truncate" title={post.post_title}>
                        {post.post_title}
                      </span>
                      <span className="text-[11px] text-gray-400 block truncate font-mono">
                        /{post.post_slug}
                      </span>
                    </td>

                    {/* Category */}
                    <td className="py-3 px-4">
                      <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 text-gray-700">
                        {post.category_name || 'Uncategorized'}
                      </span>
                    </td>

                    {/* Tags */}
                    <td className="py-3 px-4 max-w-[180px]">
                      <div className="flex flex-wrap gap-1">
                        {post.tags && post.tags.length > 0 ? (
                          post.tags.slice(0, 2).map((t) => (
                            <span
                              key={t.tag_id}
                              className="text-[10px] px-2 py-0.5 rounded bg-[#edf5ee] text-[var(--primary)]"
                            >
                              #{t.tag_name}
                            </span>
                          ))
                        ) : (
                          <span className="text-gray-300 text-xs">-</span>
                        )}
                        {post.tags && post.tags.length > 2 && (
                          <span className="text-[10px] text-gray-400">+{post.tags.length - 2}</span>
                        )}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded-full uppercase tracking-wider ${post.post_status === 'published'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-amber-100 text-amber-700'
                          }`}
                      >
                        {post.post_status}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="py-3 px-4 text-xs text-gray-400 whitespace-nowrap">
                      {new Date(post.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-5 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          href={`/blog/${post.post_slug}`}
                          target="_blank"
                          title="Preview Live"
                          className="p-1.5 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/admin/blogs/edit/${post.post_id}`}
                          title="Edit Post"
                          className="p-1.5 rounded-lg text-gray-500 hover:text-[var(--primary)] hover:bg-[#edf5ee] transition"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => setDeleteId(post.post_id)}
                          title="Delete Post"
                          className="p-1.5 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="p-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span>
              Page {page} of {totalPages} ({totalPosts} total items)
            </span>
            <div className="flex items-center gap-2">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="px-3 py-1.5 rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-gray-50 cursor-pointer"
              >
                Previous
              </button>
              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="px-3 py-1.5 rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-gray-50 cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-150">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-center text-gray-900 mb-2">
              Delete this blog post?
            </h3>
            <p className="text-xs text-center text-gray-500 mb-6 leading-relaxed">
              This action cannot be undone. It will remove the blog post, its slug and associated tag
              relationships from the database.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleteLoading}
                className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                {deleteLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Confirm Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
