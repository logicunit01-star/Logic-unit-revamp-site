import React from 'react';

const AboutIntro: React.FC = () => {
    return (
        <section id="about-intro" className="py-24 bg-white relative overflow-hidden scroll-mt-36">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl blur-2xl group-hover:opacity-100 transition-opacity opacity-70"></div>
                        <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden border border-gray-200">
                            {/* Placeholder for a real image */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-90 group-hover:scale-105 transition-transform duration-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
                        </div>
                    </div>

                    <div>
                        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest">
                            Our Story
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-6 leading-tight">
                            Pioneering Digital <span className="text-brand-primary">Excellence</span>
                        </h2>
                        <div className="space-y-4 text-brand-gray text-lg leading-relaxed">
                            <p>
                                At Logic-Unit, we understand that modern businesses face an ever-evolving landscape of complex interdependencies. Our mission is to help you navigate these challenges by seamlessly adapting new technologies, managing risks, and ensuring compliance across diverse regulations.
                            </p>
                            <p>
                                With deep industry knowledge and decades of combined experience, we provide more than just code. We offer insights and bespoke solutions that lead the entire process—from initial ideation and concept to final delivery and beyond.
                            </p>
                            <p>
                                Our dedicated team of engineers and consultants possesses broad competencies across multiple platforms, providing ongoing support through our proven client framework to ensure long-term scalability and success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;