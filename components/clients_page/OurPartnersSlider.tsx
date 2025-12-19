'use client';

import React, { useState } from 'react';
import { PARTNERS_DATA, ChevronLeftIcon, ChevronRightIcon } from '../../constants';

const OurPartnersSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const partnersPerPage = 3;
    const totalPages = Math.ceil(PARTNERS_DATA.length / partnersPerPage);

    const prev = () => setCurrentIndex(i => (i === 0 ? totalPages - 1 : i - 1));
    const next = () => setCurrentIndex(i => (i === totalPages - 1 ? 0 : i + 1));

    return (
        <section id="our-partners" className="py-24 bg-white relative overflow-hidden scroll-mt-36">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-bold uppercase tracking-widest">
                            Global Network
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-brand-dark leading-tight">
                            Our <span className="text-brand-secondary">Partners</span>
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-brand-secondary hover:text-white transition-all duration-300 shadow-sm">
                            <ChevronLeftIcon className="w-5 h-5" />
                        </button>
                        <button onClick={next} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-brand-secondary hover:text-white transition-all duration-300 shadow-sm">
                            <ChevronRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {Array.from({ length: totalPages }).map((_, pageIndex) => (
                                <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {PARTNERS_DATA.slice(pageIndex * partnersPerPage, (pageIndex + 1) * partnersPerPage).map((partner, index) => (
                                        <div key={index} className="group h-full bg-white rounded-2xl overflow-hidden shadow-xl shadow-gray-200/40 border border-gray-100 hover:shadow-2xl hover:shadow-brand-secondary/10 transition-all duration-500">
                                            <div className="relative aspect-video overflow-hidden">
                                                <img src={partner.image} alt={partner.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent"></div>
                                                <div className="absolute top-4 left-4">
                                                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-brand-secondary text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                                        {partner.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-8">
                                                <h3 className="text-xl font-bold font-heading text-brand-dark mb-3 group-hover:text-brand-secondary transition-colors">{partner.title}</h3>
                                                <p className="text-brand-gray leading-relaxed mb-0">{partner.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center mt-12 space-x-3">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === index ? 'w-8 bg-brand-secondary' : 'w-4 bg-gray-200'}`}
                                aria-label={`Go to page ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-secondary/5 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-primary/5 blur-3xl rounded-full"></div>
        </section>
    );
};

export default OurPartnersSlider;
