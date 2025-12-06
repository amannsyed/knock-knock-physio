
import React, { useState } from 'react';
import { EMAIL_ADDRESS } from '../constants';

interface FooterProps {
    onBookClick: () => void;
    isAdmin: boolean;
    onAdminClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onBookClick, isAdmin, onAdminClick }) => {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAdminToggle = (e: React.MouseEvent) => {
      e.preventDefault();
      onAdminClick();
  };

  return (
    <footer className="bg-secondary text-light">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            {/* Footer Logo */}
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                <div className="relative flex items-center justify-center w-40 h-40 bg-white rounded-lg overflow-hidden shrink-0">
                    {!logoError ? (
                        <img 
                            src="/footer-logo.jpg" 
                            alt="Knock Knock Physio Logo" 
                            className="w-full h-full object-contain"
                            onError={() => setLogoError(true)}
                        />
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-full w-full" fill="none">
                            <defs>
                                <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#0D9488" />
                                    <stop offset="100%" stopColor="#0F766E" />
                                </linearGradient>
                            </defs>
                            <path 
                                d="M 50 5 L 85 35 V 60 C 85 75 50 95 50 95 C 50 95 15 75 15 60 V 35 Z" 
                                fill="url(#footerLogoGradient)" 
                                stroke="white" 
                                strokeWidth="2"
                                strokeLinejoin="round"
                            />
                            <path d="M 50 35 V 65 M 35 50 H 65" stroke="white" strokeWidth="8" strokeLinecap="round" />
                        </svg>
                    )}
                </div>
            </div>
            
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                    href="#home" 
                    onClick={(e) => handleScroll(e, 'home')}
                    className="text-slate-300 hover:text-white hover:underline transition-colors block cursor-pointer"
                >
                    Home
                </a>
              </li>
              <li>
                <a 
                    href="#services" 
                    onClick={(e) => handleScroll(e, 'services')}
                    className="text-slate-300 hover:text-white hover:underline transition-colors block cursor-pointer"
                >
                    Services
                </a>
              </li>
              <li>
                <a 
                    href="#about" 
                    onClick={(e) => handleScroll(e, 'about')}
                    className="text-slate-300 hover:text-white hover:underline transition-colors block cursor-pointer"
                >
                    About
                </a>
              </li>
              <li>
                <a 
                    href="#faq" 
                    onClick={(e) => handleScroll(e, 'faq')}
                    className="text-slate-300 hover:text-white hover:underline transition-colors block cursor-pointer"
                >
                    FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Book Now</h3>
             <button 
                onClick={onBookClick}
                className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-focus transition-colors duration-300"
            >
                Book an Appointment
            </button>
            <div className="mt-4 text-slate-300 space-y-2">
                <p>Contact us today to start your recovery journey.</p>
                <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                   </svg>
                   <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white transition-colors">
                       {EMAIL_ADDRESS}
                   </a>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-500 pt-6 text-center text-slate-400 flex flex-col items-center">
          <p>&copy; {currentYear} Knock Knock Physio. All Rights Reserved.</p>
          <button 
            onClick={handleAdminToggle}
            className="text-xs text-slate-400 hover:text-white hover:underline mt-4 cursor-pointer focus:outline-none transition-colors"
          >
              {isAdmin ? 'Admin Logout' : 'Admin Login'}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
