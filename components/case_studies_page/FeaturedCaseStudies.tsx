'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { CASE_STUDIES, ChevronLeftIcon, ChevronRightIcon } from '../../constants';

const FeaturedCaseStudies: React.FC = () => {
    const slidesPerPage = 2;
    const totalPages = Math.ceil(CASE_STUDIES.length / slidesPerPage);
    const [currentPage, setCurrentPage] = useState(0);

    const prevPage = useCallback(() => setCurrentPage(p => (p === 0 ? totalPages - 1 : p - 1)), [totalPages]);
    const nextPage = useCallback(() => setCurrentPage(p => (p === totalPages - 1 ? 0 : p + 1)), [totalPages]);

    useEffect(() => {
        const slideInterval = setInterval(nextPage, 8000);
        return () => clearInterval(slideInterval);
    }, [nextPage]);

    return (
        <section id="featured-case-studies" className="py-24 bg-white relative overflow-hidden scroll-mt-36">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest">
                            Premium Selection
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-brand-dark leading-tight">
                            Featured <span className="text-brand-primary">Case Studies</span>
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={prevPage} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-sm">
                            <ChevronLeftIcon className="w-5 h-5" />
                        </button>
                        <button onClick={nextPage} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-sm">
                            <ChevronRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentPage * 100}%)` }}
                        >
                            {Array.from({ length: totalPages }).map((_, pageIndex) => (
                                <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                    {CASE_STUDIES.slice(pageIndex * slidesPerPage, (pageIndex + 1) * slidesPerPage).map((study, studyIndex) => (
                                        <Link href={`/case-studies/${study.slug}`} key={studyIndex} className="group h-full bg-white rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 block">
                                            <div className="relative aspect-video overflow-hidden">
                                                <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-60"></div>
                                                
                                                {/* Tech Badges (New Customization) */}
                                                {study.technologies && (
                                                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">
                                                            {study.industry}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-8">
                                                <h3 className="text-2xl font-bold font-heading text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">{study.title}</h3>
                                                <p className="text-brand-gray text-lg leading-relaxed line-clamp-3">{study.description}</p>
                                                <div className="mt-6 flex items-center text-brand-primary font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                                                    Read Full Story <span className="ml-1">→</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center mt-12 space-x-3">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${currentPage === index ? 'w-8 bg-brand-primary' : 'w-4 bg-gray-200'}`}
                                aria-label={`Go to page ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCaseStudies;
