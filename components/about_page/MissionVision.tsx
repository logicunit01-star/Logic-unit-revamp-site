import React from 'react';

const MissionVision: React.FC = () => {
    return (
        <section id="mission" className="py-24 bg-brand-bg-secondary relative overflow-hidden scroll-mt-36">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-bold uppercase tracking-widest">
                            Values & Future
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-6 leading-tight">
                            Our Mission & <span className="text-brand-secondary">Core Vision</span>
                        </h2>
                        <div className="space-y-4 text-brand-gray text-lg leading-relaxed">
                            <p>
                                Our mission is to empower organizations through transformative technology. We believe that software should be an asset, not a hurdle. By combining strategic thinking with technical mastery, we turn complex problems into elegant, scalable digital experiences.
                            </p>
                            <p>
                                We envision a world where every business, regardless of size, can leverage the power of custom software and artificial intelligence to reach its full potential. We are committed to being at the forefront of this digital revolution, guiding our clients toward a future defined by efficiency and innovation.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-6 mb-4">
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                    <div className="text-brand-primary font-bold text-xl mb-1">Integrity</div>
                                    <p className="text-sm text-gray-500">Transparent partnerships and honest advice.</p>
                                </div>
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                    <div className="text-brand-secondary font-bold text-xl mb-1">Innovation</div>
                                    <p className="text-sm text-gray-500">Always pushing the boundaries of possible.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-brand-secondary/10 to-brand-primary/10 rounded-2xl blur-2xl group-hover:opacity-100 transition-opacity opacity-70"></div>
                        <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden border border-gray-200 shadow-xl">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-90 group-hover:scale-105 transition-transform duration-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;