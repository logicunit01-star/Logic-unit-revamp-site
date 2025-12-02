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
        <section id="our-partners" className="py-16 sm:py-24 bg-brand-bg-main scroll-mt-36">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold font-heading text-brand-dark mb-12">Our Partners</h2>
                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                           {Array.from({ length: totalPages }).map((_, pageIndex) => (
                                <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {PARTNERS_DATA.slice(pageIndex * partnersPerPage, (pageIndex + 1) * partnersPerPage).map((partner, index) => (
                                        <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                                            <p className="text-sm text-brand-primary font-semibold mb-2">{partner.category}</p>
                                            <h3 className="text-xl font-bold text-brand-dark mb-3">{partner.title}</h3>
                                            <p className="text-brand-dark/80 mb-4">{partner.description}</p>
                                            <div className="bg-gray-200 aspect-video rounded-md flex items-center justify-center">
                                                <img src={partner.image} alt={partner.title} className="w-full h-full object-cover rounded-md"/>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={prev} className="absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition">
                        <ChevronLeftIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                    <button onClick={next} className="absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition">
                        <ChevronRightIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurPartnersSlider;
