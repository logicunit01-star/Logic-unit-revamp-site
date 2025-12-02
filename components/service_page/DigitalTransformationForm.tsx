import React from 'react';

const DigitalTransformationForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your submission!');
    };

    return (
        <section className="py-16 sm:py-24 bg-brand-bg-main">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-dark text-center mb-4">Start Your Digital Transformation Journey</h2>
                <p className="max-w-3xl mx-auto text-brand-dark/80 mb-12 text-center">
                    Tell us a bit about your business needs, and our team will get back to you with a tailored solution within 24 hours.
                </p>
                <div className="grid lg:grid-cols-2 gap-12 items-start bg-white p-8 rounded-lg shadow-lg">
                    <div className="bg-gray-200 rounded-lg aspect-[4/5] w-full h-full flex items-center justify-center">
                        <span className="text-gray-500">Image</span>
                    </div>
                    <div>
                         <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                             <div className="col-span-1"><input type="text" name="fullName" placeholder="Full Name*" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" /></div>
                             <div className="col-span-1"><input type="text" name="companyName" placeholder="Company Name*" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" /></div>
                             <div className="col-span-1"><input type="tel" name="phoneNumber" placeholder="Phone Number*" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" /></div>
                             <div className="col-span-1"><input type="email" name="businessEmail" placeholder="Business Email*" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" /></div>
                             <div className="col-span-1"><input type="text" name="industry" placeholder="Industry*" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" /></div>
                             <div className="col-span-1"><input type="text" name="deliveryModel" placeholder="Delivery model*" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" /></div>
                             <div className="col-span-2"><input type="text" name="projectType" placeholder="Project Type*" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" /></div>
                             <div className="col-span-2"><textarea name="description" placeholder="Describe Your Project or Goals" rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary"></textarea></div>
                             <div className="col-span-2"><div className="w-full p-8 border border-gray-300 rounded-md flex items-center justify-center bg-gray-100"><span className="text-gray-500">Captcha</span></div></div>
                             <div className="col-span-2"><button type="submit" className="w-auto bg-brand-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-primary transition-all duration-300 shadow-lg hover:scale-105 border border-slate-700">Submit Request</button></div>
                         </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalTransformationForm;