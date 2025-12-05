import React from 'react';

interface ProcessStep {
    title: string;
    description: string;
}

interface IndustryProcessProps {
    industryName: string;
    steps: ProcessStep[];
}

const IndustryProcess: React.FC<IndustryProcessProps> = ({ industryName, steps }) => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h4 className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">
                        Our Approach
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-6">
                        Tailored Workflow for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">{industryName}</span>
                    </h2>
                    <p className="text-brand-gray text-lg">
                        We follow a rigorous, industry-compliant process to ensure your software is secure, scalable, and successful.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="group relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 rounded-full bg-brand-bg-main border border-brand-primary/20 flex items-center justify-center text-brand-primary font-bold text-xl mb-6 mx-auto relative z-10 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold font-heading text-brand-dark mb-3 text-center">
                                    {step.title}
                                </h3>
                                <p className="text-brand-gray text-sm text-center leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryProcess;
