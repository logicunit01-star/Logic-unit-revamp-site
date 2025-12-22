import React from 'react';

const TechnologyExcellence: React.FC = () => {
    return (
        <section id="tech-excellence" className="py-24 bg-white relative overflow-hidden scroll-mt-36">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">
                            Infrastructure & Scale
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-6 leading-tight">
                            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Excellence</span>
                        </h2>
                        <div className="space-y-4 text-brand-gray text-lg leading-relaxed">
                            <p>
                                We don't just build applications; we engineer excellence. Our technology stack is carefully selected to ensure maximum reliability, security, and performance. From microservices architecture to serverless computing, we employ the most advanced patterns to build systems that scale with your ambitions.
                            </p>
                            <p>
                                Our approach to technology excellence involves continuous integration, automated testing, and rigorous security audits. We stay at the cutting edge of technological shifts so that our clients always have a competitive advantage in an increasingly digital world.
                            </p>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl blur-2xl group-hover:opacity-100 transition-opacity opacity-70"></div>
                        <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden border border-gray-200 shadow-xl">
                            <div className="absolute inset-0 bg-[url('/engineering.jpg')] bg-cover bg-center opacity-90 group-hover:scale-105 transition-transform duration-700"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologyExcellence;