import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import path from 'path';
import fs from 'fs/promises';
import { put } from '@vercel/blob';

export async function POST(req: NextRequest) {
  const user = await requireAuth(req);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('image') as File | null;
    const contentFiles = formData.getAll('content_images') as File[];

    const hasBlobToken = !!process.env.BLOB_READ_WRITE_TOKEN;

    // Handle single featured image upload
    if (file && typeof file === 'object' && file.size > 0) {
      const ext = path.extname(file.name).toLowerCase() || '.jpg';
      const cleanName = path
        .basename(file.name, ext)
        .replace(/[^a-zA-Z0-9_-]/g, '')
        .substring(0, 50);
      const fileName = `${Date.now()}_${cleanName}${ext}`;

      // 1. If Vercel Blob is configured (recommended for Vercel production)
      if (hasBlobToken) {
        const blob = await put(`blogs/${fileName}`, file, {
          access: 'public',
        });

        return NextResponse.json({
          success: true,
          url: blob.url,
          fileName,
        });
      }

      // 2. Otherwise fallback to local disk (for localhost development)
      try {
        const buffer = Buffer.from(await file.arrayBuffer());
        const uploadDir = path.join(process.cwd(), 'public', 'images', 'blogs');
        await fs.mkdir(uploadDir, { recursive: true });
        const filePath = path.join(uploadDir, fileName);
        await fs.writeFile(filePath, buffer);

        return NextResponse.json({
          success: true,
          url: `images/blogs/${fileName}`,
          fileName,
        });
      } catch (fsErr: any) {
        if (fsErr.code === 'EROFS') {
          return NextResponse.json(
            {
              error:
                'Vercel filesystem is read-only. Please enable Vercel Blob in your Vercel Dashboard (Storage tab > Create Blob Database) to allow persistent image uploads.',
            },
            { status: 500 }
          );
        }
        throw fsErr;
      }
    }

    // Handle multiple content images upload
    if (contentFiles && contentFiles.length > 0) {
      const uploaded: { url: string; alt?: string }[] = [];
      const alts = formData.getAll('alts') as string[];

      for (let i = 0; i < contentFiles.length; i++) {
        const cFile = contentFiles[i];
        if (cFile && cFile.size > 0) {
          const ext = path.extname(cFile.name).toLowerCase() || '.jpg';
          const cleanName = path
            .basename(cFile.name, ext)
            .replace(/[^a-zA-Z0-9_-]/g, '')
            .substring(0, 50);
          const fileName = `${Date.now()}_${i}_${cleanName}${ext}`;

          if (hasBlobToken) {
            const blob = await put(`blogs/${fileName}`, cFile, {
              access: 'public',
            });
            uploaded.push({
              url: blob.url,
              alt: alts[i] || '',
            });
          } else {
            const buffer = Buffer.from(await cFile.arrayBuffer());
            const uploadDir = path.join(process.cwd(), 'public', 'images', 'blogs');
            await fs.mkdir(uploadDir, { recursive: true });
            const filePath = path.join(uploadDir, fileName);
            await fs.writeFile(filePath, buffer);

            uploaded.push({
              url: `images/blogs/${fileName}`,
              alt: alts[i] || '',
            });
          }
        }
      }

      return NextResponse.json({
        success: true,
        images: uploaded,
      });
    }

    return NextResponse.json({ error: 'No files uploaded' }, { status: 400 });
  } catch (error: any) {
    console.error('File upload error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
