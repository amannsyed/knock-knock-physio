
import React, { useState } from 'react';
import { EMAIL_ADDRESS, UK_PHONE_NUMBER, WHATSAPP_URL } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email body
    const subject = `Enquiry from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`;

    // Open mailto link
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">
            Have a question or need more information? Fill out the form below or reach out to us directly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info & Text */}
          <div className="lg:w-5/12 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Email Us</p>
                            <a href={`mailto:${EMAIL_ADDRESS}`} className="text-secondary hover:text-primary transition-colors">
                                {EMAIL_ADDRESS}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Call or WhatsApp</p>
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors block">
                                +{UK_PHONE_NUMBER}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Areas Covered</p>
                            <p className="text-secondary">
                                Edinburgh, Midlothian, East Lothian, West Lothian and Glasgow.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-7/12">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow"
                            placeholder="07123 456789"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow"
                        placeholder="john@example.com"
                    />
                </div>

                <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow"
                        placeholder="How can we help you?"
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-focus transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                    Send Message
                </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
