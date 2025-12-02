
import React from 'react';
import Link from 'next/link';

interface BuildNextCTAProps {
    imageOnLeft: boolean;
}

const BuildNextCTA: React.FC<BuildNextCTAProps> = ({ imageOnLeft }) => {
    const imageClass = imageOnLeft ? 'md:order-1' : 'md:order-2';
    const contentClass = imageOnLeft ? 'md:order-2' : 'md:order-1';

    return (
        <section className="py-16 sm:py-24 bg-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className={`flex justify-center ${imageClass}`}>
                        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-gray-700 flex items-center justify-center bg-black">
                            <span className="text-gray-500">Image</span>
                        </div>
                    </div>
                    <div className={contentClass}>
                        <h2 className="text-3xl font-bold font-heading text-white mb-4">
                           Let's Build What's Next, Together
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Whether you're reimagining your ERP, automating workflows, or launching an AI platform — we'll help you bring it to life.
                        </p>
                        <Link href="/contact" className="inline-block bg-brand-primary text-white hover:bg-brand-accent px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_4px_15px_rgba(59,130,246,0.5)] hover:scale-105 border border-blue-700">
                            Schedule A Free Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuildNextCTA;
