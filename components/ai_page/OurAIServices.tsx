'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { SERVICES_DATA } from '../../constants';

const OurAIServices: React.FC = () => {
    const router = useRouter();
    // Filter out the AI parent pages to show specific AI services
    const aiServices = SERVICES_DATA.filter(s =>
        s.slug !== 'ai-development-services' &&
        s.slug !== 'ai-solutions-technologies' &&
        (s.slug.includes('ai') || s.slug.includes('predictive') || s.slug.includes('vision') || s.slug.includes('natural') || s.slug.includes('agent'))
    ).slice(0, 6); // Show top 6

    return (
        <section id="services" className="py-24 bg-brand-bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2 block">Capabilities</span>
                    <h2 className="text-4xl font-bold font-heading text-brand-dark">
                        Intelligent Solutions
                    </h2>
                    <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
                        From strategic consulting to full-scale engineering, we deliver end-to-end AI capabilities.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {aiServices.map((service, index) => (
                        <div
                            key={service.slug}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                            onClick={() => router.push(`/services/${service.slug}`)}
                        >
                            <div className="mb-6 flex justify-between items-start">
                                <div className="w-14 h-14 rounded-lg bg-brand-bg-secondary flex items-center justify-center text-2xl group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                    {index % 2 === 0 ? '🤖' : '🧠'}
                                </div>
                                <span className="text-brand-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">→</span>
                            </div>
                            <h3 className="text-xl font-bold font-heading text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-brand-gray text-sm leading-relaxed mb-6 line-clamp-3">
                                {service.description}
                            </p>
                            <ul className="space-y-2 border-t border-gray-100 pt-4">
                                {service.subServices.slice(0, 3).map((sub, i) => (
                                    <li key={i} className="flex items-center text-xs text-brand-gray">
                                        <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full mr-2"></span>
                                        {sub}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => router.push('/services')} className="text-brand-dark font-bold border-b-2 border-brand-dark hover:border-brand-primary hover:text-brand-primary transition-all pb-1">
                        View All Capabilities
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurAIServices;
