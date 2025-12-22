'use client';

import React from 'react';

const FaqsHero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-brand-bg-main">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-brand-secondary/10 to-transparent -z-10 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-radial from-brand-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>

            {/* Centered Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase backdrop-blur-sm">
                        Support Center
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-brand-dark leading-tight mb-8">
                        Frequently <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Asked Questions</span>
                    </h1>

                    <p className="text-lg md:text-xl text-brand-gray leading-relaxed max-w-2xl mx-auto">
                        Everything you need to know about our services, process, and how we deliver value.
                    </p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-brand-bg-main to-transparent"></div>
        </section>
    );
};

export default FaqsHero;
