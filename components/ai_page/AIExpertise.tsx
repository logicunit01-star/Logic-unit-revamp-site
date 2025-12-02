
import React from 'react';
import { AI_PAGE_EXPERTISE } from '../../constants';

const AIExpertise: React.FC = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2 block">Tech Stack</span>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-6">
                    Core AI Technologies
                </h2>
                <p className="text-brand-gray max-w-2xl mx-auto text-lg mb-16">
                    We leverage a cutting-edge stack of proprietary and open-source models, frameworks, and infrastructure to build enterprise-grade intelligence.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {AI_PAGE_EXPERTISE.map((item, index) => (
                        <div key={index} className="bg-brand-bg-secondary p-6 rounded-xl border border-transparent hover:border-brand-primary/20 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-4 text-brand-primary shadow-sm group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h3 className="font-bold text-brand-dark group-hover:text-brand-primary transition-colors">{item}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIExpertise;
