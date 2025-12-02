import React from 'react';

const OurTeam: React.FC = () => {
    return (
        <section id="team" className="py-16 sm:py-24 bg-brand-bg-main scroll-mt-36">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center order-last md:order-first">
                        <span className="text-gray-500">Image</span>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-heading text-brand-dark mb-6">Our Team</h2>
                        <p className="text-brand-dark/80 space-y-4">
                            Our solution helps to manage complex interdependencies adaption of new technologies, manage risks, and navigate diverse regulations. Our deep industry knowledge and experience enables us to provide insights and bespoke solutions to help the company lead the process from ideation and concept to delivery. Our dedicated team of engineers and consultants have competencies on multiple platforms and provides ongoing support through its client framework.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;