import React from 'react';
import { OFFICE_LOCATIONS } from '../../constants';

const OurOffices: React.FC = () => (
    <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-heading text-brand-dark text-center mb-12">Our Offices</h2>
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8">
                {OFFICE_LOCATIONS.map(office => (
                    <div key={office.country} className="bg-white p-6 rounded-lg border border-gray-200 flex items-start gap-4 flex-1 max-w-md shadow-md">
                        <div className="pt-1">
                            <img 
                                src={office.country === 'Pakistan' ? 'https://flagcdn.com/pk.svg' : 'https://flagcdn.com/us.svg'} 
                                width="40" 
                                alt={`${office.country} flag`}
                            />
                        </div>
                        <div>
                            <p className="font-bold text-lg text-brand-primary">{office.country}</p>
                            <p className="text-brand-dark/80">{office.address}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default OurOffices;
