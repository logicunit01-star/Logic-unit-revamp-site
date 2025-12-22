'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Link from 'next/link';

interface ApplicationFormData {
    fullName: string;
    email: string;
    phoneNumber: string;
    linkedinProfile: string;
    coverLetter: string;
    resume: File | null;
}

interface ApplicationFormProps {
    jobTitle?: string;
}

const CareerApplicationForm: React.FC<ApplicationFormProps> = ({ jobTitle }) => {
    const isGeneral = !jobTitle;
    const [formData, setFormData] = useState<ApplicationFormData>({
        fullName: '',
        email: '',
        phoneNumber: '',
        linkedinProfile: '',
        coverLetter: '',
        resume: null
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg('');

        try {
            // Upload Logic (Mock or Real)
            let uploadedFileId = null;
            if (formData.resume) {
                const uploadData = new FormData();
                uploadData.append('files', formData.resume);

                // Assuming public upload
                try {
                    const uploadRes = await fetch('https://backend.logic-unit.com/api/upload', {
                        method: 'POST',
                        body: uploadData,
                    });
                    if (uploadRes.ok) {
                        const uploadJson = await uploadRes.json();
                        if (Array.isArray(uploadJson) && uploadJson.length > 0) uploadedFileId = uploadJson[0].id;
                    }
                } catch (err) {
                    console.warn("Upload failed, proceeding with form data only", err);
                }
            }

            const payload = {
                data: {
                    type: 'Job Application',
                    position: jobTitle || 'General Application',
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phoneNumber,
                    linkedin: formData.linkedinProfile,
                    details: formData.coverLetter,
                    resumeFile: uploadedFileId
                }
            };

            const response = await fetch('/api/form-submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error("Submission failed");

            setSubmitSuccess(true);
            setFormData({ fullName: '', email: '', phoneNumber: '', linkedinProfile: '', coverLetter: '', resume: null });
        } catch (error: any) {
            setErrorMsg(error.message || 'Something went wrong');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Style classes to match ContactForm
    const inputClasses = "block w-full px-0 py-3 text-brand-dark bg-transparent border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-brand-primary placeholder:text-gray-500 transition-colors";

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column - Context */}
                    <div className="lg:col-span-5">
                        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">
                            {isGeneral ? 'Talent Network' : 'Join The Team'}
                        </div>
                        <h2 className="text-4xl font-bold font-heading text-brand-dark mb-8 leading-tight">
                            {isGeneral ? "Start Your Journey" : "Apply for "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                                {isGeneral ? " With Us" : ` ${jobTitle}`}
                            </span>
                        </h2>
                        <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                            {isGeneral
                                ? "Logic-unit is a place where exceptional people solve complex problems. Even if you don't see a role now, we're always interested in meeting talented architects, engineers, and visionaries."
                                : "You're taking the first step towards building the future of enterprise technology. We appreciate your interest and look forward to reviewing your qualifications."}
                        </p>

                        <div className="space-y-6 mt-12 border-t border-gray-100 pt-8">
                            <div>
                                <h4 className="font-bold text-brand-dark mb-1">Recruitment Process</h4>
                                <p className="text-brand-gray text-sm">Review &rarr; Introduction &rarr; Technical Assessment &rarr; Offer</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-dark mb-1">Questions?</h4>
                                <p className="text-brand-gray">careers@logic-unit.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:col-span-7 bg-brand-bg-secondary p-8 md:p-12 rounded-xl border border-gray-100 shadow-2xl shadow-gray-200/50">
                        {submitSuccess ? (
                            <div className="text-center py-10">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-brand-dark mb-4">Application Submitted!</h3>
                                <p className="text-brand-gray mb-8">Thank you for your interest. We'll be in touch shortly.</p>
                                <button onClick={() => setSubmitSuccess(false)} className="text-brand-primary font-bold border-b border-brand-primary">Send another application</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {errorMsg && <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">{errorMsg}</div>}

                                <div className="grid md:grid-cols-2 gap-8">
                                    <input
                                        required
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Full Name *"
                                        className={inputClasses}
                                    />
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address *"
                                        className={inputClasses}
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="phone-input-underline">
                                        <PhoneInput
                                            country={'us'}
                                            value={formData.phoneNumber}
                                            onChange={(phone) => setFormData(prev => ({ ...prev, phoneNumber: phone }))}
                                            inputClass="!w-full !px-0 !py-3 !text-brand-dark !bg-transparent !border-t-0 !border-x-0 !border-b-2 !border-gray-300 !rounded-none focus:!border-brand-primary !text-base focus:!ring-0 !outline-none"
                                            buttonClass="!bg-transparent !border-0 !px-0"
                                            dropdownClass="!shadow-lg !border-gray-100"
                                            containerClass="!w-full"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <input
                                        type="url"
                                        name="linkedinProfile"
                                        value={formData.linkedinProfile}
                                        onChange={handleChange}
                                        placeholder="LinkedIn URL"
                                        className={inputClasses}
                                    />
                                </div>

                                {/* File Upload Custom Style */}
                                <div className="relative group">
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Resume / CV *</label>
                                    <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center transition-all duration-300 hover:border-brand-primary hover:bg-white/50 cursor-pointer group-hover:shadow-md">
                                        <input
                                            required
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        />
                                        <div className="flex flex-col items-center gap-3">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${formData.resume ? 'bg-brand-primary/10 text-brand-primary' : 'bg-gray-100 text-gray-400 group-hover:text-brand-primary'}`}>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                            </div>
                                            {formData.resume ? (
                                                <div>
                                                    <p className="font-bold text-brand-dark text-sm">{formData.resume.name}</p>
                                                    <p className="text-xs text-green-600 mt-1">Ready to upload</p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="font-bold text-brand-gray group-hover:text-brand-dark transition-colors text-sm">Drop your resume here</p>
                                                    <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (Max 10MB)</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <textarea
                                        name="coverLetter"
                                        rows={3}
                                        value={formData.coverLetter}
                                        onChange={handleChange}
                                        placeholder="Cover Letter / Message (Optional)"
                                        className={`${inputClasses} resize-none`}
                                    />
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full md:w-auto px-10 py-4 bg-brand-dark text-white font-bold rounded-full shadow-lg hover:bg-brand-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                                    >
                                        {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerApplicationForm;
