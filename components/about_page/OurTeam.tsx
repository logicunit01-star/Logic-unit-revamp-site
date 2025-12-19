import React from 'react';

const OurTeam: React.FC = () => {
    return (
        <section id="team" className="py-24 bg-brand-bg-secondary relative overflow-hidden scroll-mt-36">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="bg-gray-200 rounded-2xl aspect-video flex items-center justify-center overflow-hidden shadow-xl border border-white order-last lg:order-first relative group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
                    </div>

                    <div>
                        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-bold uppercase tracking-widest">
                            The Talent
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-6 leading-tight">
                            Meet Our <span className="text-brand-secondary">Dedicated Team</span>
                        </h2>
                        <div className="space-y-4 text-brand-gray text-lg leading-relaxed">
                            <p>
                                Our greatest asset is our people. Logic-Unit is home to a diverse group of passionate engineers, creative designers, and strategic consultants who thrive on solving difficult problems. We foster a culture of continuous learning and collaboration, which reflects in the quality of work we deliver.
                            </p>
                            <p>
                                Each member of our team is a specialist in their field, bringing unique perspectives and deep expertise to every project. Together, we work as an extension of your company, committed to your growth and long-term success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;