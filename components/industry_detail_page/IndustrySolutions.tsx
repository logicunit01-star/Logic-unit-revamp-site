
import React from 'react';

interface IndustrySolutionsProps {
    data: {
        title: string;
        items: { title: string; description: string }[];
    }
}

const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({ data }) => {
    return (
        <section id="solutions" className="py-24 bg-brand-bg-main scroll-mt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2 block">Capabilities</span>
                    <h2 className="text-4xl font-bold font-heading text-brand-dark">{data.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.items.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-brand-bg-secondary rounded-lg flex items-center justify-center mb-6 text-brand-dark group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                <span className="font-bold font-heading text-lg">0{index+1}</span>
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                            <p className="text-brand-gray text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrySolutions;
