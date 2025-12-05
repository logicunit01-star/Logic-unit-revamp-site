import React from 'react';

interface Challenge {
    title: string;
    description: string;
}

interface IndustryChallengesProps {
    industryName: string;
    challenges: Challenge[];
}

const IndustryChallenges: React.FC<IndustryChallengesProps> = ({ industryName, challenges }) => {
    return (
        <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-primary/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4">
                        <div className="sticky top-32">
                            <h4 className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider border border-brand-primary/20">
                                Industry Hurdles
                            </h4>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 leading-tight">
                                Overcoming <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                                    {industryName}
                                </span> <br />
                                Challenges
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                We understand the unique obstacles facing the {industryName} sector. Our solutions are engineered to turn these challenges into competitive advantages.
                            </p>
                            <div className="w-20 h-1 bg-brand-primary rounded-full"></div>
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            {challenges.map((challenge, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                                        <span className="font-heading font-bold text-xl">0{index + 1}</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-heading mb-3 text-white group-hover:text-brand-primary transition-colors">
                                        {challenge.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {challenge.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryChallenges;
