
import React from 'react';
import Link from 'next/link';

const CaseStudiesBreadcrumb: React.FC = () => (
    <nav aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-brand-primary">Home</Link></li>
            <li>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </li>
            <li className="font-semibold text-brand-dark">Case Studies</li>
        </ol>
    </nav>
);


const CaseStudiesHero: React.FC = () => {
    return (
        <section className="bg-white pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center mb-6">
                    <CaseStudiesBreadcrumb />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-brand-dark max-w-4xl mx-auto">
                    We Are Problem Solvers here our success stories
                </h1>
                <p className="mt-6 text-lg text-brand-dark/80 max-w-3xl mx-auto">
                    Drive growth, scalability, and innovation with AI customized for your business. As a trusted, global AI software development company, Logic-Unit helps enterprises across industries achieve measurable value with AI.
                </p>
                <div className="mt-10">
                    <Link href="/contact" className="bg-brand-dark text-white hover:bg-brand-primary px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105 border border-slate-700 inline-block">
                        Schedule a call
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesHero;
