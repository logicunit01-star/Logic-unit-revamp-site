'use client';

import React from 'react';
import FaqCategory from './FaqCategory';
import { FAQS } from '@/constants';
import Link from 'next/link';

const AllFaqs: React.FC = () => {
    return (
        <section className="py-20 bg-brand-bg-main min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

                <div className="space-y-8">
                    {/* Render the full static list as a single category for now, or split if needed. 
                        User asked for "normal 20 faqs". We'll render them all under General/Common. */}
                    <FaqCategory
                        title="Common Questions"
                        description="Everything you need to know about working with Logic-unit."
                        faqs={FAQS}
                    />
                </div>
            </div>
        </section>
    );
};

export default AllFaqs;
