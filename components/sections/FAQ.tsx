
import React, { useState } from 'react';
import Link from 'next/link';
import { FAQS } from '@/constants';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-brand-bg-main py-24 border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2 block">Support</span>
                        <h2 className="text-4xl font-bold font-heading text-brand-dark mb-8 leading-tight">Operational <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Queries</span></h2>
                        <p className="text-brand-gray mb-8">
                            Common questions regarding our engagement models, security protocols, and delivery methodology.
                        </p>
                        <Link href="/contact" className="text-brand-primary font-bold border-b border-brand-primary/30 hover:border-brand-primary transition-colors pb-0.5">
                            Contact Support →
                        </Link>
                    </div>

                    <div className="md:col-span-8">
                        <div className="divide-y divide-gray-200">
                            {FAQS.map((faq, index) => (
                                <div key={index} className="py-6 first:pt-0 last:pb-0">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex justify-between items-center text-left group"
                                    >
                                        <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors pr-8">{faq.question}</h3>
                                        <span className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-brand-primary transition-all duration-300 ${openIndex === index ? 'bg-brand-primary text-white rotate-180 border-brand-primary' : 'bg-white'}`}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </span>
                                    </button>
                                    <div
                                        className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="text-brand-gray leading-relaxed text-base pr-12">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
