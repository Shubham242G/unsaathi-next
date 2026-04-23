'use client'

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import FaqAccordion from '../../component/FaqAccordion';
import { useReviReady } from '../../hooks/useReviReady';

interface BlogPost {
  _id: string;
  slug?: string;
  title: string;
  seoTitle?: string;
  seoMetaDescription?: string;
  summary: string;
  content?: string;
  date: string;
  images?: {
    cover?: string;
    thumbnail?: string;
    gallery?: string[];
  } | string[] | string;
  faqs?: Array<{ question: string; answer: string }>;
}

interface FaqItem {
  question: string;
  answer: string;
}

const BlogDetailPage: React.FC = () => {
  const params = useParams();
  const slug = params?.slug as string;
  
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);

  const url = "https://unsaathi-backend.onrender.com";

  const isDataReady = !loading && (blog !== null || error !== null);
  useReviReady(isDataReady);

  useEffect(() => {
    if (!slug) return;

    console.log('Fetching blog with identifier:', slug);
    
    fetch(`${url}/api/blogs/slug/${slug}`)
      .then(response => {
        if (response.ok) return response.json();
        return fetch(`${url}/api/blogs/${slug}`).then(res => {
          if (!res.ok) throw new Error('Blog not found');
          return res.json();
        });
      })
      .then((data: BlogPost) => {
        console.log('Blog found:', data.title);
        setBlog(data);
        if (data.faqs && data.faqs.length > 0) {
          setFaqs(data.faqs);
        }
        setLoading(false);
      })
      .catch((err: Error) => {
        console.error('Error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [slug, url]);

  const extractImages = () => {
    if (!blog || !blog.images) {
      return { bannerImage: null, galleryImages: [] as string[] };
    }
    
    let bannerImage: string | null = null;
    let galleryImages: string[] = [];
    
    if (typeof blog.images === 'object' && !Array.isArray(blog.images)) {
      bannerImage = blog.images.cover || blog.images.thumbnail || null;
      galleryImages = blog.images.gallery || [];
    }
    else if (Array.isArray(blog.images)) {
      bannerImage = blog.images[0] || null;
      galleryImages = blog.images.slice(1);
    }
    else if (typeof blog.images === 'string') {
      bannerImage = blog.images;
      galleryImages = [];
    }
    
    return { bannerImage, galleryImages };
  };
  
  const { bannerImage, galleryImages } = extractImages();

  const schemaData = blog ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.seoMetaDescription || blog.summary,
    "image": bannerImage,
    "author": {
      "@type": "Organization",
      "name": "Unsaathi"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Unsaathi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://unsaathi.com/logo.png"
      }
    },
    "datePublished": blog.date,
    "dateModified": blog.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://unsaathi.com/blog/${blog.slug || blog._id}`
    }
  } : null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const renderContentWithImages = (content: string) => {
    if (!content) return null;
    
    const hasImagePlaceholders = /\[image:\d+\]/.test(content);
    
    if (!hasImagePlaceholders) {
      return (
        <div
          className="blog-content prose prose-neutral prose-lg lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{
            __html: content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>')
          }}
        />
      );
    }
    
    const segments: Array<{ type: string; content?: string; index?: number }> = [];
    let lastIndex = 0;
    const regex = /\[image:(\d+)\]/g;
    let match;
    
    while ((match = regex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        const textSegment = content.substring(lastIndex, match.index);
        if (textSegment.trim()) {
          segments.push({
            type: 'text',
            content: textSegment
          });
        }
      }
      
      const imageIndex = parseInt(match[1]);
      segments.push({
        type: 'image',
        index: imageIndex
      });
      
      lastIndex = match.index + match[0].length;
    }
    
    if (lastIndex < content.length) {
      const textSegment = content.substring(lastIndex);
      if (textSegment.trim()) {
        segments.push({
          type: 'text',
          content: textSegment
        });
      }
    }
    
    return (
      <div className="blog-content prose prose-neutral prose-lg lg:prose-xl max-w-none">
        {segments.map((segment, idx) => {
          if (segment.type === 'text' && segment.content) {
            return (
              <div
                key={`text-${idx}`}
                dangerouslySetInnerHTML={{
                  __html: segment.content
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/\n/g, '<br>')
                }}
              />
            );
          } else if (segment.type === 'image' && segment.index !== undefined) {
            const imageUrl = galleryImages[segment.index];
            if (imageUrl) {
              return (
                <figure key={`img-${idx}`} className="my-8">
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={imageUrl}
                      alt={`Blog illustration ${segment.index + 1}`}
                      fill
                      className="object-cover rounded-xl shadow-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                    />
                  </div>
                  <figcaption className="text-center text-sm text-gray-500 mt-2 italic">
                    Image {segment.index + 1}
                  </figcaption>
                </figure>
              );
            } else {
              return (
                <div key={`img-${idx}`} className="my-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
                  <p className="text-yellow-700">⚠️ Image {segment.index + 1} not found</p>
                  <p className="text-sm text-yellow-600 mt-2">
                    You have {galleryImages.length} gallery image(s) available.
                  </p>
                </div>
              );
            }
          }
          return null;
        })}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c48e53] mx-auto mb-4"></div>
          <p className="text-xl font-serif text-neutral-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Blog Not Found
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            {error || "The blog post you're looking for doesn't exist."}
          </p>
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 bg-[#c48e53] hover:bg-[#a07a3a] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{blog.seoTitle || blog.title}</title>
        <meta name="description" content={blog.seoMetaDescription || blog.summary} />
        <link rel="canonical" href={`https://unsaathi.com/blog/${blog.slug || blog._id}`} />
        {schemaData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        )}
        {faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </Head>

      <div className="min-h-screen bg-white">
        {/* Attractive Banner Container */}
        <div className="relative w-full bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="relative w-full" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="relative w-full" style={{ paddingBottom: '50%' }}>
              {bannerImage ? (
                <Image
                  src={bannerImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  style={{ objectPosition: 'center center' }}
                  onError={(e) => {
                    console.error('Banner image failed to load');
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#c48e53]/20 to-[#a07a3a]/20 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-20 h-20 mx-auto text-[#c48e53]/40 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-[#c48e53] font-medium">Unsaathi Blog</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="bg-gradient-to-br from-[#f5e7db] via-[#e8d5c4] to-[#f5e7db] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="inline-block px-4 py-1 bg-[#c48e53]/10 rounded-full mb-6">
              <p className="text-sm md:text-base text-[#c48e53] font-medium tracking-wide">
                {new Date(blog.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-black text-neutral-900 mb-8 leading-tight">
              {blog.title}
            </h1>
            {blog.seoMetaDescription && (
              <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto font-light mb-12">
                {blog.seoMetaDescription}
              </p>
            )}
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/blogs"
                className="group inline-flex items-center gap-2 bg-[#c48e53] hover:bg-[#a07a3a] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blogs
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <article className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          {renderContentWithImages(blog.content || blog.summary || '')}
        </article>

        {/* FAQs Section */}
        {faqs.length > 0 && (
          <div className="max-w-6xl mx-auto px-6 py-16 bg-gray-50">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-[#232122] text-center">
                Frequently Asked Questions
              </h2>
              {/* @ts-ignore - Bypass type checking for FaqAccordion */}
              <FaqAccordion faqs={faqs} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogDetailPage;