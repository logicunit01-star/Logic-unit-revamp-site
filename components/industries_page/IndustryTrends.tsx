import React from 'react';

interface Trend {
    title: string;
    description: string;
}

interface IndustryTrendsProps {
    industryName: string;
    trends: Trend[];
}

const IndustryTrends: React.FC<IndustryTrendsProps> = ({ industryName, trends }) => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
                        Future of <span className="text-brand-primary">{industryName}</span>
                    </h2>
                    <p className="text-brand-gray text-lg max-w-2xl mx-auto">
                        Stay ahead of the curve with our insights into the technologies shaping the future of your industry.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {trends.map((trend, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-primary hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-brand-bg-secondary rounded-full flex items-center justify-center mb-6 text-2xl">
                                🚀
                            </div>
                            <h3 className="text-xl font-bold font-heading text-brand-dark mb-3">{trend.title}</h3>
                            <p className="text-brand-gray leading-relaxed">{trend.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryTrends;
