
import React from 'react';

const deliveryModelsData = [
    {
        icon: '📝',
        title: 'Software Development Outsourcing',
        description: 'We assume full responsibility for your project, delivering a complete, end-to-end solution. This model is ideal for turning a defined concept into a market-ready product, mitigating your risk and management overhead.'
    },
    {
        icon: '🤝',
        title: 'Dedicated Team Augmentation',
        description: 'Integrate our vetted engineers directly into your workflow to seamlessly scale your capacity. You maintain full project control while we provide the specific expertise needed to accelerate your development velocity.'
    }
];

const DeliveryModels: React.FC = () => {
    return (
        <section id="delivery-models" className="py-24 sm:py-32 bg-brand-dark text-white relative overflow-hidden scroll-mt-24">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-brand-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Flexibility</span>
                    <h2 className="text-4xl font-bold font-heading text-white mb-6">Engagement Models</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        We adapt to your business needs, providing flexible frameworks that align with your operational goals and budget structure.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {deliveryModelsData.map((model, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-300 group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <div className="text-4xl bg-brand-primary/20 w-16 h-16 flex items-center justify-center rounded-xl text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-primary group-hover:text-white">
                                    {model.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4 font-heading group-hover:text-brand-secondary transition-colors">{model.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">{model.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DeliveryModels;
