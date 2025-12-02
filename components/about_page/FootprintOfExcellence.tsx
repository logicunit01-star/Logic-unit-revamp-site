import React from 'react';
import { ABOUT_PAGE_STATS } from '../../constants';

const FootprintOfExcellence: React.FC = () => {
    return (
        <section id="footprint" className="py-16 sm:py-24 bg-white scroll-mt-36">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-dark mb-8 text-left">
                    LOGIC UNIT’s Footprint of Excellence
                 </h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ABOUT_PAGE_STATS.map((stat, index) => (
                        <div key={index} className="flex flex-col justify-center items-center py-12 px-6 border-2 border-[#2C2C2C] rounded-xl bg-white text-center hover:shadow-lg transition-all duration-300">
                            <p className="text-4xl sm:text-5xl font-extrabold text-[#0D1A2F] font-heading mb-3">{stat.value}</p>
                            <p className="text-base text-[#6B6B6B] font-medium">{stat.label}</p>
                        </div>
                    ))}
                 </div>
            </div>
        </section>
    );
};

export default FootprintOfExcellence;