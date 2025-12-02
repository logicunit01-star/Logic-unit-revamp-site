'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../../constants';

const partnerLogos = [
    { name: 'GiftWifts', url: 'https://logic-unit.com/wp-content/uploads/2019/04/giftwifts-1-300x225.png' },
    { name: 'AGP Pvt Ltd', url: 'https://logic-unit.com/wp-content/uploads/2019/04/AGP-1-150x150.png' },
    { name: 'Leopards', url: 'https://logic-unit.com/wp-content/uploads/2019/04/leopards-1-150x150.png' },
    { name: 'Qatar Airways', url: 'https://logic-unit.com/wp-content/uploads/2019/04/qatarairways-1-300x225.png' },
    { name: 'SGL (Seagold)', url: 'https://logic-unit.com/wp-content/uploads/2019/04/SGL-1-150x150.png' },
    { name: 'RTA', url: 'https://logic-unit.com/wp-content/uploads/2019/04/RTA-300x225.png' },
    { name: 'Karachi Shipyard & Engineering Works', url: 'https://logic-unit.com/wp-content/uploads/2019/06/khi-ship-tex-c.png' },
    { name: 'Dunkin’ Donuts', url: 'https://logic-unit.com/wp-content/uploads/2019/10/DD-logo-300x225.jpg' },
    { name: 'P@SHA', url: 'https://logic-unit.com/wp-content/uploads/2019/06/pasha-logo.png' },
    { name: 'PSEB', url: 'https://logic-unit.com/wp-content/uploads/2019/04/PSEB-logo.png' },
];

const CompaniesEmpowered: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const logosPerPage = 5;
    const totalPages = Math.ceil(partnerLogos.length / logosPerPage);

    const prev = useCallback(() => setCurrentIndex(i => (i === 0 ? totalPages - 1 : i - 1)), [totalPages]);
    const next = useCallback(() => setCurrentIndex(i => (i === totalPages - 1 ? 0 : i + 1)), [totalPages]);
    
    useEffect(() => {
        const timer = setTimeout(next, 5000);
        return () => clearTimeout(timer);
    }, [currentIndex, next]);

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-dark text-center mb-4">Companies We Empower</h2>
                <p className="max-w-3xl mx-auto text-brand-dark/80 mb-12 text-center">
                    Since 1989. For millions of users. We are responsible for delivering top-quality, secure, and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow.
                </p>
                <div className="relative flex items-center justify-center">
                    <button onClick={prev} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                        <ChevronLeftIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                    <div className="overflow-hidden w-full max-w-5xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {Array.from({ length: totalPages }).map((_, pageIndex) => (
                                <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-5 gap-8 items-center px-8">
                                    {partnerLogos.slice(pageIndex * logosPerPage, (pageIndex + 1) * logosPerPage).map((logo, index) => (
                                        <div key={index} className="flex justify-center h-16 items-center">
                                            <img src={logo.url} alt={logo.name} className="max-h-12 object-contain grayscale hover:grayscale-0 transition-all" />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={next} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                        <ChevronRightIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CompaniesEmpowered;

