
import React from 'react';
import Link from 'next/link';
import { CLIENT_LOGOS } from '../../constants';

const OurClientsGrid: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold font-heading text-brand-dark mb-12">Our Clients</h2>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center">
                    {CLIENT_LOGOS.map((logo, index) => (
                        <div key={index} className="flex justify-center">
                            <img src={logo.url} alt={logo.name} className="max-h-12 object-contain" />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link href="/case-studies" className="px-6 py-2 rounded-full font-semibold bg-brand-primary text-white hover:bg-brand-accent transition-all duration-300 shadow-lg hover:scale-105 border border-blue-900 inline-block">
                        View All Clients
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default OurClientsGrid;
