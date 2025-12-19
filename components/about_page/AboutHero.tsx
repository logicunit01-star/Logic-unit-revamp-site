'use client';

import React from 'react';
import Link from 'next/link';

const AboutHero: React.FC = () => {
    return (
        <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-brand-primary/5 via-white to-brand-secondary/5">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-brand-bg-secondary to-transparent -z-10 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-brand-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                {/* Badge */}
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">
                    About Us
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-brand-dark max-w-4xl mx-auto leading-tight tracking-tight mb-8">
                    Your Partner For{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                        Project Success
                    </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-brand-gray leading-relaxed max-w-3xl mx-auto mb-10">
                    Drive growth, scalability, and innovation with custom software development tailored to your business. As a trusted, global software development company, Logic-Unit helps enterprises across industries achieve measurable value with cutting-edge technology.
                </p>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0 px-8 py-3 text-lg bg-brand-primary text-white hover:bg-brand-dark hover:shadow-brand-primary/20"
                    >
                        Schedule a Call
                    </Link>
                    <Link
                        href="/services"
                        className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0 px-8 py-3 text-lg bg-white text-brand-dark border border-gray-200 hover:border-brand-primary hover:text-brand-primary"
                    >
                        Explore Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
