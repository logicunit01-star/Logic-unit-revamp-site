
import React from 'react';
import { CASE_STUDIES } from '../../constants';

const AISuccessStories: React.FC = () => {
    // Filter for "AI" related case studies if possible, otherwise use first few
    const stories = CASE_STUDIES.slice(0, 2);

    return (
        <section className="py-24 bg-brand-bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2 block">Proven Impact</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark">Success Stories</h2>
                    </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {stories.map((story, index) => (
                        <div key={index} className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                            <img src={story.image} alt={story.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-2 block">Case Study</span>
                                <h3 className="text-2xl font-bold font-heading text-white mb-3">{story.title}</h3>
                                <p className="text-gray-300 mb-4 line-clamp-2 text-sm">{story.description}</p>
                                <span className="text-white font-bold text-sm border-b border-white/30 pb-1">Read Full Story</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AISuccessStories;
