
import React from 'react';
import Link from 'next/link';
import { WHY_US_POINTS } from '@/constants';

interface WhyUsPoint {
    title: string;
    description: string;
}

interface WhyUsProps {
    tagline?: string;
    heading?: string;
    headingSpan?: string;
    content?: string;
    points?: WhyUsPoint[];
}

const WhyUs: React.FC<WhyUsProps> = ({
    tagline = "Why Businesses Choose",
    heading = "Customized Software",
    headingSpan = "Industries",
    content = "In a rapidly evolving digital landscape, stability, expertise, and vision are paramount. We don't just build software; we architect the systems that power your business future.",
    points = WHY_US_POINTS
}) => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    <div>
                        <h4 className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">{tagline}</h4>
                        <h2 className="text-4xl font-bold font-heading text-brand-dark mb-8 leading-tight">
                            {heading}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary"> {headingSpan}</span>
                        </h2>
                        <p className="text-lg text-brand-gray leading-relaxed mb-8 font-light">
                            {content}
                        </p>
                        <Link href="/about" className="text-brand-primary font-bold border-b border-brand-primary/30 pb-1 hover:border-brand-primary transition-all">
                            Discover Our Methodology →
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {points.map((point, index) => (
                            <div key={index} className="border-l-2 border-brand-primary/20 pl-6 hover:border-brand-primary transition-colors duration-300">
                                <h3 className="text-xl font-bold text-brand-dark mb-3 font-heading">{point.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
