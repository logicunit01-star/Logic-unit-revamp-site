'use client';

import React from 'react';
import { CAREERS_POSITIONS } from '@/constants';
import Link from 'next/link';

const CareersPositions: React.FC = () => {
    return (
        <section id="positions" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-heading text-brand-dark mb-4">Open Positions</h2>
                    <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                        We're always looking for talented individuals to join our growing team. Find your next challenge below.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {CAREERS_POSITIONS.map((position) => (
                        <div
                            key={position.id}
                            className="group p-6 sm:p-8 rounded-2xl bg-brand-bg-secondary border border-transparent hover:border-brand-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                        >
                            <div className="space-y-2">
                                <div className="flex flex-wrap items-center gap-3">
                                    <h3 className="text-xl font-bold text-brand-dark font-heading group-hover:text-brand-primary transition-colors">
                                        {position.title}
                                    </h3>
                                    <span className="px-2 py-0.5 rounded-md bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-wider">
                                        {position.type}
                                    </span>
                                </div>
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-gray">
                                    <span className="flex items-center gap-1.5">
                                        <span className="w-1 h-1 rounded-full bg-brand-primary"></span>
                                        {position.department}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <span className="w-1 h-1 rounded-full bg-brand-primary"></span>
                                        {position.location}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <span className="w-1 h-1 rounded-full bg-brand-primary"></span>
                                        {position.experience}
                                    </span>
                                </div>
                            </div>

                            <Link
                                href={`/careers/apply?id=${position.id}`}
                                className="inline-flex items-center justify-center rounded-full font-bold px-6 py-2.5 text-sm bg-brand-dark text-white hover:bg-brand-primary transition-all duration-300 whitespace-nowrap"
                            >
                                Apply Now
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-brand-gray mb-6">Don't see a role that fits?</p>
                    <Link
                        href="/careers/general"
                        className="text-brand-primary font-bold border-b border-brand-primary/30 pb-1 hover:border-brand-primary transition-all"
                    >
                        Send us your CV anyway →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CareersPositions;
