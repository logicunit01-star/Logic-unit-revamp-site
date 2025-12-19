'use client';

import React from 'react';
import Link from 'next/link';

const CaseStudiesBreadcrumb: React.FC = () => (
    <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center justify-center space-x-2 text-sm text-brand-gray/60">
            <li><Link href="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
            <li>
                <svg className="h-4 w-4 opacity-40" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </li>
            <li className="font-semibold text-brand-primary">Case Studies</li>
        </ol>
    </nav>
);

const CaseStudiesHero: React.FC = () => {
    return (
        <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-brand-primary/5 via-white to-brand-secondary/5">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-bg-secondary to-transparent -z-10 opacity-60"></div>
            <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-gradient-radial from-brand-secondary/10 to-transparent rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <CaseStudiesBreadcrumb />

                {/* Badge */}
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">
                    Success Stories
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-brand-dark max-w-4xl mx-auto leading-tight tracking-tight mb-8">
                    We Are Problem Solvers:{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                        Our Impact
                    </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-brand-gray leading-relaxed max-w-3xl mx-auto mb-10">
                    Explore how we've helped enterprises and startups overcome complex challenges with bespoke software engineering and AI-driven solutions.
                </p>

                {/* CTA Button */}
                <div className="mt-10">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0 px-10 py-4 text-lg bg-brand-primary text-white hover:bg-brand-dark hover:shadow-brand-primary/20"
                    >
                        Start Your Success Story
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesHero;
