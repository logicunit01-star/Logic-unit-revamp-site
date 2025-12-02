
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchPosts } from '@/lib/api';
import { Post } from '@/lib/cms';

const Insights: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const fetchedPosts = await fetchPosts();
            setPosts(fetchedPosts.slice(0, 3));
            setLoading(false);
        };
        loadData();
    }, []);

    return (
        <section id="insights" className="bg-brand-bg-secondary py-24 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
                    <div className="max-w-2xl">
                        <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">Thought Leadership</span>
                        <h2 className="text-4xl font-bold font-heading text-brand-dark leading-tight">Strategic <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Insights</span></h2>
                    </div>
                    <Link
                        href="/insights"
                        className="hidden md:inline-block text-brand-dark font-bold border-b-2 border-brand-dark hover:border-brand-primary hover:text-brand-primary transition-all pb-1"
                    >
                        View All Articles
                    </Link>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-96 bg-white rounded-lg animate-pulse"></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/insights/${post.slug}`}
                                className="group bg-transparent flex flex-col cursor-pointer"
                            >
                                <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1.5 uppercase tracking-wide">
                                        {post.category?.name}
                                    </div>
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <span className="text-xs font-bold text-brand-gray mb-2 block">{post.date}</span>
                                    <h3 className="text-xl font-bold text-brand-dark mb-3 font-heading leading-tight group-hover:text-brand-primary transition-colors" dangerouslySetInnerHTML={{ __html: post.title }} />
                                    <p className="text-brand-dark/70 text-sm leading-relaxed mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.postDescription }} />
                                    <span className="text-brand-primary font-bold text-sm mt-auto flex items-center gap-2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                        Read Analysis <span>→</span>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/insights"
                        className="text-brand-dark font-bold border-b-2 border-brand-dark pb-1"
                    >
                        View All Articles
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Insights;

