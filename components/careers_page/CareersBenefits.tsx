'use client';

import React from 'react';
import { CAREERS_BENEFITS } from '@/constants';

const CareersBenefits: React.FC = () => {
    return (
        <section className="py-24 bg-brand-bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-16">
                    <h4 className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4">Perks & Benefits</h4>
                    <h2 className="text-4xl font-bold font-heading text-brand-dark leading-tight">
                        Why You'll Love <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Working at Logic-Unit</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {CAREERS_BENEFITS.map((benefit, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="text-4xl mb-6">{benefit.icon}</div>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 font-heading">{benefit.title}</h3>
                            <p className="text-brand-gray leading-relaxed text-sm">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareersBenefits;
