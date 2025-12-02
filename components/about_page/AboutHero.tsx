
import React from 'react';
import Link from 'next/link';

const AboutHero: React.FC = () => {
    return (
        <section className="bg-white pt-12 pb-20 sm:pt-16 sm:pb-28 border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-dark max-w-4xl mx-auto">
                    About Logic-Unit - Your Partner For Project Success
                </h1>
                <p className="mt-6 text-lg text-brand-dark/80 max-w-3xl mx-auto">
                    Drive growth, scalability, and innovation with AI customized for your business. As a trusted, global AI software development company, 10Pearls helps enterprises across industries achieve measurable value with AI.
                </p>
                <div className="mt-10">
                    <Link href="/contact" className="bg-brand-primary text-white hover:bg-brand-accent px-8 py-3 rounded-lg font-semibold text-lg transition-transform duration-300 hover:scale-105 shadow-lg">
                        Schedule a call
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
