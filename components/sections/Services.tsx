'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SERVICES_DATA } from '@/constants';

const Services: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const router = useRouter();

    const aiService = {
        slug: 'ai-development-services',
        title: 'AI Development Services',
        description: 'Build intelligent, scalable AI solutions that automate workflows and accelerate growth',
        subServices: ['Enterprise AI', 'Generative AI', 'Machine Learning', 'Computer Vision'],
        isAi: true
    };

    const standardServices = SERVICES_DATA.filter(s => s.slug !== 'ai-development-services').slice(0, 7);
    const displayServices = [aiService, ...standardServices];

    const handleServiceClick = (service: any) => {
        if (service.isAi) {
            router.push('/intelligence');
        } else {
            router.push(`/services/${service.slug}`);
        }
    };

    return (
        <section id="services" className="py-24 sm:py-32 bg-brand-bg-secondary relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h4 className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">bespoke software development</h4>
                        <h2 className="text-4xl font-bold font-heading text-brand-dark">
                            Custom Software Development  <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Solutions and Services</span>
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="text-brand-gray text-lg">
                            We deliver end-to-end engineering excellence, from intelligent automation to scalable infrastructure, ensuring your business is future-ready.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayServices.map((service, index) => (
                        <div
                            key={service.slug}
                            className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 border border-gray-100 hover:border-brand-primary/30 relative overflow-hidden cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => handleServiceClick(service)}
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

                            <div className="mb-6 flex items-center justify-between">
                                <div className="w-12 h-12 rounded-lg bg-brand-bg-secondary flex items-center justify-center text-2xl group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                    <span className="font-heading font-bold">{index + 1}</span>
                                </div>
                                <span className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-brand-primary font-bold text-2xl">→</span>
                            </div>

                            <h3 className="text-2xl font-bold font-heading text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed min-h-[4.5rem]">{service.description}</p>

                            <div className="border-t border-gray-100 pt-6">
                                <ul className="space-y-3">
                                    {service.subServices.slice(0, 4).map((sub: string, i: number) => (
                                        <li key={i} className="flex items-start text-sm text-gray-500">
                                            <span className="mr-2 text-brand-secondary mt-0.5">●</span>
                                            {sub}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                    <div onClick={() => router.push('/services')} className="bg-brand-dark rounded-xl p-8 shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden group cursor-pointer">
                        <div className="absolute inset-0 bg-corporate-gradient opacity-100"></div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold font-heading text-white mb-4">Explore Full Capabilities</h3>
                            <p className="text-gray-300 mb-8">Discover how our tailored technology strategies can accelerate your growth.</p>
                            <span className="inline-block bg-white text-brand-dark hover:bg-brand-secondary hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300">
                                View All Services
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
