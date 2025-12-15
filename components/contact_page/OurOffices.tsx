import React from 'react';
import { OFFICE_LOCATIONS } from '../../constants';

const OurOffices: React.FC = () => (
    <section className="py-24 bg-brand-bg-secondary border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h4 className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">
                    Global Network
                </h4>
                <h2 className="text-4xl font-bold font-heading text-brand-dark">Our Offices</h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
                {OFFICE_LOCATIONS.map(office => (
                    <div key={office.country} className="bg-white p-8 rounded-xl border border-gray-200 flex items-start gap-6 flex-1 max-w-md shadow-lg shadow-gray-200/50 hover:-translate-y-1 transition-transform duration-300">
                        <div className="pt-1 flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 overflow-hidden">
                                <img
                                    src={office.country === 'Pakistan' ? 'https://flagcdn.com/pk.svg' : 'https://flagcdn.com/us.svg'}
                                    className="w-full h-full object-cover"
                                    alt={`${office.country} flag`}
                                />
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-xl text-brand-dark mb-2">{office.country}</p>
                            <p className="text-brand-gray leading-relaxed">{office.address}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default OurOffices;
