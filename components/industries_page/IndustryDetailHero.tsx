'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { CASE_STUDIES, ChevronLeftIcon, ChevronRightIcon } from '@/constants';

declare global {
    interface Window {
        gsap: any;
    }
}

interface IndustryDetailHeroProps {
    title: string;
    description: string;
}

const IndustryDetailHero: React.FC<IndustryDetailHeroProps> = ({ title, description }) => {
    const [currentStudyIndex, setCurrentStudyIndex] = useState(0);
    const containerRef = useRef<HTMLElement>(null);

    const prevStudy = useCallback(() => {
        setCurrentStudyIndex((prev) => (prev === 0 ? CASE_STUDIES.length - 1 : prev - 1));
    }, []);

    const nextStudy = useCallback(() => {
        setCurrentStudyIndex((prev) => (prev === CASE_STUDIES.length - 1 ? 0 : prev + 1));
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(nextStudy, 8000);
        return () => clearInterval(slideInterval);
    }, [nextStudy]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.gsap && containerRef.current) {
            const ctx = window.gsap.context(() => {
                const tl = window.gsap.timeline();
                tl.from(".hero-content > *", {
                    duration: 1.2,
                    y: 40,
                    opacity: 0,
                    stagger: 0.2,
                    ease: "power3.out"
                })
                    .from(".hero-visual", {
                        duration: 1.5,
                        opacity: 0,
                        x: 30,
                        ease: "power2.out"
                    }, "-=1");
            }, containerRef);

            return () => ctx.revert();
        }
    }, []);

    return (
        <section ref={containerRef} className="hero relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-brand-bg-main text-brand-dark">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-brand-bg-secondary to-transparent -z-10 opacity-80"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-brand-primary/5 to-transparent rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    <div className="lg:col-span-6 hero-content text-center lg:text-left">
                        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">
                            Industry Focus
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-brand-dark leading-tight tracking-tight mb-8">
                            {title}
                        </h1>
                        <p className="text-lg text-brand-gray leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
                            <Link href="#contact" className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0 px-8 py-3 text-lg bg-brand-primary text-white hover:bg-brand-dark hover:shadow-brand-primary/20">
                                Get Started
                            </Link>
                            <Link href="#solutions" className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0 px-8 py-3 text-lg bg-white text-brand-dark border border-gray-200 hover:border-brand-primary hover:text-brand-primary">
                                Explore Solutions
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-6 hero-visual relative h-[600px] w-full">
                        <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-white/50 group">
                            {CASE_STUDIES.map((study, index) => (
                                <div
                                    key={study.title}
                                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentStudyIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                                >
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent"></div>

                                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                        <p className="text-brand-secondary font-bold text-sm uppercase tracking-widest mb-2">Success Story</p>
                                        <h3 className="text-white font-heading text-2xl md:text-3xl font-bold leading-tight mb-4 max-w-md">
                                            {study.title}
                                        </h3>
                                        <Link
                                            href="/case-studies"
                                            className="text-white text-sm font-bold uppercase tracking-wide border-b border-white/30 pb-1 hover:border-white transition-all flex items-center gap-2 group-hover:gap-3 w-fit"
                                        >
                                            Read Full Case Study <span className="transition-transform">→</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}

                            <div className="absolute bottom-8 right-8 flex gap-3 z-20">
                                <button onClick={prevStudy} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-all border border-white/20">
                                    <ChevronLeftIcon className="w-5 h-5" />
                                </button>
                                <button onClick={nextStudy} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-all border border-white/20">
                                    <ChevronRightIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="absolute -left-12 top-20 bg-white p-6 rounded-xl shadow-xl shadow-gray-200/50 border border-gray-100 max-w-xs hidden xl:block animate-pulse-slow">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
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

export default IndustryDetailHero;
