import React from 'react';
import { WHY_CHOOSE_US_DATA } from '../../constants';

const WhyChooseUs: React.FC = () => {
    return (
        <section id="why-choose-us" className="py-16 sm:py-24 bg-white scroll-mt-36">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold font-heading text-brand-dark mb-12">Why Clients Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {WHY_CHOOSE_US_DATA.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-6 bg-brand-bg-main">
                            <h3 className="text-lg font-bold text-brand-primary mb-3">{item.title}</h3>
                            <p className="text-brand-dark/80">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;