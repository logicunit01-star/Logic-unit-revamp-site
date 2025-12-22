import React from 'react';
import { WHY_CHOOSE_US_DATA } from '../../constants';

const WhyChooseUs: React.FC = () => {
    return (
        <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden scroll-mt-36">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-brand-dark mb-6">
                        Why Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Choose Us</span>
                    </h2>
                    <p className="text-brand-gray text-lg max-w-2xl mx-auto leading-relaxed">
                        We deliver strategic value through expertise, innovation, and a commitment to your long-term success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {WHY_CHOOSE_US_DATA.map((item, index) => (
                        <div key={index} className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-300 hover:-translate-y-2">
                            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                <span className="text-xl font-bold">{index + 1}</span>
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                            <p className="text-brand-gray leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;