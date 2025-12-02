'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { CASE_STUDIES, ChevronLeftIcon, ChevronRightIcon } from '../../constants';

const FeaturedCaseStudies: React.FC = () => {
    const slidesPerPage = 2;
    const totalPages = Math.ceil(CASE_STUDIES.length / slidesPerPage);
    const [currentPage, setCurrentPage] = useState(0);

    const prevPage = useCallback(() => setCurrentPage(p => (p === 0 ? totalPages - 1 : p - 1)), [totalPages]);
    const nextPage = useCallback(() => setCurrentPage(p => (p === totalPages - 1 ? 0 : p + 1)), [totalPages]);

    useEffect(() => {
        const slideInterval = setInterval(nextPage, 5000);
        return () => clearInterval(slideInterval);
    }, [nextPage]);

    return (
        <section id="featured-case-studies" className="py-16 sm:py-24 bg-brand-bg-main scroll-mt-36">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-dark mb-12">Featured Case Studies</h2>
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentPage * 100}%)` }}
                        >
                            {Array.from({ length: totalPages }).map((_, pageIndex) => (
                                <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {CASE_STUDIES.slice(pageIndex * slidesPerPage, (pageIndex + 1) * slidesPerPage).map((study, studyIndex) => (
                                        <div key={studyIndex} className="bg-white rounded-lg shadow-lg overflow-hidden h-full border border-gray-200">
                                            <div className="bg-gray-200 aspect-video flex items-center justify-center">
                                                <img src={study.image} alt={study.title} className="w-full h-full object-cover"/>
                                            </div>
                                            <div className="p-6">
                                                <p className="text-brand-dark/80">Flexible, customer-focused, and built to match your goals perfectly.</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <button onClick={prevPage} className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition z-10">
                        <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
                    </button>
                    <button onClick={nextPage} className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition z-10">
                        <ChevronRightIcon className="w-6 h-6 text-gray-700" />
                    </button>

                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex space-x-2">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${currentPage === index ? 'bg-brand-primary' : 'bg-gray-300'}`}
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
