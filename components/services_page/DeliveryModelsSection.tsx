import React from 'react';

const DELIVERY_MODELS = [
    {
        icon: '🚀',
        title: 'Software Development Outsourcing',
        description: 'We assume full responsibility for your project, delivering a complete, end-to-end solution. This model is ideal for turning a defined concept into a market-ready product.',
        features: [
            'Complete project ownership',
            'Fixed timeline & budget',
            'End-to-end delivery',
            'Turnkey solutions'
        ]
    },
    {
        icon: '👥',
        title: 'Dedicated Team Augmentation',
        description: 'Integrate our vetted engineers directly into your workflow to seamlessly scale your capacity. You maintain full project control while we provide the expertise to accelerate development.',
        features: [
            'Seamless team integration',
            'Flexible scaling',
            'Your project control',
            'Expert resources on-demand'
        ]
    }
];

const DeliveryModelsSection: React.FC = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h4 className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">
                        Engagement Models
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-6">
                        Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Delivery Models</span>
                    </h2>
                    <p className="text-brand-gray text-lg leading-relaxed">
                        Choose the engagement model that best fits your business needs and project requirements.
                    </p>
                </div>

                {/* Delivery Models Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {DELIVERY_MODELS.map((model, index) => (
                        <div
                            key={index}
                            className="group bg-white p-10 rounded-2xl border-2 border-gray-100 hover:border-brand-primary/30 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Animated Border Accent */}
                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-brand-primary to-brand-secondary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                            {/* Icon */}
                            <div className="w-20 h-20 rounded-2xl bg-brand-bg-secondary flex items-center justify-center text-4xl mb-6 group-hover:bg-brand-primary/10 transition-colors duration-300 border-2 border-gray-100 group-hover:border-brand-primary/20">
                                {model.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold font-heading text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
                                {model.title}
                            </h3>

                            {/* Description */}
                            <p className="text-brand-gray leading-relaxed mb-6">
                                {model.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-3">
                                {model.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-brand-dark font-medium">
                                        <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                            <svg className="w-3 h-3 text-brand-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Hover Gradient Overlay */}
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-brand-gray mb-6">
                        Not sure which model fits your needs?
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-bold rounded-full hover:bg-brand-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Schedule a Consultation
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DeliveryModelsSection;
