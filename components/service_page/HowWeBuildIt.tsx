
import React from 'react';
import { PROCESS_STEPS } from '../../constants';

const HowWeBuildIt: React.FC = () => {
    return (
        <section id="how-we-build-it" className="py-24 bg-brand-bg-secondary scroll-mt-24 border-y border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4 block">Methodology</span>
                    <h2 className="text-4xl font-bold font-heading text-brand-dark mb-6">Execution Framework</h2>
                    <p className="text-lg text-brand-gray">
                        A rigorous, transparent, and agile process designed to mitigate risk and accelerate time-to-value.
                    </p>
                </div>
                
                <div className="relative max-w-4xl mx-auto">
                    {/* Connecting Line (Vertical) */}
                    <div className="absolute left-8 md:left-1/2 top-8 bottom-8 w-0.5 bg-gray-200 -ml-[1px] hidden md:block"></div>
                    
                    <div className="space-y-12 relative">
                        {PROCESS_STEPS.map((step, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                <div className="w-full md:w-1/2">
                                    <div className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-brand-primary/30 group relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className={`hidden md:block absolute top-1/2 w-4 h-4 bg-brand-primary rounded-full border-4 border-white shadow-sm ${index % 2 === 0 ? '-right-[42px]' : '-left-[42px]'} transform -translate-y-1/2 z-10`}></div>
                                        
                                        <span className="text-4xl font-bold font-heading text-gray-100 absolute top-4 right-4 select-none group-hover:text-brand-bg-secondary transition-colors">0{index + 1}</span>
                                        <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors relative z-10">{step.title}</h3>
                                        <p className="text-brand-gray text-sm leading-relaxed relative z-10">{step.description}</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeBuildIt;
