import React from 'react';
import { MEGA_MENU_SERVICES } from '../../constants';

const consultancyServices = MEGA_MENU_SERVICES.main.find(
    cat => cat.title === 'Consultancy and Support'
)?.items || [];

const Consultancy: React.FC = () => {
    return (
        <section id="consultancy" className="py-16 sm:py-24 bg-brand-bg-main">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-dark text-center mb-12">Consultancy</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 max-w-6xl mx-auto">
                    {consultancyServices.map((service, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg p-6 text-center h-full flex items-center justify-center bg-white hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-brand-dark">{service.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Consultancy;
