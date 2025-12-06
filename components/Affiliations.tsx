
import React, { useState } from 'react';

const Affiliations: React.FC = () => {
  const [hcpcError, setHcpcError] = useState(false);
  const [cspError, setCspError] = useState(false);

  return (
    <section className="py-10 bg-slate-50 border-t border-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Proud Professional Memberships
        </h3>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 opacity-70 hover:opacity-100 transition-opacity duration-300">
            
            {/* HCPC Link */}
            <a 
                href="https://www.hcpc-uk.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-center transition-transform hover:scale-105"
                aria-label="Visit HCPC Website"
            >
                <div className="h-16 flex items-center">
                    {!hcpcError ? (
                        <img 
                            src="/hcpc-logo.jpg" 
                            alt="HCPC Logo" 
                            className="h-40 w-60 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                            onError={() => setHcpcError(true)}
                        />
                    ) : (
                        /* Custom SVG representation of HCPC Logo (Fallback) */
                        <svg height="50" viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg" className="fill-gray-600 group-hover:fill-[#005eb8] transition-colors duration-300">
                                <text x="0" y="45" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="48" letterSpacing="-1">hcpc</text>
                                <g transform="translate(110, 12)">
                                    <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="12">health &amp; care</text>
                                    <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="12">professions</text>
                                    <text x="0" y="38" fontFamily="Arial, sans-serif" fontSize="12">council</text>
                                </g>
                                <rect x="105" y="10" width="1" height="40" className="fill-gray-300" />
                        </svg>
                    )}
                </div>
            </a>

            {/* CSP Link */}
            <a 
                href="https://www.csp.org.uk/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-center transition-transform hover:scale-105"
                aria-label="Visit CSP Website"
            >
                 <div className="h-16 flex items-center">
                    {!cspError ? (
                        <img 
                            src="/csp-logo.jpg" 
                            alt="CSP Logo" 
                            className="h-40 w-60 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                            onError={() => setCspError(true)}
                        />
                    ) : (
                        /* Custom SVG representation of CSP Logo (Fallback) */
                        <svg height="55" viewBox="0 0 280 60" xmlns="http://www.w3.org/2000/svg" className="fill-gray-600 group-hover:fill-[#2d2e83] transition-colors duration-300">
                            {/* Abstract symbol */}
                            <path d="M10 10 L30 50 L50 10" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                            
                            <text x="65" y="45" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="42">CSP</text>
                            <g transform="translate(160, 12)">
                                <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="11" letterSpacing="0.5">CHARTERED</text>
                                <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="11" letterSpacing="0.5">SOCIETY OF</text>
                                <text x="0" y="38" fontFamily="Arial, sans-serif" fontSize="11" letterSpacing="0.5">PHYSIOTHERAPY</text>
                            </g>
                            <rect x="155" y="10" width="1" height="40" className="fill-gray-300" />
                        </svg>
                    )}
                 </div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
