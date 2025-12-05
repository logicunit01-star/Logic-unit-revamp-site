import React from 'react';

interface TechItem {
    name: string;
    logo: string;
}

interface IndustryTechStackProps {
    techStack: TechItem[];
}

const IndustryTechStack: React.FC<IndustryTechStackProps> = ({ techStack }) => {
    return (
        <section className="py-20 bg-brand-dark text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl font-bold font-heading mb-4">Powered by Modern Tech</h2>
                        <p className="text-gray-400">
                            We utilize a robust and scalable technology stack tailored to meet the rigorous demands of your industry.
                        </p>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {techStack.map((tech, index) => (
                            <div key={index} className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/10">
                                <img src={tech.logo} alt={tech.name} className="w-12 h-12 mb-4" />
                                <span className="font-medium text-sm text-gray-300">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryTechStack;
