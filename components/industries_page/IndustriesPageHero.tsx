'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { CASE_STUDIES, ChevronLeftIcon, ChevronRightIcon } from '@/constants';

// Define the props interface
interface IndustriesPageHeroProps {
    tagline: string;
    heading: string;
    headingSpan: string;
    content: string;
    btnOne?: string | null;
    btnTwo?: string | null;
}

const IndustriesPageHero: React.FC<IndustriesPageHeroProps> = ({
    tagline,
    heading,
    headingSpan,
    content,
    btnOne,
    btnTwo
}) => {
    const [currentStudyIndex, setCurrentStudyIndex] = useState(0);

    /** Slider controls */
    const prevStudy = useCallback(() => {
        setCurrentStudyIndex((prev) =>
            prev === 0 ? CASE_STUDIES.length - 1 : prev - 1
        );
    }, []);

    const nextStudy = useCallback(() => {
        setCurrentStudyIndex((prev) =>
            prev === CASE_STUDIES.length - 1 ? 0 : prev + 1
        );
    }, []);

    /** Auto-slide */
    useEffect(() => {
        const slideInterval = setInterval(nextStudy, 8000);
        return () => clearInterval(slideInterval);
    }, [nextStudy]);

    return (
        <section className="hero relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-brand-bg-main text-brand-dark">

            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-brand-bg-secondary to-transparent -z-10 opacity-80"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-brand-primary/5 to-transparent rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-6 hero-content text-center lg:text-left">
                        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">
                            {tagline}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-brand-dark leading-tight tracking-tight mb-8">
                            {heading}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                                {" "}{headingSpan}
                            </span>
                        </h1>

                        <p className="text-lg text-brand-gray leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                            {content}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
                            {btnOne && (
                                <Link href="#industries-grid" className="inline-flex items-center justify-center rounded-full font-bold transition-all px-8 py-3 text-lg bg-brand-primary text-white hover:bg-brand-dark">
                                    {btnOne}
                                </Link>
                            )}

                            {btnTwo && (
                                <Link href="/contact" className="inline-flex items-center justify-center rounded-full font-bold transition-all px-8 py-3 text-lg bg-white text-brand-dark border border-gray-200 hover:border-brand-primary hover:text-brand-primary">
                                    {btnTwo}
                                </Link>
                            )}

                            {/* Default buttons if no props */}
                            {!btnOne && !btnTwo && (
                                <>
                                    <Link href="#industries-grid" className="inline-flex items-center justify-center rounded-full font-bold transition-all px-8 py-3 text-lg bg-brand-primary text-white hover:bg-brand-dark">
                                        Explore Industries
                                    </Link>
                                    <Link href="/contact" className="inline-flex items-center justify-center rounded-full font-bold transition-all px-8 py-3 text-lg bg-white text-brand-dark border border-gray-200 hover:border-brand-primary hover:text-brand-primary">
                                        Partner With Us
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="lg:col-span-6 hero-visual relative h-[600px] w-full">
                        <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-white/50 group">

                            {CASE_STUDIES.map((study, index) => (
                                <div
                                    key={study.title}
                                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentStudyIndex
                                        ? 'opacity-100 scale-100'
                                        : 'opacity-0 scale-105'
                                        }`}
                                >
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                        <p className="text-brand-secondary font-bold text-sm uppercase tracking-widest mb-2">
                                            Success Story
                                        </p>
                                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                                            {study.title}
                                        </h3>
                                        <Link href="/case-studies" className="text-white text-sm font-bold uppercase border-b border-white/30 pb-1 hover:border-white transition-all">
                                            Read Full Case Study →
                                        </Link>
                                    </div>
                                </div>
                            ))}

                            {/* Slider Buttons */}
                            <div className="absolute bottom-8 right-8 flex gap-3 z-20">
                                <button
                                    onClick={prevStudy}
                                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-brand-dark border border-white/20"
                                >
                                    <ChevronLeftIcon className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={nextStudy}
                                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-brand-dark border border-white/20"
                                >
                                    <ChevronRightIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Metric Card */}
                        <div className="absolute -left-12 top-20 bg-white p-6 rounded-xl shadow-xl border max-w-xs hidden xl:block">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-brand-dark">Efficiency Gain</p>
                                    <p className="text-xs text-gray-500">Real-time optimization</p>
                                </div>
                            </div>

                            <p className="text-2xl font-bold text-brand-primary font-heading">+300%</p>

                            <div className="w-full bg-gray-100 h-1.5 rounded-full mt-3 overflow-hidden">
                                <div className="bg-brand-secondary h-full w-3/4 rounded-full"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustriesPageHero;