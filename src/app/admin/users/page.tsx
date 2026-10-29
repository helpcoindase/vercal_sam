'use client';

import React, { useState, useEffect } from 'react';
import { Users, UserPlus, Trash2, Shield, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function AdminUsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Administrator');
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');

  const [notification, setNotification] = useState<{ type: 'success' | 'error'; msg: string } | null>(
    null
  );

  const notify = (msg: string, type: 'success' | 'error' = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const loadUsers = () => {
    setLoading(true);
    fetch('/api/admin/users')
      .then((res) => res.json())
      .then((data) => {
        if (data.users) setUsers(data.users);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setSaving(true);

    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, role }),
      });
      const data = await res.json();
      if (data.success) {
        notify('User account created successfully');
        setShowAddModal(false);
        setUsername('');
        setEmail('');
        setPassword('');
        loadUsers();
      } else {
        setFormError(data.error || 'Failed to create user');
      }
    } catch {
      setFormError('Connection error');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteUser = async (id: number) => {
    if (!confirm('Are you sure you want to delete this administrator account?')) return;

    try {
      const res = await fetch(`/api/admin/users?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        notify('User deleted successfully');
        loadUsers();
      } else {
        notify(data.error || 'Failed to delete user', 'error');
      }
    } catch {
      notify('Connection error', 'error');
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Toast Notification */}
      {notification && (
        <div
          className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce ${
            notification.type === 'success' ? 'bg-[var(--primary)] text-white' : 'bg-red-600 text-white'
          }`}
        >
          {notification.type === 'success' ? (
            <CheckCircle className="w-5 h-5 text-green-300" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-200" />
          )}
          <span className="text-sm font-semibold">{notification.msg}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
            User Accounts
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Manage administrative access and permissions
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[#22350a] text-white text-xs font-semibold uppercase tracking-wider shadow-md transition cursor-pointer"
        >
          <UserPlus className="w-4 h-4" />
          Add New User
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-[11px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50/80 border-b border-gray-100">
              <tr>
                <th className="py-3.5 px-6">User</th>
                <th className="py-3.5 px-6">Email</th>
                <th className="py-3.5 px-6">Role</th>
                <th className="py-3.5 px-6">Last Login</th>
                <th className="py-3.5 px-6">Created Date</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-gray-400 text-xs">
                    <Loader2 className="w-6 h-6 animate-spin mx-auto text-[var(--primary)] mb-2" />
                    Loading accounts...
                  </td>
                </tr>
              ) : (
                users.map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50/60 transition">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[var(--primary)] text-white font-bold flex items-center justify-center text-xs uppercase shadow-sm">
                          {u.username.charAt(0)}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900 block">{u.username}</span>
                          {u.name && <span className="text-xs text-gray-400 block">{u.name}</span>}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600 text-xs">{u.email}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full ${
                          u.role === 'Developer'
                            ? 'bg-purple-100 text-purple-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        <Shield className="w-3 h-3" />
                        {u.role || 'Administrator'}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-xs text-gray-500 whitespace-nowrap">
                      {u.last_login
                        ? new Date(u.last_login).toLocaleString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })
                        : 'Never logged in'}
                    </td>
                    <td className="py-4 px-6 text-xs text-gray-400 whitespace-nowrap">
                      {new Date(u.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <button
                        onClick={() => handleDeleteUser(u.id)}
                        title="Delete User"
                        className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <form
            onSubmit={handleCreateUser}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100 space-y-4"
          >
            <h3 className="font-serif text-lg font-bold text-gray-900">Add Administrator Account</h3>

            {formError && (
              <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <div>
              <label className="text-xs font-bold uppercase text-gray-700 block mb-1">
                Username *
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. editor"
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:border-[var(--primary)]"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-gray-700 block mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="editor@samwarthika.com"
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:border-[var(--primary)]"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-gray-700 block mb-1">
                Password *
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:border-[var(--primary)]"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-gray-700 block mb-1">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--primary)] bg-white"
              >
                <option value="Administrator">Administrator</option>
                <option value="Editor">Editor</option>
                <option value="Developer">Developer</option>
              </select>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="flex-1 py-2.5 rounded-xl bg-[var(--primary)] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#22350a] transition cursor-pointer disabled:opacity-50 flex items-center justify-center gap-1"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Create Account'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
