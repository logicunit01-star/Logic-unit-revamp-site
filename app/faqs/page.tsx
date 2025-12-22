'use client';

import React from 'react';
import FaqsHero from '@/components/faqs_page/FaqsHero';
import AllFaqs from '@/components/faqs_page/AllFaqs';
import Partners from '@/components/sections/Partners';

export default function FaqsPage() {
    return (
        <main className="bg-brand-bg-main">
            <FaqsHero />
            <Partners />
            <AllFaqs />
            {/* Partners section adds credibility below the FAQs */}

        </main>
    );
}
