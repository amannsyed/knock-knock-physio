
import React, { useState } from 'react';

const About: React.FC = () => {
  // State to manage image source with fallback
  const [imgSrc, setImgSrc] = useState('/about-image.jpg');

  return (
    <section id="about" className="py-20 scroll-mt-28 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
           <p className="text-secondary max-w-2xl mx-auto">Professional healthcare, delivered with convenience.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          {/* Image Section */}
          <div className="md:auto relative">
            <div className="relative rounded-2xl w-80 h-100 overflow-hidden shadow-2xl border-4 border-white group">
                <img 
                    src={imgSrc} 
                    onError={() => setImgSrc("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")}
                    alt="Physiotherapist with patient" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 aspect-[3/4]"
                />
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-7/16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional & Convenient</h3>
            
            <div className="prose prose-lg text-secondary mb-8 leading-relaxed">
              <p className="mb-4">
                At <span className="font-semibold text-gray-800">Knock Knock Physio</span>, we believe excellent healthcare should be both professional and convenient.
              </p>
              <p className="mb-4">
                Our mobile physiotherapy service removes the burden of clinic visits — making treatment accessible for post-surgical patients, elderly individuals, busy professionals, and anyone experiencing pain or mobility challenges.
              </p>
              <p className="mb-4">
                Using proven physiotherapy techniques and customised rehabilitation programs, we aim to relieve pain, restore movement, and help our patients regain confidence and independence.
              </p>
              <p className="font-medium text-primary text-xl">
                 Compassion, expertise, and patient-centred care define everything we do.
              </p>
            </div>

            {/* Qualifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-primary/30 transition-colors">
                    <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="font-medium text-gray-700">HCPC Registered</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-primary/30 transition-colors">
                    <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    <span className="font-medium text-gray-700">CSP Member</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
