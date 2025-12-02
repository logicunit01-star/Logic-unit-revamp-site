'use client';


import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Post } from '../../lib/cms';

interface IndustryFeaturedInsightsProps {
    data: Post[];
}

const IndustryFeaturedInsights: React.FC<IndustryFeaturedInsightsProps> = ({ data }) => {
    const router = useRouter();

    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-heading text-brand-dark">Featured Insights</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((post) => (
                        <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group transition-transform duration-300 hover:-translate-y-1 border border-gray-200">
                            <div className="relative h-48">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold text-brand-primary mb-2 h-14 overflow-hidden">{post.title}</h3>
                                <p className="text-brand-dark/80 flex-grow mb-4 text-sm h-20 overflow-hidden text-ellipsis">{post.seo_description}</p>
                                <Link href={`/insights/${post.slug}`} className="font-semibold text-brand-accent group-hover:text-brand-secondary transition-colors self-start mt-auto">
                                    Keep Reading &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                     <button 
                        onClick={() => router.push('/insights')}
                        className="bg-brand-primary text-white hover:bg-brand-accent px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105 border border-blue-900"
                    >
                        All Blogs & Articles
                    </button>
                </div>
            </div>
        </section>
    );
};

export default IndustryFeaturedInsights;



