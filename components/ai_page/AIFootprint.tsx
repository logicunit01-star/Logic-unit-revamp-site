import React from 'react';
import { STATS } from '../../constants';

const AIFootprint: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 bg-black border-y border-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl font-bold font-heading text-white mb-12">LOGIC UNIT's Footprint of Excellence</h2>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl">
                    {STATS.map(stat => (
                        <div key={stat.label} className="text-left border border-gray-800 p-6 rounded-lg bg-gray-900/30">
                            <p className="text-4xl md:text-5xl font-extrabold text-white font-heading">{stat.value}</p>
                            <p className="mt-2 text-base text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                 </div>
            </div>
        </section>
    );
};

export default AIFootprint;
