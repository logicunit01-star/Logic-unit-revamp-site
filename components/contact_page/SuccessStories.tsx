'use client';


import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CASE_STUDIES, ChevronLeftIcon, ChevronRightIcon } from '../../constants';

const SuccessStories: React.FC = () => {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => setCurrentIndex(i => (i === 0 ? CASE_STUDIES.length - 1 : i - 1));
    const next = () => setCurrentIndex(i => (i === CASE_STUDIES.length - 1 ? 0 : i + 1));

    return (
         <section className="py-16 sm:py-24 border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold font-heading text-brand-dark text-center mb-12">Success Stories</h2>
                <div className="relative max-w-5xl mx-auto">
                    <div className="overflow-hidden">
                         <div className="relative min-h-[350px]">
                            {CASE_STUDIES.map((story, index) => (
                                <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-lg shadow-md border border-gray-200 h-full">
                                        <div className="bg-gray-200 h-full rounded-md">
                                            <img src={story.image} alt={story.title} className="w-full h-full object-cover rounded-md"/>
                                        </div>
                                        <div className="flex flex-col justify-center h-full">
                                            <h3 className="text-xl font-bold text-brand-dark mb-3">{story.title}</h3>
                                            <p className="text-brand-dark/80 line-clamp-6">{story.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={prev} className="absolute top-1/2 -left-6 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition">
                        <ChevronLeftIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                    <button onClick={next} className="absolute top-1/2 -right-6 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition">
                        <ChevronRightIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                </div>
                 <div className="text-center mt-12">
                    <button onClick={() => router.push('/case-studies')} className="px-6 py-2 rounded-full font-semibold bg-brand-primary text-white hover:bg-brand-accent transition-all duration-300 shadow-lg hover:scale-105 border border-blue-900">
                        Read More Case Studies
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;


