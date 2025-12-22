'use client';

import React from 'react';
import Link from 'next/link';

const CareersHero: React.FC = () => {
    return (
        <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-brand-bg-main">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-brand-bg-secondary to-transparent -z-10 opacity-80"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-brand-primary/5 to-transparent rounded-full blur-3xl -z-10"></div>

            {/* Centered Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">
                        Join Our Team
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-brand-dark leading-[1.1] mb-8">
                        Shape the Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                            Digital Innovation
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-brand-gray leading-relaxed mb-10 max-w-2xl mx-auto">
                        At Logic-Unit, we don't just write code; we solve the world's most complex problems. Join a culture of excellence, creativity, and continuous learning building the next generation of enterprise solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <a
                            href="#positions"
                            className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0 px-8 py-4 text-lg bg-brand-primary text-white hover:bg-brand-dark hover:shadow-brand-primary/20"
                        >
                            View Open Roles
                        </a>
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0 px-8 py-4 text-lg bg-white text-brand-dark border border-gray-200 hover:border-brand-primary hover:text-brand-primary"
                        >
                            Our Culture
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-brand-dark/80 pt-8 border-t border-gray-200/60 max-w-3xl mx-auto">
                        <div className="text-center">
                            <p className="text-3xl font-bold font-heading mb-1">4.9/5</p>
                            <p className="text-xs uppercase tracking-wider text-brand-gray font-semibold">Employee Satisfaction</p>
                        </div>
                        <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
                        <div className="text-center">
                            <p className="text-3xl font-bold font-heading mb-1">95%</p>
                            <p className="text-xs uppercase tracking-wider text-brand-gray font-semibold">Remote Friendly</p>
                        </div>
                        <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
                        <div className="text-center">
                            <p className="text-3xl font-bold font-heading mb-1">92%</p>
                            <p className="text-xs uppercase tracking-wider text-brand-gray font-semibold">Retention Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareersHero;
