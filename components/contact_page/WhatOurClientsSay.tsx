'use client';


import React, { useState } from 'react';
import Link from 'next/link';
import { CONTACT_TESTIMONIALS, ChevronLeftIcon, ChevronRightIcon } from '../../constants';

const WhatOurClientsSay: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => setCurrentIndex(i => (i === 0 ? CONTACT_TESTIMONIALS.length - 1 : i - 1));
    const next = () => setCurrentIndex(i => (i === CONTACT_TESTIMONIALS.length - 1 ? 0 : i + 1));

    return (
        <section className="py-16 sm:py-24 border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold font-heading text-brand-dark text-center mb-12">What Our Clients Say</h2>
                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden relative min-h-[220px]">
                        {CONTACT_TESTIMONIALS.map((testimonial, index) => (
                             <div key={index} className={`w-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}>
                                <div className="grid md:grid-cols-3 gap-8 items-center bg-white p-8 rounded-lg border border-gray-200 shadow-md">
                                    <div className="flex justify-center items-center h-24">
                                        <img src={testimonial.logo} alt="Client Logo" className="max-h-12" />
                                    </div>
                                    <div className="md:col-span-2 flex items-start gap-4">
                                        <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full flex-shrink-0" />
                                        <div>
                                            <p className="italic text-brand-dark/90">"{testimonial.quote}"</p>
                                            <p className="font-bold text-brand-dark mt-4">{testimonial.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                     <button onClick={prev} className="absolute top-1/2 -left-6 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition">
                        <ChevronLeftIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                    <button onClick={next} className="absolute top-1/2 -right-6 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition">
                        <ChevronRightIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                </div>
                <div className="text-center mt-12">
                    <Link href="/case-studies" className="px-6 py-2 rounded-full font-semibold bg-brand-primary text-white hover:bg-brand-accent transition-all duration-300 shadow-lg hover:scale-105 border border-blue-900 inline-block">
                        Show More Testimonials
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhatOurClientsSay;

