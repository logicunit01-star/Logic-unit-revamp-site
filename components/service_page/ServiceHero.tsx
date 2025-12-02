
import React from 'react';
import Link from 'next/link';
import Breadcrumb from './Breadcrumb';

const ServiceHero: React.FC = () => {
    return (
        <section className="bg-brand-bg-main pt-24 pb-20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-brand-primary/5 to-transparent pointer-events-none" />
             
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="mb-6">
                            <Breadcrumb />
                        </div>
                        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
                            Global Engineering Center
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold font-heading text-brand-dark leading-[1.1] mb-6 tracking-tight">
                            Architecting the <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Digital Future</span>
                        </h1>
                        <p className="text-lg text-brand-gray mb-8 leading-relaxed max-w-xl font-light">
                            We build smart, scalable, and human-centered solutions. Our global team helps enterprises accelerate innovation and scale with confidence through technology, AI, and strategic design.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="bg-brand-primary text-white hover:bg-brand-dark px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-brand-primary/20 inline-block">
                                Start Your Project
                            </Link>
                            <a href="#core-capabilities" className="bg-white text-brand-dark border border-gray-200 hover:border-brand-primary hover:text-brand-primary px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 inline-block">
                                Explore Capabilities
                            </a>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3] group">
                            <img 
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                                alt="Engineering Excellence" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
                            
                            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center text-brand-dark">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">Engineering Precision</p>
                                        <p className="text-xs text-gray-200">ISO 27001 Certified Processes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
