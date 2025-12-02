'use client';


import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { INDUSTRIES_PAGE_DATA, ChevronLeftIcon, ChevronRightIcon } from '../../constants';

const IndustriesSliderNav: React.FC = () => {
    const router = useRouter();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };
    
    const handleIndustryClick = (e: React.MouseEvent, industrySlug: string) => {
        e.preventDefault();
        router.push(`/industries/${industrySlug}`);
    };

    return (
        <div className="py-8 border-y border-gray-200 bg-brand-bg-main">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center">
                    <button onClick={() => scroll('left')} className="absolute -left-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                        <ChevronLeftIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                    <div ref={scrollContainerRef} className="flex items-center space-x-8 overflow-x-auto scrollbar-hide px-4">
                        {INDUSTRIES_PAGE_DATA.map(industry => (
                            <button onClick={(e) => handleIndustryClick(e, industry.industrySlug)} key={industry.id} className="flex-shrink-0 flex flex-col items-center justify-center gap-2 group">
                                <div className="w-20 h-20 flex items-center justify-center border-2 border-gray-300 rounded-lg group-hover:border-brand-primary transition-colors">
                                    <span className="text-4xl">{industry.icon}</span>
                                </div>
                                <span className="font-semibold text-brand-dark group-hover:text-brand-primary transition-colors">{industry.name}</span>
                            </button>
                        ))}
                    </div>
                    <button onClick={() => scroll('right')} className="absolute -right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                        <ChevronRightIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                </div>
            </div>
            <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
        </div>
    );
};

export default IndustriesSliderNav;


