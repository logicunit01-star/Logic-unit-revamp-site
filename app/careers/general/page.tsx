import React from 'react';
import CareerApplicationForm from '@/components/careers_page/CareerApplicationForm';

export default function GeneralApplicationPage() {
    return (
        <main className="bg-brand-bg-main min-h-screen pt-20">
            <div className="container mx-auto px-4 py-8 text-center">
                <p className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-2">Join the Talent Network</p>
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-brand-dark">General Application</h1>
            </div>
            <CareerApplicationForm />
        </main>
    );
}
