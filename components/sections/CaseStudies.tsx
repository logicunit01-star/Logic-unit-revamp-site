'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CASE_STUDIES } from '@/constants';

const CaseStudies: React.FC = () => {
    const router = useRouter();

    return (
        <section id="case-studies" className="py-24 sm:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h4 className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">Portfolio of Excellence</h4>
                        <h2 className="text-4xl font-bold font-heading text-brand-dark leading-tight">Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Studies</span> /<br /> Client Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Stories</span></h2>
                    </div>
                    <Link href="/case-studies" className="hidden md:inline-block text-brand-dark font-bold border-b-2 border-gray-200 hover:border-brand-primary pb-1 transition-colors">View All Projects</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CASE_STUDIES.map((study, index) => (
                        <div
                            key={index}
                            onClick={() => router.push('/case-studies')}
                            className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            <img
                                src={study.image}
                                alt={study.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-3 block">Case Study</span>
                                <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4 leading-tight">{study.title}</h3>
                                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                                    {study.description}
                                </p>
                                <span className="text-white font-bold text-sm flex items-center gap-2">
                                    Explore Story <span className="text-brand-secondary">→</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/case-studies" className="inline-block text-brand-dark font-bold border-b-2 border-gray-200 hover:border-brand-primary pb-1 transition-colors">View All Projects</Link>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
