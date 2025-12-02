
import React from 'react';
import { AI_PAGE_APPROACH_STEPS } from '../../constants';

const OurApproach: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2 block">Methodology</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-6">From Concept to Intelligence</h2>
                    <p className="text-brand-gray text-lg">
                        We follow a rigorous, iterative framework to ensure your AI initiatives deliver tangible ROI and scalable impact.
                    </p>
                </div>
                
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-100 -z-10"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {AI_PAGE_APPROACH_STEPS.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-brand-bg-secondary flex items-center justify-center mb-6 shadow-sm group-hover:border-brand-primary group-hover:shadow-lg transition-all duration-300 relative z-10">
                                   <span className="text-2xl font-bold font-heading text-brand-gray group-hover:text-brand-primary transition-colors">0{index + 1}</span>
                                </div>
                                <h3 className="font-bold text-brand-dark mb-2 text-lg">{step.title}</h3>
                                <p className="text-sm text-brand-gray leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurApproach;
