'use client';

import React, { useRef, useState, useEffect } from 'react';
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
    // Tripling the list to ensure smooth infinite scrolling even on wide screens
    // and to provide a buffer for the reset logic.
    const industries = [...HOME_PAGE_INDUSTRIES, ...HOME_PAGE_INDUSTRIES, ...HOME_PAGE_INDUSTRIES];

    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationFrameId: number;

        const animate = () => {
            if (!isDragging && !isPaused) {
                if (container.scrollLeft >= (container.scrollWidth / 3) * 2) {
                    // If we've scrolled past the first two sets, reset to the first set
                    // to maintain the infinite illusion without jump (assuming sets are identical)
                    // Actually simpler logic:
                    // The total width is 3 units.
                    // We want to loop nicely.
                    // If we are at Unit 2 start -> Unit 3 start, we can jump back to Unit 1 start.
                    container.scrollLeft -= container.scrollWidth / 3;
                } else {
                    container.scrollLeft += 1; // Auto-scroll speed
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, [isDragging, isPaused]);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current!.offsetLeft);
        setScrollLeft(containerRef.current!.scrollLeft);
        // Prevent default text selection
        e.preventDefault();
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        setIsPaused(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current!.offsetLeft;
        const walk = (x - startX) * 1.5; // Drag speed multiplier
        containerRef.current!.scrollLeft = scrollLeft - walk;
    };

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    return (
        <section className="py-16 bg-brand-bg-secondary border-b border-gray-200 overflow-hidden relative select-none">
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-brand-bg-secondary to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-brand-bg-secondary to-transparent z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
                <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2 block">Sectors</span>
                <h2 className="text-2xl font-bold font-heading text-brand-dark">Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Serve</span></h2>
            </div>

            <div
                ref={containerRef}
                className="flex overflow-x-hidden cursor-grab active:cursor-grabbing no-scrollbar"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
            >
                {industries.map((industry, index) => (
                    <div key={`${industry.industrySlug}-${index}`} className="flex-shrink-0 w-[240px] mx-6 group">
                        {/* We use specific onClick handling or Link with logic to prevent accidental clicks while dragging could be added here, 
                            but standard Link usually handles small drags vs clicks fine. 
                            If dragging triggers a click, we might need a custom Link wrapper that checks drag distance. 
                            For now, keep it simple. */}
                        <Link
                            href={`/industries/${industry.industrySlug}`}
                            className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-lg hover:border-brand-primary group-hover:-translate-y-1 h-40 block draggable-false"
                            draggable={false}
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
