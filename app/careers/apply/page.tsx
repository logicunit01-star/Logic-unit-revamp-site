'use client';

import React, { Suspense } from 'react';
import CareerApplicationForm from '@/components/careers_page/CareerApplicationForm';
import { useSearchParams } from 'next/navigation';
import { CAREERS_POSITIONS } from '@/constants';

function ApplyPageContent() {
    const searchParams = useSearchParams();
    const jobId = searchParams.get('id');

    // Convert jobId to number for comparison since constants use numbers
    const position = CAREERS_POSITIONS.find(p => p.id === Number(jobId));
    const jobTitle = position ? position.title : (searchParams.get('title') || 'Position');

    return (
        <main className="bg-brand-bg-main min-h-screen pt-20">
            <div className="container mx-auto px-4 py-8 text-center">
                <p className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-2">Apply Now</p>
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-brand-dark">
                    {position ? position.title : jobTitle}
                </h1>
                {position && (
                    <p className="text-brand-gray mt-4 max-w-xl mx-auto">
                        {position.department} • {position.location} • {position.type}
                    </p>
                )}
            </div>
            <CareerApplicationForm jobTitle={jobTitle} />
        </main>
    );
}

export default function ApplyPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-brand-primary">Loading application...</div>}>
            <ApplyPageContent />
        </Suspense>
    );
}
