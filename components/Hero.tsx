
import React, { useState } from 'react';

interface HeroProps {
    onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  // State to manage image source with fallback
  const [imgSrc, setImgSrc] = useState('/hero-image.jpg');

  return (
    <section id="home" className="bg-white scroll-mt-28 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Headline & Image */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Title Group */}
            <div className="text-center lg:text-left">
                <div className="inline-block px-4 py-1.5 mb-4 bg-primary/10 text-primary-focus font-semibold rounded-full text-xs md:text-sm uppercase tracking-wider">
                  Home Physiotherapy Treatment
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Welcome to <br />
                  <span className="text-primary">Knock Knock Physio</span>
                </h1>
            </div>

            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group w-full">
                <img 
                    src={imgSrc} 
                    onError={() => setImgSrc("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")}
                    alt="Physiotherapist treating patient at home" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 aspect-[4/3]"
                />
                 {/* Floating Badge */}
                 <div className="hidden md:flex absolute bottom-6 left-6 bg-white/95 backdrop-blur shadow-lg rounded-xl p-3 items-center gap-3 border border-gray-100 animate-float">
                    <div className="bg-green-100 p-2 rounded-full">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    {/*
                    <div>
                        <p className="font-bold text-gray-800 text-xs">Patient Satisfaction</p>
                       <div className="flex text-yellow-400 text-xs mt-0.5 gap-0.5">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                    </div>
                   */}
                </div>
            </div>
          </div>

          {/* Right Column - Content & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pt-4">
             
             <p className="text-2xl text-gray-800 font-medium leading-relaxed mb-6 text-center lg:text-left">
                We bring expert physiotherapy directly to your doorstep.
             </p>

             <div className="text-gray-600 text-lg leading-relaxed mb-8 space-y-4 text-center lg:text-left">
                 <p>
                    At <strong className="text-primary-focus">Knock Knock Physio</strong>, our goal is to make high-quality rehabilitation convenient, accessible, and comfortable by delivering professional physiotherapy sessions <strong>in your own home</strong>.
                 </p>
                 <p>
                    Whether you are recovering from surgery, managing chronic pain, healing from injury, or working to improve mobility, our experienced physiotherapists provide personalised, evidence-based treatment tailored to your needs.
                 </p>
             </div>

             {/* Taglines / Features List */}
             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                    "Physiotherapy at Your Doorstep",
                    "Expert Care Without Clinic Visits",
                    "Healing Starts at Home",
                    "Your Recovery, Our Visit"
                ].map((tag, i) => (
                    <li key={i} className="flex items-center gap-3 justify-center lg:justify-start bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-primary/20 transition-colors">
                         <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                         </div>
                        <span className="text-gray-700 font-medium text-sm">{tag}</span>
                    </li>
                ))}
             </ul>

             <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary p-6 mb-8 rounded-r-lg italic text-gray-700 text-center lg:text-left">
                "Your recovery begins with a knock at the door — and expert care that comes to you."
             </div>

             <div className="flex flex-col sm:flex-row gap-6 items-center lg:justify-start justify-center">
                <button
                    onClick={onBookClick}
                    className="bg-primary text-white text-lg font-bold px-10 py-4 rounded-full hover:bg-primary-focus transition-all duration-300 shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1"
                >
                    Book Appointment
                </button>
                
                {/* Trust Indicators */}
                <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                    <div className="flex items-center gap-1.5">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        HCPC Registered
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="flex items-center gap-1.5">
                         <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        Fully Insured
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
