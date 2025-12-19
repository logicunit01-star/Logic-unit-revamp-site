import React from 'react';
import { ABOUT_PAGE_STATS } from '../../constants';

const FootprintOfExcellence: React.FC = () => {
    return (
        <section id="footprint" className="py-24 bg-brand-dark relative overflow-hidden scroll-mt-36">
            {/* Dark Mode Theme for contrast */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/10 blur-[120px] rounded-full -z-0"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-secondary/5 blur-[100px] rounded-full -z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                        Logic-Unit's <span className="text-brand-primary">Footprint of Excellence</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Measurable impact delivered through precision engineering and strategic insight.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ABOUT_PAGE_STATS.map((stat, index) => (
                        <div key={index} className="flex flex-col justify-center items-center py-12 px-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 group">
                            <p className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary font-heading mb-4 group-hover:scale-110 transition-transform duration-500">
                                {stat.value}
                            </p>
                            <p className="text-lg text-gray-300 font-medium uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FootprintOfExcellence;