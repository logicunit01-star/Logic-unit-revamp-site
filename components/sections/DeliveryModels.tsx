'use client';

import React from 'react';
import { DELIVERY_MODELS } from '@/constants';
import Link from 'next/link';

const DeliveryModels: React.FC = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-brand-secondary/5 to-transparent pointer-events-none rounded-full blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h4 className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">
                        Engagement Models
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-dark mb-6">
                        Flexible Delivery Models <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Tailored to Your Needs</span>
                    </h2>
                    <p className="text-lg text-brand-gray leading-relaxed">
                        We understand that every business is unique. Choose the engagement model that best fits your project scope, timeline, and budget.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {DELIVERY_MODELS.map((model, index) => (
                        <div
                            key={index}
                            className="group bg-brand-bg-secondary p-8 rounded-2xl border border-gray-100 hover:border-brand-primary/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-6xl select-none grayscale group-hover:grayscale-0">
                                {model.icon}
                            </div>

                            <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                {model.icon}
                            </div>

                            <h3 className="text-xl font-bold font-heading text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                                {model.title}
                            </h3>

                            <p className="text-brand-gray text-sm leading-relaxed mb-6">
                                {model.description}
                            </p>

                            <div className="w-8 h-1 bg-brand-primary/20 group-hover:w-full group-hover:bg-brand-primary transition-all duration-500 rounded-full"></div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-brand-gray mb-6">Not sure which model is right for you?</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center font-bold text-brand-dark border-b-2 border-brand-primary/30 hover:border-brand-primary transition-all pb-1"
                    >
                        Schedule a consultation to discuss your requirements →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DeliveryModels;
