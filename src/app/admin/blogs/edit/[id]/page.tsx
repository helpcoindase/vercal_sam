'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import BlogEditorForm from '../../BlogEditorForm';
import { Loader2 } from 'lucide-react';

export default function EditBlogPage() {
  const params = useParams();
  const id = params?.id as string;
  const [postData, setPostData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;

    fetch(`/api/admin/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.post) {
          const post = data.post;
          setPostData({
            post_id: post.post_id,
            title: post.post_title,
            slug: post.post_slug,
            content: post.post_content,
            category_id: post.category_id || '',
            tags: post.tags?.map((t: any) => t.tag_name) || [],
            image_path: post.image_path || '',
            meta_title: post.meta_title || '',
            meta_description: post.meta_description || '',
            meta_keyword: post.meta_keyword || '',
            schema_data: post.schema_data || '',
            author_name: post.author_name || '',
            post_status: post.post_status || 'draft',
          });
        } else {
          setError(data.error || 'Post not found');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load post data: ' + err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="py-24 text-center">
        <Loader2 className="w-8 h-8 animate-spin mx-auto text-[var(--primary)] mb-3" />
        <p className="text-sm text-gray-500">Loading blog post details...</p>
      </div>
    );
  }

  if (error || !postData) {
    return (
      <div className="py-24 text-center">
        <p className="text-red-600 font-semibold mb-2">{error || 'Post not found'}</p>
        <a href="/admin/blogs" className="text-sm text-[var(--primary)] underline">
          Return to blog list
        </a>
      </div>
    );
  }

  return <BlogEditorForm initialData={postData} isEdit={true} />;
}
