'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Post } from '@/lib/cms';

interface InsightsListProps {
    initialPosts: Post[];
}

const POSTS_PER_PAGE = 6;

const InsightsList: React.FC<InsightsListProps> = ({ initialPosts }) => {
    const router = useRouter();
    const [categories, setCategories] = useState<string[]>(['All']);
    const [activeCategory, setActiveCategory] = useState('All');
    const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

    useEffect(() => {
        // Derive categories from initial posts
        const uniqueCategories = ['All', ...Array.from(new Set(initialPosts.map(p => p.category?.name)))];
        setCategories(uniqueCategories);
    }, [initialPosts]);

    const filteredPosts = activeCategory === 'All'
        ? initialPosts
        : initialPosts.filter(post => post.category?.name === activeCategory);

    const postsToShow = filteredPosts.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + POSTS_PER_PAGE);
    };

    if (initialPosts.length === 0) {
        return (
            <div className="py-20 text-center">
                <p className="text-xl text-brand-gray">No insights available at the moment.</p>
                <p className="text-sm text-gray-400 mt-2">Please check back later or ensure the API is running.</p>
            </div>
        );
    }

    return (
        <>
            <div className="sticky top-16 bg-white/90 backdrop-blur-md shadow-sm z-30 py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center flex-wrap gap-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => {
                                    setActiveCategory(category);
                                    setVisibleCount(POSTS_PER_PAGE);
                                }}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${activeCategory === category
                                    ? 'bg-brand-dark text-white'
                                    : 'bg-gray-200 text-brand-dark hover:bg-gray-300'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {postsToShow.map((post) => (
                            <div key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-transform duration-300 hover:-translate-y-2 border border-gray-100">
                                <div className="relative h-48 overflow-hidden">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <span className="absolute top-4 left-4 bg-brand-secondary text-white text-xs font-bold px-2 py-1 rounded shadow-sm">{post.category?.name}</span>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <span className="text-xs text-brand-gray font-semibold mb-2 block">{post.date}</span>
                                    <h3 className="text-xl font-bold text-brand-primary mb-2 font-heading leading-tight" dangerouslySetInnerHTML={{ __html: post.title }} />
                                    <div className="text-brand-dark/80 flex-grow mb-4 text-sm h-24 overflow-hidden text-ellipsis" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                                    <button onClick={() => router.push(`/insights/${post.slug}`)} className="bg-brand-dark text-white hover:bg-brand-primary px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-md hover:scale-105 border border-slate-700 self-start mt-auto">
                                        Read More &rarr;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {visibleCount < filteredPosts.length && (
                        <div className="text-center mt-16">
                            <button
                                onClick={handleLoadMore}
                                className="bg-brand-dark text-white hover:bg-brand-primary px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105 border border-slate-700"
                            >
                                Load More Articles
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default InsightsList;
