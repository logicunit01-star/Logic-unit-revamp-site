import React from 'react';
import Link from 'next/link';
import { CASE_STUDIES } from '../../constants';

// Duplicate studies to fill the grid as shown in the wireframe
const allStudies = [...CASE_STUDIES, ...CASE_STUDIES];

const AllCaseStudies: React.FC = () => {
    return (
        <section id="all-case-studies" className="py-24 bg-brand-bg-secondary relative overflow-hidden scroll-mt-36">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl font-bold font-heading text-brand-dark mb-6">
                        Explore <span className="text-brand-secondary">More Impact</span>
                    </h2>
                    <p className="text-brand-gray text-lg max-w-2xl mx-auto leading-relaxed">
                        A broader look at our diverse portfolio and the results we've achieved for our partners.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {allStudies.map((study, index) => (
                        <Link href={`/case-studies/${study.slug}`} key={index} className="group block bg-white rounded-2xl shadow-xl shadow-gray-200/40 overflow-hidden h-full border border-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                            <div className="relative aspect-video overflow-hidden">
                                <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-dark/30 to-transparent"></div>
                                {/* Industry Badge */}
                                {study.industry && (
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20 shadow-sm leading-none flex items-center">
                                            {study.industry}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-8 h-full flex flex-col">
                                <h3 className="text-xl font-bold font-heading text-brand-dark mb-3 group-hover:text-brand-secondary transition-colors line-clamp-2">{study.title}</h3>
                                <p className="text-brand-gray line-clamp-3 leading-relaxed flex-grow">{study.description}</p>
                                <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                                    <span className="text-brand-secondary font-bold text-sm uppercase tracking-widest">Case Study</span>
                                    <span className="w-8 h-8 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300">
                                        →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-primary/5 blur-3xl rounded-full -z-10"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-secondary/5 blur-3xl rounded-full -z-10"></div>
        </section>
    );
};

export default AllCaseStudies;