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
  return content.replace(/<p>\s*(<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>)\s*<\/p>/gi, '$1');
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return <div className="py-32 text-center text-2xl">Post Not Found</div>;
  }

  return (
    <article className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link href="/insights" className="mb-8 inline-block font-semibold text-brand-accent hover:text-brand-secondary transition-colors">
          &larr; Back to Insights
        </Link>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-extrabold font-heading bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-accent pb-2 mb-4"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl text-brand-gray mb-8 leading-relaxed italic border-l-4 border-brand-primary pl-6 py-2">
            {post.excerpt}
          </p>
        )}

        {/* Author and Date */}
        <div className="flex items-center space-x-4 mb-8 text-brand-dark/70">
          <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full border-2 border-brand-secondary object-cover" />
          <div>
            <p className="font-semibold">{post.author.name}</p>
            <p className="text-sm">{post.date}</p>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <img src={post.image} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-xl mb-12" />
        )}

        {/* Blocks (Dynamic Content) */}
        {post.blocks && post.blocks.length > 0 ? (
          <BlockRenderer blocks={post.blocks} />
        ) : (
          /* Fallback to regular content if no blocks */
          <div className="prose lg:prose-xl max-w-none text-brand-dark/80 prose-headings:font-heading prose-headings:text-brand-dark prose-a:text-brand-primary prose-img:rounded-lg prose-p:leading-relaxed prose-p:mb-6">
            {typeof post.content === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: cleanContent(post.content) }} />
            ) : (
              post.content
            )}
          </div>
        )}
      </div>

      <div className="mt-24">

      </div>
    </article>
  );
}
