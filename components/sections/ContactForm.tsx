'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface FormData {
    fullName: string;
    companyName: string;
    businessEmail: string;
    phoneNumber: string;
    industry: string;
    projectType: string;
    description: string;
}

interface FormErrors {
    fullName?: string;
    companyName?: string;
    businessEmail?: string;
    phoneNumber?: string;
    industry?: string;
    projectType?: string;
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

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        validateField(name, formData[name as keyof FormData]);
    };

    const validateField = (name: string, value: string) => {
        let error = '';

        switch (name) {
            case 'fullName':
                if (!value.trim()) error = 'Full name is required';
                else if (value.trim().length < 2) error = 'Name must be at least 2 characters';
                break;
            case 'companyName':
                if (!value.trim()) error = 'Company name is required';
                break;
            case 'businessEmail':
                if (!value.trim()) error = 'Business email is required';
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email format';
                break;
            case 'phoneNumber':
                if (value && value.replace(/\D/g, '').length < 10) error = 'Phone number must be at least 10 digits';
                break;
            case 'industry':
                if (!value) error = 'Please select an industry';
                break;
            case 'projectType':
                if (!value) error = 'Please select a project type';
                break;
        }

        setErrors(prev => ({ ...prev, [name]: error }));
        return error === '';
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        else if (formData.fullName.trim().length < 2) newErrors.fullName = 'Name must be at least 2 characters';

        if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';

        if (!formData.businessEmail.trim()) newErrors.businessEmail = 'Business email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
            newErrors.businessEmail = 'Invalid email format';
        }

        if (formData.phoneNumber && formData.phoneNumber.replace(/\D/g, '').length < 10) {
            newErrors.phoneNumber = 'Phone number must be at least 10 digits';
        }

        if (!formData.industry) newErrors.industry = 'Please select an industry';
        if (!formData.projectType) newErrors.projectType = 'Please select a project type';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            setTouched({
                fullName: true,
                companyName: true,
                businessEmail: true,
                phoneNumber: true,
                industry: true,
                projectType: true
            });
            return;
        }

        setIsSubmitting(true);

        try {
            // Strapi expects data to be wrapped in a "data" object
            const payload = {
                data: {
                    fullName: formData.fullName,
                    companyOrganization: formData.companyName,
                    businessEmail: formData.businessEmail,
                    phoneNumber: formData.phoneNumber,
                    industry: formData.industry,
                    projectType: formData.projectType,
                    description: formData.description
                }
            };

            console.log('Sending payload:', payload);

            const response = await fetch('/api/form-submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Submission failed:', errorData);
                throw new Error(errorData.error?.message || `Server Error: ${response.status}`);
            }

            const result = await response.json();
            console.log('Submission successful:', result);

            setSubmitSuccess(true);

            setTimeout(() => {
                setFormData({
                    fullName: '',
                    companyName: '',
                    businessEmail: '',
                    phoneNumber: '',
                    industry: '',
                    projectType: '',
                    description: ''
                });
                setSubmitSuccess(false);
                setTouched({});
            }, 3000);

        } catch (error: any) {
            console.error('Submission error:', error);
            // If the error message is long (like HTML), truncate it or show a summary
            const displayError = error.message.length > 200
                ? error.message.substring(0, 200) + '...'
                : error.message;
            alert(`Submission Failed: ${displayError}`);
        } finally {
            setIsSubmitting(false);
        }
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
                            Start Your Digital{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                                Transformation Today
                            </span>
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
                    <div className="lg:col-span-7 bg-brand-bg-secondary p-6 sm:p-8 md:p-12 rounded-xl border border-gray-100 shadow-2xl shadow-gray-200/50">
                        {submitSuccess && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <p className="text-green-800 font-medium">
                                    ✓ Thank you! A strategy consultant will contact you shortly.
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Row 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Full Name *"
                                        className={`block w-full px-0 py-3 text-brand-dark bg-transparent border-b-2 ${touched.fullName && errors.fullName ? 'border-red-500' : 'border-gray-300'
                                            } focus:outline-none focus:ring-0 focus:border-brand-primary placeholder:text-gray-500`}
                                    />
                                    {touched.fullName && errors.fullName && (
                                        <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Company / Organization *"
                                        className={`block w-full px-0 py-3 text-brand-dark bg-transparent border-b-2 ${touched.companyName && errors.companyName ? 'border-red-500' : 'border-gray-300'
                                            } focus:outline-none focus:ring-0 focus:border-brand-primary placeholder:text-gray-500`}
                                    />
                                    {touched.companyName && errors.companyName && (
                                        <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
                                    )}
                                </div>
                            </div>

                            {/* Row 2 - Email & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <input
                                        type="email"
                                        name="businessEmail"
                                        value={formData.businessEmail}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Business Email *"
                                        className={`block w-full px-0 py-3 text-brand-dark bg-transparent border-b-2 ${touched.businessEmail && errors.businessEmail ? 'border-red-500' : 'border-gray-300'
                                            } focus:outline-none focus:ring-0 focus:border-brand-primary placeholder:text-gray-500`}
                                    />
                                    {touched.businessEmail && errors.businessEmail && (
                                        <p className="mt-1 text-sm text-red-500">{errors.businessEmail}</p>
                                    )}
                                </div>

                                <div>
                                    <PhoneInput
                                        country={'us'}
                                        value={formData.phoneNumber}
                                        onChange={(phone) => setFormData(prev => ({ ...prev, phoneNumber: phone }))}
                                        onBlur={() => validateField('phoneNumber', formData.phoneNumber)}
                                        inputClass={`!w-full !h-[50px] !pl-12 !pr-0 !py-3 !border-t-0 !border-l-0 !border-r-0 !border-b-2 ${touched.phoneNumber && errors.phoneNumber ? '!border-red-500' : '!border-gray-300'} !bg-transparent !rounded-none focus:!border-brand-primary !text-brand-dark focus:!outline-none focus:!ring-0 !text-base`}
                                        containerClass="w-full"
                                        buttonStyle={{ border: 'none', background: 'transparent', paddingLeft: '0px', bottom: '2px' }}
                                        dropdownStyle={{ width: '300px' }}
                                        placeholder="Phone Number (Optional)"
                                        disableDropdown={false}
                                    />
                                    {touched.phoneNumber && errors.phoneNumber && (
                                        <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
                                    )}
                                </div>
                            </div>

                            {/* Row 4 - Select */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <select
                                        id="industry"
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`block w-full px-0 py-3 bg-transparent border-b-2 ${touched.industry && errors.industry ? 'border-red-500' : 'border-gray-300'
                                            } appearance-none focus:outline-none focus:ring-0 focus:border-brand-primary ${formData.industry ? 'text-brand-dark' : 'text-gray-500'
                                            }`}
                                    >
                                        <option value="" disabled>
                                            Select Industry *
                                        </option>
                                        <option value="Healthcare">Healthcare</option>
                                        <option value="Financial Services">Financial Services</option>
                                        <option value="Retail & Logistics">Retail & Logistics</option>
                                        <option value="Energy & Manufacturing">Energy & Manufacturing</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {touched.industry && errors.industry && (
                                        <p className="mt-1 text-sm text-red-500">{errors.industry}</p>
                                    )}
                                </div>

                                <div>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`block w-full px-0 py-3 bg-transparent border-b-2 ${touched.projectType && errors.projectType ? 'border-red-500' : 'border-gray-300'
                                            } appearance-none focus:outline-none focus:ring-0 focus:border-brand-primary ${formData.projectType ? 'text-brand-dark' : 'text-gray-500'
                                            }`}
                                    >
                                        <option value="" disabled>
                                            Select Project Type *
                                        </option>
                                        <option value="Strategic Consulting">Strategic Consulting</option>
                                        <option value="Enterprise Development">Enterprise Development</option>
                                        <option value="AI & Automation">AI & Automation</option>
                                        <option value="Team Augmentation">Team Augmentation</option>
                                    </select>
                                    {touched.projectType && errors.projectType && (
                                        <p className="mt-1 text-sm text-red-500">{errors.projectType}</p>
                                    )}
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
                                    placeholder="Project Brief or Key Objectives..."
                                    className="block w-full px-0 py-3 text-brand-dark bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-primary peer resize-none placeholder:text-gray-500"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full md:w-auto bg-brand-dark text-white hover:bg-brand-primary px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
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