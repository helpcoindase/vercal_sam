'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FileText,
  CheckCircle2,
  Clock,
  Tags,
  Users,
  PenTool,
  ArrowRight,
  TrendingUp,
  Database,
  ExternalLink,
  Edit,
} from 'lucide-react';

interface DashboardStats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalCategories: number;
  totalTags: number;
  totalUsers: number;
}

interface RecentPost {
  post_id: number;
  post_slug: string;
  post_title: string;
  post_status: string;
  created_at: string;
  category_name?: string;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalCategories: 0,
    totalTags: 0,
    totalUsers: 0,
  });
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/stats')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStats(data.stats);
          setRecentPosts(data.recentPosts || []);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load stats:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[var(--primary)] via-[#3e5e16] to-[var(--secondary)] rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 translate-x-10 translate-y-10">
          <TrendingUp className="w-80 h-80" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-green-200 mb-4 border border-white/15">
            <Database className="w-3.5 h-3.5" /> High-Performance Next.js Backend
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
            Welcome to Samwarthika CMS
          </h1>
          <p className="text-green-100/90 text-sm sm:text-base mt-2 leading-relaxed">
            Manage your Ayurvedic blog posts, SEO metadata, JSON-LD structured schemas,
            categories and administrative accounts with real-time MySQL database sync.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/admin/blogs/create"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[var(--primary)] font-semibold text-xs uppercase tracking-wider shadow-md hover:bg-green-50 transition"
            >
              <PenTool className="w-4 h-4" />
              Write New Blog
            </Link>
            <Link
              href="/admin/blogs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider backdrop-blur-md border border-white/20 transition"
            >
              <FileText className="w-4 h-4" />
              Manage All Posts
            </Link>
          </div>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Posts */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Total Posts
            </span>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {loading ? '...' : stats.totalPosts}
          </div>
          <span className="text-xs text-gray-500">In database storage</span>
        </div>

        {/* Published Posts */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Published
            </span>
            <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {loading ? '...' : stats.publishedPosts}
          </div>
          <span className="text-xs text-green-600 font-medium">Live on website</span>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Categories
            </span>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Tags className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {loading ? '...' : stats.totalCategories}
          </div>
          <span className="text-xs text-gray-500">Active classifications</span>
        </div>

        {/* Total Users */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Admin Users
            </span>
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {loading ? '...' : stats.totalUsers}
          </div>
          <span className="text-xs text-gray-500">Authorized editors</span>
        </div>
      </div>

      {/* Recent Posts Table & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Posts Table */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-serif text-lg font-bold text-gray-900">
                Recent Blog Posts
              </h3>
              <p className="text-xs text-gray-500">Latest updates from your content library</p>
            </div>
            <Link
              href="/admin/blogs"
              className="text-xs font-semibold text-[var(--primary)] hover:underline flex items-center gap-1"
            >
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-[11px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50/70 border-b border-gray-100">
                <tr>
                  <th className="py-3 px-4 rounded-l-xl">Title</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4 text-right rounded-r-xl">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentPosts.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-gray-400 text-xs">
                      No blog posts found
                    </td>
                  </tr>
                ) : (
                  recentPosts.map((post) => (
                    <tr key={post.post_id} className="hover:bg-gray-50/50 transition">
                      <td className="py-3.5 px-4 font-medium text-gray-900 max-w-[260px] truncate">
                        {post.post_title}
                      </td>
                      <td className="py-3.5 px-4 text-gray-600 text-xs">
                        {post.category_name || 'Uncategorized'}
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded-full uppercase tracking-wider ${post.post_status === 'published'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-amber-100 text-amber-700'
                            }`}
                        >
                          {post.post_status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-gray-400 whitespace-nowrap">
                        {new Date(post.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/admin/blogs/edit/${post.post_id}`}
                            className="p-1.5 rounded-lg text-gray-500 hover:text-[var(--primary)] hover:bg-[#edf5ee] transition"
                            title="Edit Post"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>
                          <Link
                            href={`/blog/${post.post_slug}`}
                            target="_blank"
                            className="p-1.5 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition"
                            title="View Live"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions & System Health */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-2.5">
              <Link
                href="/admin/blogs/create"
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#f4f7f4] hover:bg-[#eaf4ee] text-[var(--secondary)] transition group border border-transparent hover:border-[#d5e7d9]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[var(--primary)] shadow-sm">
                    <PenTool className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold block">Create Post</span>
                    <span className="text-xs text-gray-500">With SEO & JSON-LD schema</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/admin/categories"
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#f4f7f4] hover:bg-[#eaf4ee] text-[var(--secondary)] transition group border border-transparent hover:border-[#d5e7d9]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[var(--primary)] shadow-sm">
                    <Tags className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold block">Categories & Tags</span>
                    <span className="text-xs text-gray-500">Organize article taxonomy</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/admin/users"
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#f4f7f4] hover:bg-[#eaf4ee] text-[var(--secondary)] transition group border border-transparent hover:border-[#d5e7d9]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[var(--primary)] shadow-sm">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold block">User Accounts</span>
                    <span className="text-xs text-gray-500">Manage admin roles</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* System Performance Card */}
          <div className="bg-[#1c2c0a] rounded-3xl p-6 text-white shadow-md">
            <h4 className="font-serif text-base font-bold text-white mb-2 flex items-center gap-2">
              <Database className="w-4 h-4 text-green-400" />
              System Optimization
            </h4>
            <p className="text-xs text-green-200/80 leading-relaxed mb-4">
              Native Next.js 15 App Router architecture with direct connection pooling to AWS RDS MySQL.
              Zero overhead, sub-second response times.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="text-gray-400 block text-[10px] uppercase">Connection Pool</span>
                <span className="text-green-300 font-semibold">Active (Idle 60s)</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="text-gray-400 block text-[10px] uppercase">Max Connections</span>
                <span className="text-green-300 font-semibold">8 Pool Limit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
