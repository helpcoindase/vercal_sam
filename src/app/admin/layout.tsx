'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  PenTool,
  Tags,
  Users,
  ExternalLink,
  LogOut,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<{ username: string; email: string; role: string } | null>(null);

  // Skip layout on login page
  const isLoginPage = pathname?.startsWith('/admin/login');

  useEffect(() => {
    document.title = 'Admin Dashboard | Samwarthika';
  }, []);

  useEffect(() => {
    if (isLoginPage) return;

    fetch('/api/auth/me')
      .then((res) => {
        if (!res.ok) {
          router.push('/admin/login');
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data?.user) {
          setUser(data.user);
        }
      })
      .catch(() => {
        router.push('/admin/login');
      });
  }, [pathname, isLoginPage, router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  if (isLoginPage) {
    return <>{children}</>;
  }

  const navLinks = [
    { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { label: 'Manage Posts', href: '/admin/blogs', icon: FileText },
    { label: 'Create Blog', href: '/admin/blogs/create', icon: PenTool },
    { label: 'Categories & Tags', href: '/admin/categories', icon: Tags },
    { label: 'User Accounts', href: '/admin/users', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f4] flex text-gray-800">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-[#1c2c0a] text-white flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Logo & Brand */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <Link href="/admin" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)] flex items-center justify-center shadow-inner">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-tight block text-white">
                  Samwarthika
                </span>
                <span className="text-[11px] uppercase tracking-wider text-green-300/70 block">
                  Admin Panel
                </span>
              </div>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-white/70 hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="p-4 space-y-1.5 mt-2">
            <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-green-300/50">
              Navigation
            </div>
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === '/admin'
                  ? pathname === '/admin'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? 'bg-[var(--primary)] text-white shadow-md'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <ChevronRight className="w-3.5 h-3.5 opacity-70" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/10 space-y-3">
          <Link
            href="/blog"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 text-xs text-green-200/80 hover:text-white hover:bg-white/5 rounded-lg transition"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5" />
              View Live Blog
            </span>
            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">New tab</span>
          </Link>

          {/* User Profile Card */}
          <div className="p-3 bg-white/5 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center font-bold text-xs uppercase text-white flex-shrink-0">
                {user?.username?.charAt(0) || 'A'}
              </div>
              <div className="truncate">
                <span className="text-xs font-semibold block truncate text-white">
                  {user?.username || 'Admin'}
                </span>
                <span className="text-[10px] text-green-300/70 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-green-400" />
                  {user?.role || 'Admin'}
                </span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              title="Sign Out"
              className="p-1.5 rounded-lg text-red-300 hover:bg-red-500/20 hover:text-red-200 transition cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-72 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold px-2.5 py-1 bg-[#eaf4ee] text-[var(--primary)] rounded-full">
              Production RDS Connected
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/blogs/create"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[var(--primary)] text-white text-xs font-semibold rounded-lg hover:bg-[#23370b] transition shadow-sm"
            >
              <PenTool className="w-3.5 h-3.5" />
              New Blog Post
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 text-gray-600 hover:text-red-600 hover:border-red-200 hover:bg-red-50 text-xs font-semibold rounded-lg transition cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </header>

        {/* Page Body */}
        <main className="p-6 md:p-8 flex-1">{children}</main>
      </div>
    </div>
  );
}
