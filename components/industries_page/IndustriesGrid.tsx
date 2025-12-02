'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { INDUSTRIES_PAGE_DATA } from '../../constants';

const IndustriesGrid: React.FC = () => {
    const router = useRouter();

    const handleSolutionClick = (e: React.MouseEvent, industrySlug: string) => {
        e.preventDefault();
        router.push(`/industries/${industrySlug}`);
    };

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {INDUSTRIES_PAGE_DATA.map((industry) => (
                        <div id={industry.id} key={industry.id} className="border border-gray-200 rounded-lg p-8 scroll-mt-24">
                            <h3 className="text-2xl font-bold font-heading text-brand-dark mb-2">
                                <Link href={`/industries/${industry.industrySlug}`} className="hover:text-brand-primary transition-colors">
                                    {industry.name}
                                </Link>
                            </h3>
                            <p className="text-brand-dark/80 mb-6">{industry.description}</p>
                            <h4 className="font-bold text-brand-primary mb-3">Solutions:</h4>
                            <ul className="space-y-2">
                                {industry.solutions.map((solution, index) => (
                                    <li key={index}>
                                        <a href="#" onClick={(e) => handleSolutionClick(e, industry.industrySlug)} className="text-brand-dark hover:text-brand-accent underline">
                                            {solution.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesGrid;
