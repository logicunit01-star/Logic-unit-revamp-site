'use client';


import React, { useState } from 'react';
import Image from 'next/image';
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
                <h2 className="text-3xl font-bold font-heading text-brand-dark mb-12">Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Stories</span></h2>
                <div className="relative">
                    <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-lg shadow-md border border-gray-200">
                        <div className="bg-gray-200 aspect-video rounded-md relative overflow-hidden">
                            <Image src={currentStory.image} alt={currentStory.title} fill className="object-cover" />
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
                    <button onClick={() => router.push('/case-studies')} className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0 px-8 py-3 text-lg bg-brand-primary text-white hover:bg-brand-dark hover:shadow-brand-primary/20">
                        View All Success Stories
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SuccessStoriesSlider;


