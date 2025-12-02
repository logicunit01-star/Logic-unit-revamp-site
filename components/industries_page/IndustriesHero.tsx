'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { LOGO_URL, ChevronLeftIcon, ChevronRightIcon } from '../../constants';

const featuredLogos = [
    { name: 'Client A', url: LOGO_URL },
    { name: 'Client B', url: LOGO_URL },
    { name: 'Client C', url: LOGO_URL },
];

const IndustriesBreadcrumb: React.FC = () => (
    <nav aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-brand-primary">Home</a></li>
            <li>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </li>
            <li className="font-semibold text-brand-dark">Industries</li>
        </ol>
    </nav>
);

const IndustriesHero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = useCallback(() => {
        setCurrentIndex(i => (i === featuredLogos.length - 1 ? 0 : i + 1));
    }, []);

    const prev = () => {
        setCurrentIndex(i => (i === 0 ? featuredLogos.length - 1 : i - 1));
    };
    
    useEffect(() => {
        const timer = setTimeout(next, 4000);
        return () => clearTimeout(timer);
    }, [currentIndex, next]);

    return (
        <section className="bg-white pt-12 pb-20 sm:pt-16 sm:pb-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="mb-6">
                            <IndustriesBreadcrumb />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-brand-dark">
                            Industries We Empower
                        </h1>
                        <p className="mt-6 text-lg text-brand-dark/80 max-w-xl">
                            Transforming global industries through innovative technology and intelligent solutions.
                        </p>
                        <div className="mt-10">
                            <a href="#" className="bg-brand-dark text-white hover:bg-brand-primary px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105 border border-slate-700">
                                Schedule a call
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-full max-w-md h-64 border border-gray-200 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                             {featuredLogos.map((logo, index) => (
                                <div key={index}
                                     className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                                    <img src={logo.url} alt={logo.name} className="max-h-16" />
                                </div>
                            ))}
                            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full hover:bg-white/80 transition">
                                <ChevronLeftIcon className="w-6 h-6 text-brand-dark" />
                            </button>
                             <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full hover:bg-white/80 transition">
                                <ChevronRightIcon className="w-6 h-6 text-brand-dark" />
                            </button>
                        </div>
                        <a href="#" className="mt-8 bg-brand-primary text-white hover:bg-brand-accent px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105 border border-blue-900">
                            View Case studies
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustriesHero;
