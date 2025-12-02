
import React from 'react';

interface WhyChooseIndustryProps {
    data: {
        title: string;
        description: string;
        image: string;
    }
}

const WhyChooseIndustry: React.FC<WhyChooseIndustryProps> = ({ data }) => {
    return (
        <section id="why-choose" className="py-32 bg-brand-dark text-white relative overflow-hidden scroll-mt-24">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <span className="text-brand-secondary font-bold uppercase tracking-widest text-xs mb-4 block">The Logic-Unit Advantage</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                            {data.title}
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-10 border-l-4 border-brand-primary pl-6">
                            {data.description}
                        </p>
                        <a href="#contact" className="inline-flex items-center text-white font-bold border-b-2 border-white hover:border-brand-secondary hover:text-brand-secondary transition-colors pb-1">
                            Partner With Us <span className="ml-2">→</span>
                        </a>
                    </div>
                    <div className="order-1 lg:order-2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                        <img 
                            src={data.image} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 grayscale group-hover:grayscale-0"
                            alt={data.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseIndustry;
