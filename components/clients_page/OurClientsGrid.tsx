
import React from 'react';
import Link from 'next/link';
import { CLIENT_LOGOS } from '../../constants';

const OurClientsGrid: React.FC = () => {
    return (
        <section className="py-24 bg-brand-bg-secondary relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-brand-dark mb-6">
                        Our <span className="text-brand-secondary">Clients</span>
                    </h2>
                    <p className="text-brand-gray text-lg max-w-2xl mx-auto leading-relaxed">
                        A footprint of excellence across diverse industries and scales.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
                    {CLIENT_LOGOS.map((logo, index) => (
                        <div key={index} className="w-full h-28 p-6 bg-white rounded-xl shadow-lg shadow-gray-200/30 border border-white flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105">
                            <img src={logo.url} alt={logo.name} className="max-h-full max-w-full object-contain" />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <Link href="/case-studies" className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0 px-10 py-4 text-lg bg-brand-dark text-white hover:bg-brand-primary border-none">
                        View Success Stories
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default OurClientsGrid;
