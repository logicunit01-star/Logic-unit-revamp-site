
import React from 'react';

interface DevelopmentProcessProps {
    data: {
        title: string;
        description: string;
        steps: { title: string; description: string }[];
    }
}

const DevelopmentProcess: React.FC<DevelopmentProcessProps> = ({ data }) => {
    return (
        <section id="process" className="py-24 bg-brand-bg-secondary scroll-mt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4 block">Framework</span>
                    <h2 className="text-4xl font-bold font-heading text-brand-dark mb-6">{data.title}</h2>
                    <p className="text-lg text-brand-gray">{data.description}</p>
                </div>
                
                <div className="space-y-8 max-w-5xl mx-auto">
                    {data.steps.map((step, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-8 md:items-center group bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                            <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-brand-bg-main border border-gray-200 text-2xl font-bold text-brand-dark font-heading rounded-full shadow-sm group-hover:border-brand-primary group-hover:text-brand-primary transition-all">
                                0{index + 1}
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">{step.title}</h3>
                                <p className="text-brand-gray leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevelopmentProcess;
