'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CareersHero from '@/components/careers_page/CareersHero';
import CareersBenefits from '@/components/careers_page/CareersBenefits';
import CareersPositions from '@/components/careers_page/CareersPositions';
import CTA from '@/components/sections/CTA';
import Partners from '@/components/sections/Partners';
import Stats from '@/components/sections/Stats';

export default function CareersPage() {
    const router = useRouter();

    return (
        <main className="bg-white">
            <CareersHero />
            <Partners />
            <CareersBenefits />
            <Stats />
            <CareersPositions />

            <CTA
                title="Don't See the Perfect Fit?"
                subtitle="We're always looking for exceptional talent to join our ranks. Send us your portfolio and let's talk about how you can contribute to the future of technology."
                buttonText="Connect With Us"
                onButtonClick={() => router.push('/contact')}
            />
        </main>
    );
}
