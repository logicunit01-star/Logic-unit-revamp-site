'use client';


import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CASE_STUDIES, ChevronLeftIcon, ChevronRightIcon } from '../../constants';

const SuccessStoriesSlider: React.FC = () => {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => setCurrentIndex(i => (i === 0 ? CASE_STUDIES.length - 1 : i - 1));
    const next = () => setCurrentIndex(i => (i === CASE_STUDIES.length - 1 ? 0 : i + 1));
    const currentStory = CASE_STUDIES[currentIndex];

    return (
        <section id="success-stories" className="py-16 sm:py-24 bg-brand-bg-main scroll-mt-36">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold font-heading text-brand-dark mb-12">Success Stories</h2>
                <div className="relative">
                    <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-lg shadow-md border border-gray-200">
                        <div className="bg-gray-200 aspect-video rounded-md flex items-center justify-center">
                            <img src={currentStory.image} alt={currentStory.title} className="w-full h-full object-cover rounded-md"/>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-brand-dark mb-3">{currentStory.title}</h3>
                            <p className="text-brand-dark/80">{currentStory.description}</p>
                        </div>
                    </div>
                     <button onClick={prev} className="absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition">
                        <ChevronLeftIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                    <button onClick={next} className="absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition">
                        <ChevronRightIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                </div>
                 <div className="text-center mt-12">
                    <button onClick={() => router.push('/case-studies')} className="px-6 py-2 rounded-full font-semibold bg-brand-primary text-white hover:bg-brand-accent transition-all duration-300 shadow-lg hover:scale-105 border border-blue-900">
                        View All Success Stories
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SuccessStoriesSlider;


