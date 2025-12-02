'use client';


import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon, SERVICES_PAGE_INDUSTRIES } from '../../constants';

const Industries: React.FC = () => {
    const router = useRouter();

    const handleIndustryClick = (e: React.MouseEvent, industrySlug: string) => {
        e.preventDefault();
        router.push(`/industries/${industrySlug}`);
    };

    return (
        <section className="py-16 sm:py-24 bg-brand-bg-main">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-dark text-center mb-12">Industries</h2>
                <div className="relative flex items-center max-w-6xl mx-auto">
                    <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition">
                        <ChevronLeftIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                    <div className="overflow-hidden w-full">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                            {SERVICES_PAGE_INDUSTRIES.map((industry, index) => (
                                <button key={index} onClick={(e) => handleIndustryClick(e, industry.industrySlug)} className="border border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center space-y-3 bg-white hover:shadow-md transition-shadow">
                                    <div className="text-4xl bg-brand-secondary/20 p-3 rounded-full">{industry.icon}</div>
                                    <h3 className="font-semibold text-brand-dark">{industry.name}</h3>
                                </button>
                            ))}
                        </div>
                    </div>
                    <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition">
                        <ChevronRightIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                </div>
                 <div className="text-center mt-12">
                     <button onClick={() => router.push('/case-studies')} className="bg-brand-primary text-white hover:bg-brand-accent px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105 border border-blue-900">
                        Read More Case Studies
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Industries;


