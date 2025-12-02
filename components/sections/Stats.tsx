import React from 'react';
import { STATS } from '@/constants';

const Stats: React.FC = () => {
    return (
        <section className="bg-brand-dark py-20 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute left-0 bottom-0 w-1/2 h-full bg-gradient-to-t from-brand-primary/30 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {STATS.map((stat, index) => (
                        <div key={index} className="pt-8 md:pt-0 px-4 group">
                            <div className="mb-2 transform group-hover:-translate-y-1 transition-transform duration-500">
                                <span className="text-5xl md:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                                    {stat.value}
                                </span>
                            </div>
                            <p className="text-brand-metallic text-sm uppercase tracking-widest font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;