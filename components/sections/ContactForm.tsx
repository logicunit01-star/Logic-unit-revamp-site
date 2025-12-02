'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import InputField from '../contact_form_field/InputField';

interface FormData {
    fullName: string;
    companyName: string;
    businessEmail: string;
    phoneNumber: string;
    industry: string;
    projectType: string;
    description: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        companyName: '',
        businessEmail: '',
        phoneNumber: '',
        industry: '',
        projectType: '',
        description: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert('Thank you for your submission. A strategy consultant will contact you shortly.');
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    {/* Context Column */}
                    <div className="lg:col-span-5">
                        <h4 className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">
                            Engagement
                        </h4>
                        <h2 className="text-4xl font-bold font-heading text-brand-dark mb-8 leading-tight">
                            Start Your Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Transformation Today</span>
                        </h2>
                        <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                            As a leading custom software development company, Logic-unit is ready to deliver strategic audits, full-scale platform builds, or AI roadmaps tailored to your business. Connect with us to engineer your solution.
                        </p>

                        <div className="space-y-6 mt-12 border-t border-gray-100 pt-8">
                            <div>
                                <h4 className="font-bold text-brand-dark mb-1">Global Headquarters</h4>
                                <p className="text-brand-gray">8190 FM 1960 Rd W, Houston, TX 77070</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-dark mb-1">General Inquiries</h4>
                                <p className="text-brand-gray">info@logic-unit.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="lg:col-span-7 bg-brand-bg-secondary p-8 md:p-12 rounded-xl border border-gray-100 shadow-2xl shadow-gray-200/50">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Row 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <InputField
                                    name="fullName"
                                    label="Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                                <InputField
                                    name="businessEmail"
                                    label="Business Email"
                                    type="email"
                                    value={formData.businessEmail}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <InputField
                                    name="companyName"
                                    label="Company / Organization"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                                <InputField
                                    name="phoneNumber"
                                    label="Phone Number (Optional)"
                                    type="tel"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Row 3: Floating Label Selects */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <select
                                        id="industry"
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        className="block w-full px-0 py-3 text-brand-dark bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-primary peer"
                                    >
                                        <option value="" disabled hidden>
                                            Select Industry
                                        </option>

                                        <option value="Healthcare">Healthcare</option>
                                        <option value="Financial Services">Financial Services</option>
                                        <option value="Retail & Logistics">Retail & Logistics</option>
                                        <option value="Energy & Manufacturing">Energy & Manufacturing</option>
                                        <option value="Other">Other</option>
                                    </select>

                                    <label
                                        htmlFor="industry"
                                        className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Select Industry
                                    </label>
                                </div>

                                <div className="relative">
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        className="peer block w-full px-0 py-3 text-brand-dark bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-primary"
                                    >
                                        <option value="" disabled hidden>
                                            Select Project Type
                                        </option>

                                        <option value="Strategic Consulting">Strategic Consulting</option>
                                        <option value="Enterprise Development">Enterprise Development</option>
                                        <option value="AI & Automation">AI & Automation</option>
                                        <option value="Team Augmentation">Team Augmentation</option>
                                    </select>

                                    <label
                                        htmlFor="projectType"
                                        className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Engagement Type
                                    </label>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="relative mt-4">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                    onChange={handleChange}
                                    value={formData.description}
                                    placeholder=" "
                                    className="block w-full px-0 py-3 text-brand-dark bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-primary peer resize-none"
                                />
                                <label
                                    htmlFor="description"
                                    className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Project Brief or Key Objectives
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full md:w-auto bg-brand-dark text-white hover:bg-brand-primary px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                                >
                                    Submit Request
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
