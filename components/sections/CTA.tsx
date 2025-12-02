'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface CTAProps {
    title: string;
    subtitle: string;
    buttonText: string;
    imageSrc?: string;
    onButtonClick?: () => void;
    href?: string;
}

const CTA: React.FC<CTAProps> = ({ title, subtitle, buttonText, imageSrc, onButtonClick, href }) => {
    const router = useRouter();
    const backgroundStyle = imageSrc ? { backgroundImage: `url(${imageSrc})` } : {
        backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
    };

    const handleClick = (e: React.MouseEvent) => {
        if (onButtonClick) {
            e.preventDefault();
            onButtonClick();
        } else if (href) {
            // Link component handles navigation, but if button is used inside Link, it might be redundant.
            // However, we want to keep the button styling.
            // If href is provided, we can wrap the button in Link or use router.push if we want to keep it as a button element.
            // Let's use router.push for consistency with existing usage if href is passed but no onButtonClick.
            e.preventDefault();
            router.push(href);
        }
    };

    return (
        <section className="py-32 bg-brand-dark relative overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30 grayscale mix-blend-overlay"
                style={backgroundStyle}
                suppressHydrationWarning
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/70"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-white mb-8 leading-tight">
                        {title}
                    </h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        {subtitle}
                    </p>
                    <button
                        onClick={handleClick}
                        className="inline-block bg-white text-brand-dark hover:bg-brand-primary hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,94,184,0.6)] hover:-translate-y-1"
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
