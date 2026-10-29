'use client';

// Clean and sanitize HTML: strips inline style attributes, unwraps global blockquotes, fixes malformed nesting
export function cleanHtml(rawHtml: string): string {
  if (!rawHtml) return '';
  let html = rawHtml;

  // 1. Strip all inline style="..." attributes (especially oklch, font-size, margin-block, etc.)
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

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  Upload,
  Sparkles,
  Plus,
  Tags,
  Table as TableIcon,
  Image as ImageIcon,
  Link as LinkIcon,
  Check,
  X,
  Loader2,
  AlertCircle,
  Eye,
  Code,
  Globe,
  HelpCircle,
  Trash2,
  User,
} from 'lucide-react';

interface BlogFormData {
  post_id?: number;
  title: string;
  slug: string;
  content: string;
  category_id: number | string;
  tags: string[];
  image_path?: string;
  meta_title: string;
  meta_description: string;
  meta_keyword: string;
  author_name?: string;
  schema_data: string;
  post_status: 'draft' | 'published';
}

interface BlogEditorFormProps {
  initialData?: Partial<BlogFormData>;
  isEdit?: boolean;
}

export default function BlogEditorForm({ initialData, isEdit = false }: BlogEditorFormProps) {
  const router = useRouter();

  // Form State
  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [isSlugCustomized, setIsSlugCustomized] = useState(Boolean(isEdit && initialData?.slug));
  const [content, setContent] = useState(initialData?.content || '');
  const [categoryId, setCategoryId] = useState<number | string>(initialData?.category_id || '');
  const [selectedTags, setSelectedTags] = useState<string[]>(initialData?.tags || []);
  const [imagePath, setImagePath] = useState(initialData?.image_path || '');
  const [metaTitle, setMetaTitle] = useState(initialData?.meta_title || '');
  const [metaDescription, setMetaDescription] = useState(initialData?.meta_description || '');
  const [metaKeyword, setMetaKeyword] = useState(initialData?.meta_keyword || '');
  const [authorName, setAuthorName] = useState(initialData?.author_name || '');
  const [schemaData, setSchemaData] = useState(initialData?.schema_data || '');
  const [postStatus, setPostStatus] = useState<'draft' | 'published'>(
    initialData?.post_status || 'published'
  );

  // Categories & Tags list
  const [categories, setCategories] = useState<any[]>([]);
  const [allTags, setAllTags] = useState<any[]>([]);

  // Modals state
  const [showCatModal, setShowCatModal] = useState(false);
  const [newCatName, setNewCatName] = useState('');
  const [showTagModal, setShowTagModal] = useState(false);
  const [newTagName, setNewTagName] = useState('');

  // Table insert modal
  const [showTableModal, setShowTableModal] = useState(false);
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);
  const [tableHeader, setTableHeader] = useState(true);

  // Content image modal
  const [showContentImgModal, setShowContentImgModal] = useState(false);
  const [contentImgTab, setContentImgTab] = useState<'upload' | 'url'>('upload');
  const [contentImgFile, setContentImgFile] = useState<File | null>(null);
  const [contentImgPreview, setContentImgPreview] = useState('');
  const [contentImgUrl, setContentImgUrl] = useState('');
  const [contentImgAlt, setContentImgAlt] = useState('');
  const [uploadingContentImg, setUploadingContentImg] = useState(false);

  // FAQ Schema Builder
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([]);
  const [activeSchemaTab, setActiveSchemaTab] = useState<'visual' | 'raw'>('visual');

  // General loading & error
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [error, setError] = useState('');
  const [editorMode, setEditorMode] = useState<'visual' | 'code'>('visual');

  const editorRef = useRef<HTMLDivElement>(null);
  const savedSelectionRef = useRef<Range | null>(null);

  // Load existing categories and tags
  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => {
        if (data.categories) setCategories(data.categories);
      });

    fetch('/api/tags')
      .then((res) => res.json())
      .then((data) => {
        if (data.tags) setAllTags(data.tags);
      });
  }, []);

  // Parse existing schema if any
  useEffect(() => {
    if (initialData?.schema_data) {
      try {
        const parsed = JSON.parse(initialData.schema_data);
        if (parsed['@type'] === 'FAQPage' && Array.isArray(parsed.mainEntity)) {
          const loadedFaqs = parsed.mainEntity.map((item: any) => ({
            question: item.name || '',
            answer: item.acceptedAnswer?.text || '',
          }));
          setFaqs(loadedFaqs);
        }
      } catch {
        // Raw schema
      }
    }
  }, [initialData]);

  // Set initial content into visual editor on mount
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = content || '';
    }
  }, []);

  // Sync editor if initialData content changes (e.g. async fetch in edit page)
  useEffect(() => {
    if (initialData?.content !== undefined) {
      setContent(initialData.content);
      if (editorRef.current && document.activeElement !== editorRef.current) {
        editorRef.current.innerHTML = initialData.content || '';
      }
    }
  }, [initialData?.content]);

  // Sync authorName when initialData changes
  useEffect(() => {
    if (initialData?.author_name !== undefined) {
      setAuthorName(initialData.author_name || '');
    }
  }, [initialData?.author_name]);

  // Switch between Visual & HTML (code) mode seamlessly without losing content
  const handleSwitchMode = (targetMode: 'visual' | 'code') => {
    if (targetMode === editorMode) return;

    if (targetMode === 'code') {
      // Transitioning to HTML: capture latest visual HTML, clean inline styles and update
      const latestHtml = cleanHtml(editorRef.current ? editorRef.current.innerHTML : content);
      setContent(latestHtml);
      setEditorMode('code');
    } else {
      // Transitioning to Visual: sync cleaned HTML into visual contentEditable
      const cleaned = cleanHtml(content || '');
      setContent(cleaned);
      if (editorRef.current) {
        editorRef.current.innerHTML = cleaned;
      }
      setEditorMode('visual');
    }
  };

  const executeCommand = (cmd: string, val: string | undefined = undefined) => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
    document.execCommand(cmd, false, val);
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
  };

  // Helper to generate URL slug from text
  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  // Auto-generate slug from title while user types (unless manually edited)
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isSlugCustomized) {
      setSlug(slugify(val));
    }
  };

  const handleSlugChange = (val: string) => {
    setSlug(val);
    if (!val.trim()) {
      setIsSlugCustomized(false);
    } else {
      setIsSlugCustomized(true);
    }
  };

  const handleRegenerateSlug = () => {
    setSlug(slugify(title));
    setIsSlugCustomized(false);
  };

  // Featured Image Upload
  const handleFeaturedImageUpload = async (file: File) => {
    setUploadingImage(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success && data.url) {
        setImagePath(data.url);
      } else {
        alert(data.error || 'Failed to upload image');
      }
    } catch {
      alert('Error uploading image');
    } finally {
      setUploadingImage(false);
    }
  };

  // Add Category Modal submit
  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;

    try {
      const res = await fetch('/api/admin/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category_name: newCatName.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        setCategories((prev) => [...prev, data]);
        setCategoryId(data.category_id);
        setNewCatName('');
        setShowCatModal(false);
      } else {
        alert(data.error || 'Failed to add category');
      }
    } catch {
      alert('Error connecting to server');
    }
  };

  // Add Tag Modal submit
  const handleAddTag = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTagName.trim()) return;

    try {
      const res = await fetch('/api/admin/tags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tag_name: newTagName.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        setAllTags((prev) => [...prev, data]);
        if (!selectedTags.includes(data.tag_name)) {
          setSelectedTags((prev) => [...prev, data.tag_name]);
        }
        setNewTagName('');
        setShowTagModal(false);
      } else {
        alert(data.error || 'Failed to add tag');
      }
    } catch {
      alert('Error connecting to server');
    }
  };

  // Insert Table into Editor
  const handleInsertTable = () => {
    let tableHtml = '<table class="table border-collapse w-full my-4 border border-gray-300">\n';
    if (tableHeader) {
      tableHtml += '  <thead>\n    <tr class="bg-gray-100">\n';
      for (let j = 1; j <= tableCols; j++) {
        tableHtml += `      <th class="border border-gray-300 p-2 font-bold text-left">Header ${j}</th>\n`;
      }
      tableHtml += '    </tr>\n  </thead>\n';
    }
    tableHtml += '  <tbody>\n';
    for (let i = 1; i <= tableRows; i++) {
      tableHtml += '    <tr>\n';
      for (let j = 1; j <= tableCols; j++) {
        tableHtml += `      <td class="border border-gray-300 p-2">Cell ${i},${j}</td>\n`;
      }
      tableHtml += '    </tr>\n';
    }
    tableHtml += '  </tbody>\n</table>\n<p></p>';

    if (editorMode === 'visual') {
      if (editorRef.current) {
        editorRef.current.focus();
        document.execCommand('insertHTML', false, tableHtml);
        setContent(editorRef.current.innerHTML);
      }
    } else {
      const updated = (content ? content + '\n' : '') + tableHtml;
      setContent(updated);
      if (editorRef.current) {
        editorRef.current.innerHTML = updated;
      }
    }
    setShowTableModal(false);
  };

  // Open Content Image modal while capturing caret range
  const handleOpenImageModal = () => {
    if (editorMode === 'visual') {
      const sel = window.getSelection();
      if (sel && sel.rangeCount > 0 && editorRef.current?.contains(sel.anchorNode)) {
        savedSelectionRef.current = sel.getRangeAt(0).cloneRange();
      } else {
        savedSelectionRef.current = null;
      }
    }
    setContentImgFile(null);
    setContentImgPreview('');
    setContentImgUrl('');
    setContentImgAlt('');
    setContentImgTab('upload');
    setShowContentImgModal(true);
  };

  const handleCloseImageModal = () => {
    if (contentImgPreview) {
      URL.revokeObjectURL(contentImgPreview);
    }
    setContentImgFile(null);
    setContentImgPreview('');
    setContentImgUrl('');
    setContentImgAlt('');
    setShowContentImgModal(false);
  };

  // Helper to insert <img> tag safely at caret position
  const insertImageHtml = (rawUrl: string, altText: string) => {
    let finalUrl = rawUrl.trim();
    if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://') && !finalUrl.startsWith('/')) {
      finalUrl = `/${finalUrl}`;
    }

    const cleanAlt = altText.trim() || title || 'Samwarthika Ayurveda';
    const imgHtml = `<p><img src="${finalUrl}" alt="${cleanAlt}" class="rounded-xl shadow-md my-4 max-w-full h-auto" /></p><p></p>`;

    if (editorMode === 'visual' && editorRef.current) {
      editorRef.current.focus();
      let inserted = false;

      if (savedSelectionRef.current) {
        try {
          const sel = window.getSelection();
          if (sel) {
            sel.removeAllRanges();
            sel.addRange(savedSelectionRef.current);
            inserted = document.execCommand('insertHTML', false, imgHtml);
          }
        } catch {
          inserted = false;
        }
      }

      if (!inserted) {
        const ok = document.execCommand('insertHTML', false, imgHtml);
        if (!ok) {
          editorRef.current.innerHTML += imgHtml;
        }
      }

      setContent(editorRef.current.innerHTML);
    } else {
      const updated = (content ? content + '\n' : '') + imgHtml;
      setContent(updated);
      if (editorRef.current) {
        editorRef.current.innerHTML = updated;
      }
    }

    handleCloseImageModal();
  };

  // Insert Content Image (from File Upload or URL)
  const handleInsertContentImage = async () => {
    // If URL tab is active or URL is filled
    if (contentImgTab === 'url' || (!contentImgFile && contentImgUrl.trim())) {
      if (!contentImgUrl.trim()) {
        alert('Please enter an image URL or image path');
        return;
      }
      insertImageHtml(contentImgUrl.trim(), contentImgAlt);
      return;
    }

    // Upload file
    if (contentImgFile) {
      setUploadingContentImg(true);
      const formData = new FormData();
      formData.append('image', contentImgFile);

      try {
        const res = await fetch('/api/admin/upload', {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();
        if (data.success && data.url) {
          const finalUrl = data.url.startsWith('http://') || data.url.startsWith('https://') || data.url.startsWith('/')
            ? data.url
            : `/${data.url}`;
          insertImageHtml(finalUrl, contentImgAlt);
        } else {
          alert(data.error || 'Failed to upload image. Please check file format or try an Image URL.');
        }
      } catch {
        alert('Network error while uploading image');
      } finally {
        setUploadingContentImg(false);
      }
      return;
    }

    alert('Please choose an image file or enter an Image URL');
  };

  // FAQ Schema manipulation
  const addFaqItem = () => {
    setFaqs((prev) => [...prev, { question: '', answer: '' }]);
  };

  const removeFaqItem = (index: number) => {
    setFaqs((prev) => prev.filter((_, i) => i !== index));
  };

  const updateFaqItem = (index: number, field: 'question' | 'answer', val: string) => {
    setFaqs((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: val } : item))
    );
  };

  // Form Submit
  const handleSubmit = async (targetStatus?: 'draft' | 'published') => {
    setError('');
    const status = targetStatus || postStatus;

    if (!title.trim()) {
      setError('Post title is required');
      return;
    }

    setSaving(true);

    // Ensure content is up to date with active editor and clean HTML
    let finalContent = content;
    if (editorMode === 'visual' && editorRef.current) {
      finalContent = editorRef.current.innerHTML;
    }
    finalContent = cleanHtml(finalContent);
    setContent(finalContent);
    if (editorRef.current) {
      editorRef.current.innerHTML = finalContent;
    }

    // Compile schema if visual FAQ was filled
    let finalSchema = schemaData;
    if (faqs.length > 0 && faqs.some((f) => f.question.trim())) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs
          .filter((f) => f.question.trim())
          .map((f) => ({
            '@type': 'Question',
            name: f.question.trim(),
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer.trim(),
            },
          })),
      };
      finalSchema = JSON.stringify(faqSchema, null, 2);
    }

    const payload = {
      title,
      slug,
      content: finalContent,
      category_id: categoryId ? Number(categoryId) : null,
      tags: selectedTags,
      image_path: imagePath || null,
      meta_title: metaTitle || title,
      meta_description: metaDescription,
      meta_keyword: metaKeyword,
      author_name: authorName.trim() || null,
      schema_data: finalSchema || null,
      post_status: status,
    };

    try {
      const url = isEdit && initialData?.post_id
        ? `/api/admin/blogs/${initialData.post_id}`
        : '/api/admin/blogs';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        router.push('/admin/blogs');
        router.refresh();
      } else {
        setError(data.error || 'Failed to save post');
      }
    } catch {
      setError('Network error saving blog post');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      {/* Top action bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
        <div>
          <h2 className="text-xl font-serif font-bold text-gray-900">
            {isEdit ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h2>
          <span className="text-xs text-gray-400">
            Status: <span className="font-semibold uppercase text-gray-700">{postStatus}</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => router.push('/admin/blogs')}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100 transition cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={() => handleSubmit('draft')}
            className="px-4 py-2 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition cursor-pointer disabled:opacity-50"
          >
            Save Draft
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={() => handleSubmit('published')}
            className="px-5 py-2 rounded-xl bg-[var(--primary)] hover:bg-[#23380b] text-white text-xs font-semibold uppercase tracking-wider shadow-md transition cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
          >
            {saving ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" /> Saving...
              </>
            ) : (
              'Publish Post'
            )}
          </button>
        </div>
      </div>

      {/* Error alert */}
      {error && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Main Grid: Left editor, Right metadata */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 cols): Title & Content Editor */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title Card */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Post Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. 5 Simple Daily Habits for Ayurvedic Wellness"
                className="w-full text-lg font-serif font-semibold px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] text-gray-900 bg-white placeholder:text-gray-400"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                  Permalink Slug
                </label>
                {title && (
                  <button
                    type="button"
                    onClick={handleRegenerateSlug}
                    title="Regenerate slug from current title"
                    className="text-[11px] font-medium text-[var(--primary)] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Regenerate from title
                  </button>
                )}
              </div>
              <div className="flex items-center text-xs text-gray-500 bg-gray-50 px-3 py-2.5 rounded-xl border border-gray-200 focus-within:border-[var(--primary)] focus-within:bg-white transition">
                <span className="text-gray-400 select-none font-mono">https://samwarthika.com/blog/</span>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => handleSlugChange(e.target.value)}
                  placeholder="post-slug"
                  className="bg-transparent flex-1 font-mono text-gray-900 focus:outline-none ml-1"
                />
              </div>
            </div>
          </div>

          {/* WYSIWYG Content Editor */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-visible">
            {/* Sticky Content Header & Toolbar */}
            <div className="sticky top-[58px] z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-gray-100 rounded-t-3xl space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Article Content
                  </label>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                    {editorMode === 'visual' ? 'Visual Mode' : 'HTML Code'}
                  </span>
                </div>

                {/* Mode switch, Quick Insert Tools & Quick Save */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowTableModal(true)}
                    className="px-2.5 py-1 text-xs rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 flex items-center gap-1 cursor-pointer"
                  >
                    <TableIcon className="w-3.5 h-3.5" /> Table
                  </button>
                  <button
                    type="button"
                    onClick={handleOpenImageModal}
                    className="px-2.5 py-1 text-xs rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 flex items-center gap-1 cursor-pointer"
                  >
                    <ImageIcon className="w-3.5 h-3.5" /> Add Image
                  </button>
                  <div className="w-[1px] h-4 bg-gray-200 mx-0.5" />
                  <div className="flex bg-gray-100 p-0.5 rounded-xl border border-gray-200 text-xs">
                    <button
                      type="button"
                      onClick={() => handleSwitchMode('visual')}
                      className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer flex items-center gap-1 ${editorMode === 'visual'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-500 hover:text-gray-800'
                        }`}
                    >
                      <Eye className="w-3.5 h-3.5" /> Visual
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSwitchMode('code')}
                      className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer flex items-center gap-1 ${editorMode === 'code'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-500 hover:text-gray-800'
                        }`}
                    >
                      <Code className="w-3.5 h-3.5" /> HTML
                    </button>
                  </div>

                  <button
                    type="button"
                    disabled={saving}
                    onClick={() => handleSubmit('published')}
                    className="ml-1 px-3 py-1 rounded-lg bg-[var(--primary)] hover:bg-[#23380b] text-white text-xs font-semibold shadow-xs transition cursor-pointer disabled:opacity-50 flex items-center gap-1"
                    title="Quick Save & Publish"
                  >
                    {saving ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Save'}
                  </button>
                </div>
              </div>

              {/* Formatting Toolbar (Only in visual mode) */}
              {editorMode === 'visual' && (
                <div className="flex flex-wrap items-center gap-1 p-2 bg-gray-50 rounded-2xl border border-gray-200 text-xs text-gray-700">
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => executeCommand('bold')}
                    className="p-1.5 hover:bg-white rounded font-bold px-2 cursor-pointer transition"
                    title="Bold"
                  >
                    B
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => executeCommand('italic')}
                    className="p-1.5 hover:bg-white rounded italic px-2 cursor-pointer transition"
                    title="Italic"
                  >
                    I
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => executeCommand('underline')}
                    className="p-1.5 hover:bg-white rounded underline px-2 cursor-pointer transition"
                    title="Underline"
                  >
                    U
                  </button>
                  <div className="w-[1px] h-4 bg-gray-300 mx-1" />
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => executeCommand('formatBlock', '<h2>')}
                    className="p-1.5 hover:bg-white rounded font-bold px-2 cursor-pointer transition"
                  >
                    H2
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => executeCommand('formatBlock', '<h3>')}
                    className="p-1.5 hover:bg-white rounded font-bold px-2 cursor-pointer transition"
                  >
                    H3
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => executeCommand('formatBlock', '<p>')}
                    className="p-1.5 hover:bg-white rounded px-2 cursor-pointer transition"
                  >
                    Paragraph
                  </button>
                  <div className="w-[1px] h-4 bg-gray-300 mx-1" />
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => executeCommand('insertUnorderedList')}
                    className="p-1.5 hover:bg-white rounded px-2 cursor-pointer transition"
                  >
                    • List
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => executeCommand('insertOrderedList')}
                    className="p-1.5 hover:bg-white rounded px-2 cursor-pointer transition"
                  >
                    1. List
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => executeCommand('formatBlock', '<blockquote>')}
                    className="p-1.5 hover:bg-white rounded px-2 cursor-pointer transition"
                  >
                    Quote
                  </button>
                </div>
              )}
            </div>

            {/* Editable Area */}
            <div className="p-6">
              <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning
                onInput={(e) => setContent(e.currentTarget.innerHTML)}
                onBlur={(e) => {
                  const cleaned = cleanHtml(e.currentTarget.innerHTML);
                  setContent(cleaned);
                  if (editorRef.current && editorRef.current.innerHTML !== cleaned) {
                    editorRef.current.innerHTML = cleaned;
                  }
                }}
                className={`w-full min-h-[420px] p-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] text-gray-900 bg-white leading-relaxed overflow-y-auto blog-editor-canvas ${editorMode === 'visual' ? 'block' : 'hidden'
                  }`}
                style={{ minHeight: '420px' }}
              />

              <textarea
                value={content}
                onChange={(e) => {
                  const val = e.target.value;
                  setContent(val);
                  if (editorRef.current) {
                    editorRef.current.innerHTML = val;
                  }
                }}
                rows={18}
                className={`w-full font-mono text-xs p-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] text-gray-900 bg-white leading-relaxed ${editorMode === 'code' ? 'block' : 'hidden'
                  }`}
                placeholder="<p>Write your article HTML here...</p>"
              />
            </div>
          </div>

          {/* Dynamic JSON-LD Schema Builder */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-serif text-base font-bold text-gray-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--primary)]" />
                  Dynamic Schema Markup (JSON-LD)
                </h4>
                <p className="text-xs text-gray-500">
                  Boost SEO rich snippets on Google Search (FAQ accordion, Article schema)
                </p>
              </div>
              <div className="flex gap-1 bg-gray-100 p-1 rounded-xl text-xs">
                <button
                  type="button"
                  onClick={() => setActiveSchemaTab('visual')}
                  className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${activeSchemaTab === 'visual' ? 'bg-white shadow text-gray-900' : 'text-gray-500'
                    }`}
                >
                  FAQ Builder
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSchemaTab('raw')}
                  className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${activeSchemaTab === 'raw' ? 'bg-white shadow text-gray-900' : 'text-gray-500'
                    }`}
                >
                  Raw JSON-LD
                </button>
              </div>
            </div>

            {activeSchemaTab === 'visual' ? (
              <div className="space-y-4 pt-2">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-2 relative">
                    <button
                      type="button"
                      onClick={() => removeFaqItem(idx)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-red-500 p-1 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <input
                      type="text"
                      placeholder={`Question #${idx + 1}`}
                      value={faq.question}
                      onChange={(e) => updateFaqItem(idx, 'question', e.target.value)}
                      className="w-full text-xs font-semibold px-3 py-2 rounded-xl border border-gray-200 bg-white"
                    />
                    <textarea
                      placeholder={`Answer #${idx + 1}`}
                      rows={2}
                      value={faq.answer}
                      onChange={(e) => updateFaqItem(idx, 'answer', e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-xl border border-gray-200 bg-white"
                    />
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addFaqItem}
                  className="w-full py-2.5 border-2 border-dashed border-gray-200 hover:border-[var(--primary)] text-gray-600 hover:text-[var(--primary)] text-xs font-semibold rounded-2xl transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> Add FAQ Item
                </button>
              </div>
            ) : (
              <textarea
                value={schemaData}
                onChange={(e) => setSchemaData(e.target.value)}
                placeholder='{\n  "@context": "https://schema.org",\n  "@type": "Article"\n}'
                rows={8}
                className="w-full font-mono text-xs p-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-[var(--primary)] bg-gray-50/50"
              />
            )}
          </div>
        </div>

        {/* Right Column (1 col): Taxonomy, Media & SEO */}
        <div className="space-y-6">
          {/* Featured Image */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
              Featured Image
            </label>

            {imagePath ? (
              <div className="relative w-full h-44 rounded-2xl overflow-hidden shadow-inner bg-gray-100 group">
                <Image
                  src={imagePath.startsWith('http://') || imagePath.startsWith('https://') ? imagePath : (imagePath.startsWith('/') ? imagePath : `/${imagePath}`)}
                  alt="Featured Preview"
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => setImagePath('')}
                  className="absolute top-2 right-2 p-1.5 rounded-xl bg-black/60 text-white hover:bg-red-600 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="border-2 border-dashed border-gray-200 hover:border-[var(--primary)] rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition bg-gray-50/50 hover:bg-[#edf5ee]/30">
                <Upload className="w-8 h-8 text-[var(--primary)] mb-2" />
                <span className="text-xs font-semibold text-gray-700">Click to upload image</span>
                <span className="text-[11px] text-gray-400 mt-1">Recommended: 1200 x 630 px</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFeaturedImageUpload(e.target.files[0]);
                    }
                  }}
                />
              </label>
            )}

            {uploadingImage && (
              <div className="flex items-center gap-2 text-xs text-[var(--primary)] font-semibold">
                <Loader2 className="w-4 h-4 animate-spin" /> Uploading image to storage...
              </div>
            )}
          </div>

          {/* Category Selector */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Category
              </label>
              <button
                type="button"
                onClick={() => setShowCatModal(true)}
                className="text-xs font-semibold text-[var(--primary)] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Add New
              </button>
            </div>

            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-[var(--primary)] bg-white"
            >
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option key={c.category_id} value={c.category_id}>
                  {c.category_name}
                </option>
              ))}
            </select>
          </div>

          {/* Tags Checkbox / Selector */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Tags
              </label>
              <button
                type="button"
                onClick={() => setShowTagModal(true)}
                className="text-xs font-semibold text-[var(--primary)] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Add Tag
              </button>
            </div>

            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-2 bg-gray-50 rounded-2xl border border-gray-200">
              {allTags.map((tag) => {
                const isSelected = selectedTags.includes(tag.tag_name);
                return (
                  <button
                    key={tag.tag_id}
                    type="button"
                    onClick={() => {
                      if (isSelected) {
                        setSelectedTags((prev) => prev.filter((t) => t !== tag.tag_name));
                      } else {
                        setSelectedTags((prev) => [...prev, tag.tag_name]);
                      }
                    }}
                    className={`px-3 py-1 text-xs rounded-full transition cursor-pointer flex items-center gap-1 ${isSelected
                        ? 'bg-[var(--primary)] text-white font-medium'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                  >
                    #{tag.tag_name}
                    {isSelected && <Check className="w-3 h-3" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* SEO Meta Box */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
            <h4 className="font-serif text-base font-bold text-gray-900 flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-500" />
              SEO Settings
            </h4>

            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Meta Title</span>
                <span className={metaTitle.length > 60 ? 'text-amber-600' : ''}>
                  {metaTitle.length}/60
                </span>
              </div>
              <input
                type="text"
                placeholder={title || 'Meta Title for Google'}
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--primary)] text-gray-900 bg-white placeholder:text-gray-400"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Meta Description</span>
                <span className={metaDescription.length > 160 ? 'text-amber-600' : ''}>
                  {metaDescription.length}/160
                </span>
              </div>
              <textarea
                rows={3}
                placeholder="Short summary for Google search snippet..."
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                className="w-full text-xs px-3.5 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--primary)] text-gray-900 bg-white placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">Meta Keywords</label>
              <input
                type="text"
                placeholder="ayurveda, kerala panchakarma, health"
                value={metaKeyword}
                onChange={(e) => setMetaKeyword(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--primary)] text-gray-900 bg-white placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-600" />
                <span>Author Name</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Dr. K. Ramanathan, BAMS"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--primary)] text-gray-900 bg-white placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add Category Modal */}
      {showCatModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <form
            onSubmit={handleAddCategory}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl border border-gray-100"
          >
            <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">Add New Category</h3>
            <input
              type="text"
              required
              placeholder="e.g. Panchakarma"
              value={newCatName}
              onChange={(e) => setNewCatName(e.target.value)}
              className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 mb-4 focus:outline-none focus:border-[var(--primary)] text-gray-900 bg-white placeholder:text-gray-400"
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowCatModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-[var(--primary)] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Add Tag Modal */}
      {showTagModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <form
            onSubmit={handleAddTag}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl border border-gray-100"
          >
            <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">Add New Tag</h3>
            <input
              type="text"
              required
              placeholder="e.g. Detox"
              value={newTagName}
              onChange={(e) => setNewTagName(e.target.value)}
              className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 mb-4 focus:outline-none focus:border-[var(--primary)] text-gray-900 bg-white placeholder:text-gray-400"
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowTagModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-[var(--primary)] text-white text-xs font-semibold uppercase tracking-wider"
              >
                Add Tag
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Insert Table Modal */}
      {showTableModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl border border-gray-100 space-y-4">
            <h3 className="font-serif text-lg font-bold text-gray-900">Insert Table</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 block mb-1">Rows</label>
                <input
                  type="number"
                  min="1"
                  max="15"
                  value={tableRows}
                  onChange={(e) => setTableRows(Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1">Columns</label>
                <input
                  type="number"
                  min="1"
                  max="8"
                  value={tableCols}
                  onChange={(e) => setTableCols(Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200"
                />
              </div>
            </div>
            <label className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={tableHeader}
                onChange={(e) => setTableHeader(e.target.checked)}
                className="rounded"
              />
              Include Header Row
            </label>
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowTableModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleInsertTable}
                className="flex-1 py-2.5 rounded-xl bg-[var(--primary)] text-white text-xs font-semibold uppercase"
              >
                Insert
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Insert Content Image Modal */}
      {showContentImgModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h3 className="font-serif text-lg font-bold text-gray-900 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-[var(--primary)]" /> Insert Content Image
              </h3>
              <button
                type="button"
                onClick={handleCloseImageModal}
                className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mode Tabs: Upload vs Image URL */}
            <div className="flex bg-gray-100 p-1 rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setContentImgTab('upload')}
                className={`flex-1 py-1.5 rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5 ${contentImgTab === 'upload'
                    ? 'bg-white text-gray-900 shadow-xs'
                    : 'text-gray-500 hover:text-gray-800'
                  }`}
              >
                <Upload className="w-3.5 h-3.5" /> Upload File
              </button>
              <button
                type="button"
                onClick={() => setContentImgTab('url')}
                className={`flex-1 py-1.5 rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5 ${contentImgTab === 'url'
                    ? 'bg-white text-gray-900 shadow-xs'
                    : 'text-gray-500 hover:text-gray-800'
                  }`}
              >
                <LinkIcon className="w-3.5 h-3.5" /> Image URL / Path
              </button>
            </div>

            {/* Upload File Tab */}
            {contentImgTab === 'upload' && (
              <div className="space-y-3">
                {contentImgPreview ? (
                  <div className="relative border border-gray-200 rounded-2xl p-2 bg-gray-50 flex items-center gap-3">
                    <img
                      src={contentImgPreview}
                      alt="Preview"
                      className="w-16 h-16 object-cover rounded-xl border border-gray-200"
                    />
                    <div className="flex-1 min-w-0 text-xs">
                      <p className="font-medium text-gray-800 truncate">
                        {contentImgFile?.name}
                      </p>
                      <p className="text-gray-400 text-[11px]">
                        {contentImgFile ? (contentImgFile.size / 1024).toFixed(1) + ' KB' : ''}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        if (contentImgPreview) URL.revokeObjectURL(contentImgPreview);
                        setContentImgFile(null);
                        setContentImgPreview('');
                      }}
                      className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                      title="Remove file"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="border-2 border-dashed border-gray-300 hover:border-[var(--primary)] rounded-2xl p-5 flex flex-col items-center justify-center gap-2 cursor-pointer transition bg-gray-50/50 hover:bg-[#f6f9f6]">
                    <Upload className="w-7 h-7 text-gray-400" />
                    <div className="text-center">
                      <span className="text-xs font-semibold text-[var(--primary)] hover:underline">
                        Click to select an image file
                      </span>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        JPG, PNG, WEBP or SVG
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          const file = e.target.files[0];
                          setContentImgFile(file);
                          if (contentImgPreview) URL.revokeObjectURL(contentImgPreview);
                          setContentImgPreview(URL.createObjectURL(file));
                          if (!contentImgAlt) {
                            setContentImgAlt(file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '));
                          }
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            )}

            {/* Image URL Tab */}
            {contentImgTab === 'url' && (
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-gray-700">
                  Image Web URL or Local Path
                </label>
                <input
                  type="text"
                  placeholder="https://... or /assets/images/... or /images/blogs/..."
                  value={contentImgUrl}
                  onChange={(e) => setContentImgUrl(e.target.value)}
                  className="w-full text-xs px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--primary)] font-mono"
                />
                {contentImgUrl.trim() && (
                  <div className="border border-gray-200 rounded-xl p-2 bg-gray-50 flex items-center gap-2.5">
                    <img
                      src={
                        contentImgUrl.startsWith('http') || contentImgUrl.startsWith('/')
                          ? contentImgUrl
                          : `/${contentImgUrl}`
                      }
                      alt="URL preview"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                      className="w-12 h-12 object-cover rounded-lg border border-gray-200"
                    />
                    <span className="text-[11px] text-gray-500 truncate flex-1">
                      {contentImgUrl}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Alt Text Input */}
            <div className="space-y-1 pt-1">
              <label className="block text-xs font-semibold text-gray-700">
                Alt Text (Description for SEO & Accessibility)
              </label>
              <input
                type="text"
                placeholder="e.g. Traditional Ayurvedic treatment session"
                value={contentImgAlt}
                onChange={(e) => setContentImgAlt(e.target.value)}
                className="w-full text-xs px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--primary)]"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={handleCloseImageModal}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={
                  uploadingContentImg ||
                  (contentImgTab === 'upload' && !contentImgFile && !contentImgUrl.trim()) ||
                  (contentImgTab === 'url' && !contentImgUrl.trim())
                }
                onClick={handleInsertContentImage}
                className="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[#23380b] text-white text-xs font-semibold uppercase tracking-wider disabled:opacity-50 transition shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
              >
                {uploadingContentImg ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" /> Uploading...
                  </>
                ) : (
                  'Insert Image'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
