
import React from 'react';
import Link from 'next/link';
import { HOME_PAGE_INDUSTRIES } from '@/constants';

// Mapping slugs to Flat 2D SVG Paths
const getIconPath = (slug: string) => {
    switch (slug) {
        case 'healthcare': return <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM12 17V7M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />;
        case 'fintech': return <path d="M12 2L2 7L12 12L22 7L12 2Z M2 17L12 22L22 17 M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />;
        case 'banking': return <path d="M3 21H21M5 21V7L12 3L19 7V21M10 10H14M10 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />;
        case 'insurance': return <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />;
        case 'retail': return <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />;
        case 'transportation-logistics': return <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1M12 17v5m0-5h5m-5 0H7m9-2h2.5M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />;
        case 'manufacturing': return <path d="M6 21V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12M9 21v-6h6v6M9 3h6v4H9V3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />;
        case 'real-estate': return <path d="M3 21h18M5 21V7l8-4 8 4v14M10 10h4v4h-4v-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />;
        default: return <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />;
    }
};

const IndustryTicker: React.FC = () => {
    const industries = [...HOME_PAGE_INDUSTRIES, ...HOME_PAGE_INDUSTRIES];

    return (
        <section className="py-16 bg-brand-bg-secondary border-b border-gray-200 overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-brand-bg-secondary to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-brand-bg-secondary to-transparent z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
                <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2 block">Sectors</span>
                <h2 className="text-2xl font-bold font-heading text-brand-dark">Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Serve</span></h2>
            </div>

            <div className="flex animate-scroll hover:[animation-play-state:paused]">
                {industries.map((industry, index) => (
                    <div key={`${industry.industrySlug}-${index}`} className="flex-shrink-0 w-[240px] mx-6 group cursor-pointer">
                        <Link
                            href={`/industries/${industry.industrySlug}`}
                            className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-lg hover:border-brand-primary group-hover:-translate-y-1 h-40 block"
                        >
                            <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
                                {getIconPath(industry.industrySlug)}
                            </svg>
                            <span className="text-sm font-bold font-heading text-brand-dark uppercase tracking-wide text-center group-hover:text-brand-primary transition-colors duration-300">
                                {industry.name}
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IndustryTicker;

