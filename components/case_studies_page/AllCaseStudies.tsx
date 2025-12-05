import React from 'react';
import { CASE_STUDIES } from '../../constants';

// Duplicate studies to fill the grid as shown in the wireframe
const allStudies = [...CASE_STUDIES, ...CASE_STUDIES];

const AllCaseStudies: React.FC = () => {
    return (
        <section id="all-case-studies" className="py-16 sm:py-24 bg-white scroll-mt-36">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-dark mb-12">All Case Studies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allStudies.map((study, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden h-full border border-gray-200">
                            <div className="bg-gray-200 aspect-video flex items-center justify-center">
                                <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold font-heading text-brand-dark mb-2">{study.title}</h3>
                                <p className="text-brand-dark/80">{study.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllCaseStudies;