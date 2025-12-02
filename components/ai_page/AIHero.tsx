'use client';


import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AI_PAGE_DEV_AREAS } from '../../constants';

const AIBreadcrumb: React.FC = () => (
    <nav aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-brand-dark/60">
            <li>
                <Link href="/" className="hover:text-brand-primary">Home</Link>
            </li>
            <li><span className="text-gray-400">/</span></li>
            <li className="font-medium text-brand-dark">Intelligence</li>
        </ol>
    </nav>
);

const AIHero: React.FC = () => {
    const router = useRouter();

    return (
        <section className="bg-brand-bg-main pt-24 pb-20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-brand-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="mb-6">
                            <AIBreadcrumb />
                        </div>
                        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
                            Artificial Intelligence Center of Excellence
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold font-heading text-brand-dark leading-[1.1] mb-6">
                            Engineering the <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Intelligent Future</span>
                        </h1>
                        <p className="text-lg text-brand-gray mb-8 leading-relaxed max-w-xl">
                            We move beyond hype to deliver measurable business value. From predictive modeling to autonomous agents, we architect secure, scalable AI ecosystems that drive enterprise evolution.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="bg-brand-primary text-white hover:bg-brand-dark px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-brand-primary/20 inline-block">
                                Schedule Consultation
                            </Link>
                            <a href="#services" className="bg-white text-brand-dark border border-gray-200 hover:border-brand-primary hover:text-brand-primary px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 inline-block">
                                Explore Capabilities
                            </a>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 animate-pulse-slow">
                                    <span className="text-3xl mb-2 block">🧠</span>
                                    <h3 className="font-bold text-brand-dark">Neural Networks</h3>
                                    <p className="text-xs text-gray-500">Deep Learning</p>
                                </div>
                                <div className="bg-brand-dark p-6 rounded-2xl shadow-lg text-white">
                                    <span className="text-3xl mb-2 block">🤖</span>
                                    <h3 className="font-bold">Autonomous Agents</h3>
                                    <p className="text-xs text-gray-400">Self-reasoning AI</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-brand-primary p-6 rounded-2xl shadow-lg text-white">
                                    <span className="text-3xl mb-2 block">✨</span>
                                    <h3 className="font-bold">Generative AI</h3>
                                    <p className="text-xs text-white/80">Content & Code</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                    <span className="text-3xl mb-2 block">👁️</span>
                                    <h3 className="font-bold text-brand-dark">Computer Vision</h3>
                                    <p className="text-xs text-gray-500">Visual Intelligence</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -z-10 inset-0 bg-brand-secondary/20 blur-[100px] rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIHero;


