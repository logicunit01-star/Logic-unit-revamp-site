
import React from 'react';
import Link from 'next/link';

const LetsTalkCTA: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-brand-bg-main rounded-lg p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="bg-gray-300 rounded-lg aspect-square w-full max-w-sm mx-auto flex items-center justify-center">
                           <span className="text-gray-500">Image</span>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold font-heading text-brand-dark mb-4">
                            Let's Talk! Hit the Button to Arrange a 1:1 Call with Logic-Unit Specialist
                        </h2>
                        <Link href="/contact" className="inline-block bg-brand-dark text-white hover:bg-brand-primary px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105 border border-slate-700 mt-4">
                            Schedule A Free Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LetsTalkCTA;
