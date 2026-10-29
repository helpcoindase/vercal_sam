'use client';

import React, { useState, useEffect } from 'react';
import { Tags, Plus, Trash2, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  const [loadingCats, setLoadingCats] = useState(true);
  const [loadingTags, setLoadingTags] = useState(true);

  // Forms
  const [newCatName, setNewCatName] = useState('');
  const [savingCat, setSavingCat] = useState(false);
  const [newTagName, setNewTagName] = useState('');
  const [savingTag, setSavingTag] = useState(false);

  const [notification, setNotification] = useState<{ type: 'success' | 'error'; msg: string } | null>(
    null
  );

  const notify = (msg: string, type: 'success' | 'error' = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const loadCategories = () => {
    setLoadingCats(true);
    fetch('/api/admin/categories')
      .then((res) => res.json())
      .then((data) => {
        if (data.categories) setCategories(data.categories);
        setLoadingCats(false);
      })
      .catch(() => setLoadingCats(false));
  };

  const loadTags = () => {
    setLoadingTags(true);
    fetch('/api/admin/tags')
      .then((res) => res.json())
      .then((data) => {
        if (data.tags) setTags(data.tags);
        setLoadingTags(false);
      })
      .catch(() => setLoadingTags(false));
  };

  useEffect(() => {
    loadCategories();
    loadTags();
  }, []);

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    setSavingCat(true);

    try {
      const res = await fetch('/api/admin/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category_name: newCatName.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        notify('Category added successfully');
        setNewCatName('');
        loadCategories();
      } else {
        notify(data.error || 'Failed to add category', 'error');
      }
    } catch {
      notify('Connection error', 'error');
    } finally {
      setSavingCat(false);
    }
  };

  const handleDeleteCategory = async (id: number) => {
    if (!confirm('Are you sure you want to delete this category? (Articles will be set to Uncategorized)')) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/categories?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        notify('Category deleted successfully');
        loadCategories();
      } else {
        notify(data.error || 'Failed to delete category', 'error');
      }
    } catch {
      notify('Connection error', 'error');
    }
  };

  const handleAddTag = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTagName.trim()) return;
    setSavingTag(true);

    try {
      const res = await fetch('/api/admin/tags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tag_name: newTagName.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        notify('Tag added successfully');
        setNewTagName('');
        loadTags();
      } else {
        notify(data.error || 'Failed to add tag', 'error');
      }
    } catch {
      notify('Connection error', 'error');
    } finally {
      setSavingTag(false);
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Toast */}
      {notification && (
        <div
          className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce ${
            notification.type === 'success' ? 'bg-[var(--primary)] text-white' : 'bg-red-600 text-white'
          }`}
        >
          {notification.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-green-300" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-200" />
          )}
          <span className="text-sm font-semibold">{notification.msg}</span>
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
          Categories & Tags
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Organize and classify articles for easier navigation and targeted SEO
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Categories Section */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <h3 className="font-serif text-lg font-bold text-gray-900 flex items-center gap-2">
              <Tags className="w-5 h-5 text-[var(--primary)]" />
              Categories ({categories.length})
            </h3>
          </div>

          {/* Add Category Form */}
          <form onSubmit={handleAddCategory} className="flex gap-2">
            <input
              type="text"
              required
              placeholder="New category name..."
              value={newCatName}
              onChange={(e) => setNewCatName(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:border-[var(--primary)]"
            />
            <button
              type="submit"
              disabled={savingCat}
              className="px-4 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[#23380b] text-white text-xs font-semibold uppercase tracking-wider transition cursor-pointer disabled:opacity-50 flex items-center gap-1"
            >
              {savingCat ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
              Add
            </button>
          </form>

          {/* Categories List Table */}
          <div className="overflow-x-auto max-h-[460px] overflow-y-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50 text-gray-400 font-bold uppercase sticky top-0">
                <tr>
                  <th className="p-3">Category Name</th>
                  <th className="p-3">Slug</th>
                  <th className="p-3 text-center">Posts</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loadingCats ? (
                  <tr>
                    <td colSpan={4} className="p-6 text-center text-gray-400">
                      Loading categories...
                    </td>
                  </tr>
                ) : (
                  categories.map((cat) => (
                    <tr key={cat.category_id} className="hover:bg-gray-50/60">
                      <td className="p-3 font-semibold text-gray-800">{cat.category_name}</td>
                      <td className="p-3 font-mono text-gray-400">/{cat.category_slug}</td>
                      <td className="p-3 text-center">
                        <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 font-semibold">
                          {cat.total_posts || 0}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => handleDeleteCategory(cat.category_id)}
                          className="text-gray-400 hover:text-red-600 p-1 transition cursor-pointer"
                          title="Delete Category"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tags Section */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <h3 className="font-serif text-lg font-bold text-gray-900 flex items-center gap-2">
              <Tags className="w-5 h-5 text-amber-600" />
              Tags ({tags.length})
            </h3>
          </div>

          {/* Add Tag Form */}
          <form onSubmit={handleAddTag} className="flex gap-2">
            <input
              type="text"
              required
              placeholder="New tag name (e.g. Wellness)..."
              value={newTagName}
              onChange={(e) => setNewTagName(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:border-[var(--primary)]"
            />
            <button
              type="submit"
              disabled={savingTag}
              className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold uppercase tracking-wider transition cursor-pointer disabled:opacity-50 flex items-center gap-1"
            >
              {savingTag ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
              Add
            </button>
          </form>

          {/* Tags Chips View */}
          <div className="p-4 bg-gray-50/50 rounded-2xl border border-gray-200 min-h-[300px] max-h-[460px] overflow-y-auto">
            {loadingTags ? (
              <p className="text-center text-xs text-gray-400 py-8">Loading tags...</p>
            ) : tags.length === 0 ? (
              <p className="text-center text-xs text-gray-400 py-8">No tags created yet</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t.tag_id}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-700 shadow-sm"
                  >
                    #{t.tag_name}
                    <span className="text-[10px] bg-gray-100 px-1.5 py-0.5 rounded-full text-gray-500">
                      {t.total_posts || 0}
                    </span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
