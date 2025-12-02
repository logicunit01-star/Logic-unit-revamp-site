'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { INDUSTRIES_PAGE_DATA, ChevronRightIcon, LOGO_URL } from '../../constants';

const IndustryCapabilities: React.FC = () => {
    const [activeIndustry, setActiveIndustry] = useState(INDUSTRIES_PAGE_DATA[0]);

    return (
        <section id="industry-capabilities" className="py-24 bg-white scroll-mt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2 block">Industries</span>
                    <h2 className="text-4xl font-bold font-heading text-brand-dark">Industries We Serve</h2>
                    <p className="text-brand-gray mt-4 max-w-2xl mx-auto text-lg">
                        Tailored technology solutions for diverse business sectors.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-0 border border-gray-200 rounded-2xl overflow-hidden shadow-lg bg-white">
                    {/* Sidebar List */}
                    <div className="lg:col-span-4 bg-gray-50 border-r border-gray-200 h-[600px] overflow-y-auto custom-scrollbar">
                        <div className="flex flex-col">
                            {INDUSTRIES_PAGE_DATA.map((industry) => (
                                <button
                                    key={industry.industrySlug}
                                    onClick={() => setActiveIndustry(industry)}
                                    className={`w-full text-left px-8 py-5 transition-all duration-300 flex items-center justify-between group border-b border-gray-200 last:border-0 relative overflow-hidden ${activeIndustry.industrySlug === industry.industrySlug
                                        ? 'bg-white text-brand-primary'
                                        : 'hover:bg-white/50 text-brand-dark'
                                        }`}
                                >
                                    {activeIndustry.industrySlug === industry.industrySlug && (
                                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-primary"></div>
                                    )}
                                    <span className={`font-bold text-sm md:text-base ${activeIndustry.industrySlug === industry.industrySlug ? 'translate-x-2' : ''} transition-transform duration-300`}>
                                        {industry.name}
                                    </span>
                                    <ChevronRightIcon className={`w-4 h-4 transition-transform duration-300 ${activeIndustry.industrySlug === industry.industrySlug ? 'text-brand-primary rotate-90 lg:rotate-0' : 'text-gray-400 opacity-0 group-hover:opacity-100'}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Detail Panel */}
                    <div className="lg:col-span-8 p-8 md:p-12 bg-white relative min-h-[600px] flex flex-col">
                        {activeIndustry && (
                            <div className="animate-fade-in-up h-full flex flex-col">
                                <div className="mb-8">
                                    <h3 className="text-3xl font-bold font-heading text-brand-dark mb-6">{activeIndustry.name}</h3>
                                    <p className="text-lg text-brand-gray leading-relaxed">
                                        {activeIndustry.description}
                                    </p>
                                </div>

                                <div className="mb-12">
                                    <h4 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-6">Key Solutions</h4>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {activeIndustry.solutions.map((solution, index) => (
                                            <div key={index} className="flex items-start p-4 rounded-lg border border-gray-100 hover:border-brand-primary/30 hover:shadow-sm transition-all bg-brand-bg-main">
                                                <div className="w-2 h-2 rounded-full bg-brand-secondary mt-2 mr-3 flex-shrink-0"></div>
                                                <span className="text-brand-dark font-medium text-sm">{solution.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-8 border-t border-gray-100 flex justify-between items-center">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white text-xs border-2 border-white">01</div>
                                        <div className="w-8 h-8 rounded-full bg-brand-secondary flex items-center justify-center text-white text-xs border-2 border-white">02</div>
                                        <div className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-white text-xs border-2 border-white">03</div>
                                    </div>
                                    <Link
                                        href={`/industries/${activeIndustry.industrySlug}`}
                                        className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm hover:text-brand-dark transition-colors uppercase tracking-wider group"
                                    >
                                        View Industry Details <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </div>
                            </div>
                        )}

                        <div className="absolute top-0 right-0 p-12 pointer-events-none opacity-[0.03]">
                            <img src={LOGO_URL} className="w-64 grayscale" alt="Watermark" />
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.5s ease-out forwards;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d1d5db;
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #9ca3af;
                }
            `}</style>
        </section>
    );
};

export default IndustryCapabilities;
