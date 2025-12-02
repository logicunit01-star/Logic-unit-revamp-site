
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../../constants';

interface Story {
    title: string;
    description: string;
    image: string;
}

interface IndustrySuccessStoriesProps {
    data: Story[];
}

const IndustrySuccessStories: React.FC<IndustrySuccessStoriesProps> = ({ data }) => {
    // Ensure we always show 2 items for the grid if available
    const displayData = data.length >= 2 ? data.slice(0, 2) : [...data, ...data].slice(0,2);

    return (
        <section id="success-stories" className="py-24 bg-white border-b border-gray-100 scroll-mt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4 block">Proven Results</span>
                        <h2 className="text-4xl font-bold font-heading text-brand-dark">Sector Impact</h2>
                    </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-10">
                    {displayData.map((story, index) => (
                        <div key={index} className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                            <img src={story.image} alt={story.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-3 block">Case Study</span>
                                <h3 className="text-3xl font-bold font-heading text-white mb-4 leading-tight">{story.title}</h3>
                                <p className="text-gray-300 text-base line-clamp-2 mb-6">{story.description}</p>
                                <span className="text-white font-bold text-sm flex items-center gap-2 border-b border-white/30 pb-1 w-fit">
                                    Read Full Story <span className="text-brand-secondary">→</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrySuccessStories;
