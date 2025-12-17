import React from 'react';
import Link from 'next/link';
import { fetchPostBySlug } from '@/lib/api';
import type { Metadata } from 'next';
import BlockRenderer from '@/components/insights_page/BlockRenderer';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title.replace(/<[^>]*>/g, ''),
    description: post.excerpt || post.postDescription || 'Read this article on Logic-Unit Insights.',
  };
}

// Helper function to clean content strings
const cleanContent = (content: string) => {
  if (typeof content !== 'string') return '';
  return content.replace(/\s*<\/p>\s*(]*>[\s\S]*?<\/h[1-6]>)\s*<\/p>/gi, '$1');
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-brand-bg-main section-std text-brand-dark">
      <article className="container-std max-w-4xl mx-auto">
        <Link href="/insights" className="link-std mb-8 inline-block text-brand-primary">
          ← Back to Insights
        </Link>

        {/* Title */}
        <h1 className="h1 mb-6">
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl md:text-2xl text-brand-gray mb-8 leading-relaxed font-light">
            {post.excerpt}
          </p>
        )}

        {/* Author and Date */}
        <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-8">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-14 h-14 rounded-full border-2 border-brand-primary/20"
          />
          <div>
            <p className="font-bold text-brand-dark">{post.author.name}</p>
            <p className="text-sm text-brand-gray font-medium uppercase tracking-wider">{post.date}</p>
          </div>
        </div>

        {/* Featured Image */}
        {post.cover && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        )}

        {/* Blocks (Dynamic Content) */}
        {post.blocks && post.blocks.length > 0 ? (
          <div className="prose prose-lg max-w-none text-brand-gray">
            <BlockRenderer blocks={post.blocks} />
          </div>
        ) : (
          /* Fallback to regular content if no blocks */
          <div className="prose prose-lg max-w-none text-brand-gray">
            {typeof post.content === 'string' ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: cleanContent(post.content),
                }}
              />
            ) : (
              <div>{String(post.content)}</div>
            )}
          </div>
        )}
      </article>
    </div>
  );
}