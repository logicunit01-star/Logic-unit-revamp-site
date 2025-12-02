'use client';


import React, { useState } from 'react';
import { AI_PAGE_FAQS } from '../../constants';

const AIFaq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2 block">Q&A</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark">Common Inquiries</h2>
                </div>
                <div className="divide-y divide-gray-200">
                    {AI_PAGE_FAQS.map((faq, index) => (
                        <div key={index} className="py-6 first:pt-0 last:pb-0">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center text-left group"
                            >
                                <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors">{faq.question}</h3>
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
        </section>
    );
};

export default AIFaq;

