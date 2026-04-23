'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  _id: string;
  slug?: string;
  title: string;
  seoTitle?: string;
  summary: string;
  date: string;
  images?: {
    cover?: string;
    thumbnail?: string;
    gallery?: string[];
  } | string[] | string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = React.memo(({ post }) => {
  if (!post) return null;

  // Use slug if available, otherwise use _id
  const blogLink = post.slug ? `/blog/${post.slug}` : `/blog/${post._id}`;

  // Extract the thumbnail image correctly
  const getThumbnailImage = (): string | null => {
    if (!post.images) return null;
    
    // New format: images is an object with cover/thumbnail
    if (typeof post.images === 'object' && !Array.isArray(post.images)) {
      if ('cover' in post.images && post.images.cover) {
        return post.images.cover;
      }
      if ('thumbnail' in post.images && post.images.thumbnail) {
        return post.images.thumbnail;
      }
    }
    
    // Old format: images was an array
    if (Array.isArray(post.images) && post.images.length > 0) {
      return post.images[0];
    }
    
    // If images is a string
    if (typeof post.images === 'string') {
      return post.images;
    }
    
    return null;
  };

  const thumbnailImage = getThumbnailImage();

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col group">
      <div className="relative h-56 w-full bg-gray-200">
        {thumbnailImage ? (
          <Image
            src={thumbnailImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              console.error('Thumbnail failed to load');
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-500 mb-3">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-4 flex-grow group-hover:text-[#c48e53] transition-colors">
          <Link href={blogLink}>
            {post.seoTitle || post.title}
          </Link>
        </h3>

        <p className="text-neutral-600 text-base mb-6 line-clamp-3">{post.summary}</p>

        <div className="mt-auto">
          <Link
            href={blogLink}
            className="font-semibold text-[#c48e53] hover:text-neutral-900 transition-colors inline-flex items-center gap-1 group/link"
          >
            Read More 
            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
});

BlogCard.displayName = 'BlogCard';

export default BlogCard;