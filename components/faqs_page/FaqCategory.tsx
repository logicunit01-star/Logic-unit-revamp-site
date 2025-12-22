'use client';

import React, { useState } from 'react';

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqCategoryProps {
    title: string;
    description?: string;
    faqs: FaqItem[];
    id?: string;
}

const FaqCategory: React.FC<FaqCategoryProps> = ({ title, description, faqs, id }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id={id} className="py-12 border-b border-gray-100 last:border-0 scroll-mt-24">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                <div className="md:col-span-4">
                    <h3 className="text-2xl font-bold font-heading text-brand-dark mb-4">{title}</h3>
                    {description && (
                        <p className="text-brand-gray text-base leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
                <div className="md:col-span-8">
                    <div className="divide-y divide-gray-100 bg-white rounded-2xl border border-gray-100 px-6 sm:px-8 shadow-sm">
                        {faqs.map((faq, index) => (
                            <div key={index} className="py-6 first:pt-8 last:pb-8">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-start text-left group"
                                >
                                    <h4 className={`text-lg font-bold pr-8 transition-colors duration-300 ${openIndex === index ? 'text-brand-primary' : 'text-brand-dark group-hover:text-brand-primary'}`}>
                                        {faq.question}
                                    </h4>
                                    <span className={`flex-shrink-0 mt-1 w-6 h-6 flex items-center justify-center rounded-full border transition-all duration-300 ${openIndex === index ? 'bg-brand-primary border-brand-primary text-white rotate-180' : 'bg-transparent border-gray-300 text-gray-400 group-hover:border-brand-primary group-hover:text-brand-primary'}`}>
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-brand-gray leading-relaxed text-base">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqCategory;
