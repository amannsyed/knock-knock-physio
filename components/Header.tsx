
import React, { useState } from 'react';

const Logo: React.FC = () => {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex items-center gap-3 cursor-pointer group">
        <div className="relative flex items-center justify-center w-20 h-24 bg-white rounded-xl transition-all duration-300 transform group-hover:-translate-y-0.5">
            {!useFallback ? (
                <img 
                    src="/main-logo.jpg" 
                    alt="Knock Knock Physio Logo" 
                    className="w-full h-full object-contain rounded-xl"
                    onError={() => setUseFallback(true)}
                />
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-16 w-16 drop-shadow-md" fill="none">
                    <defs>
                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0D9488" />
                            <stop offset="100%" stopColor="#0F766E" />
                        </linearGradient>
                    </defs>
                    
                    {/* Shadow/Grounding */}
                    <ellipse cx="50" cy="92" rx="20" ry="4" fill="#000" fillOpacity="0.15" />

                    {/* House-Pin Shape */}
                    <path 
                        d="M 50 5 
                        L 85 35 
                        V 60 
                        C 85 75 50 95 50 95 
                        C 50 95 15 75 15 60 
                        V 35 
                        Z" 
                        fill="url(#logoGradient)" 
                        stroke="white" 
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    
                    {/* Medical Cross (Negative Space) */}
                    <path 
                        d="M 50 35 V 65 M 35 50 H 65" 
                        stroke="white" 
                        strokeWidth="8" 
                        strokeLinecap="round" 
                    />
                </svg>
            )}
        </div>
        <span className="text-3xl font-bold text-gray-800 tracking-tight">
        Knock Knock <span className="text-primary">Physio</span>
        <span className="block mt-0 leading-tight text-sm text-zinc-green-600 font-semibold">Where Every Knock Lead to Healing</span>
        </span>
    </a>
  );
};

interface NavLinksProps {
    className?: string;
    onLinkClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({className, onLinkClick}) => {
    const links = ['Home', 'Services', 'About', 'Contact'];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            if (onLinkClick) {
                onLinkClick();
            }
        }
    };

    return (
        <ul className={`flex items-center space-x-8 ${className}`}>
            {links.map(link => (
                <li key={link}>
                    <a 
                        href={`#${link.toLowerCase()}`} 
                        onClick={(e) => handleScroll(e, link.toLowerCase())}
                        className="text-secondary hover:text-primary transition-colors duration-300 font-medium cursor-pointer"
                    >
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    )
};

interface HeaderProps {
    onBookClick: () => void;
    isAdmin?: boolean;
    onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookClick, isAdmin = false, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        
        {isAdmin ? (
            <div className="flex items-center gap-4">
                <span className="text-sm font-semibold bg-red-100 text-red-600 px-3 py-1 rounded-full">Admin Mode</span>
                <button 
                    onClick={onLogout}
                    className="text-secondary hover:text-red-500 font-medium transition-colors"
                >
                    Logout
                </button>
            </div>
        ) : (
            <>
                <nav className="hidden md:flex items-center space-x-8">
                    <NavLinks />
                    <button 
                        onClick={onBookClick}
                        className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-focus transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Book Now
                    </button>
                </nav>
                <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                                    />
                                </svg>
                            </button>
                </div>
            </>
        )}
      </div>
      
      {isOpen && !isAdmin && (
        <div className="md:hidden bg-white px-6 pb-6 border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col items-center space-y-6 pt-6">
            <NavLinks className="flex-col !space-x-0 space-y-4" onLinkClick={() => setIsOpen(false)}/>
             <button 
                onClick={() => {
                    setIsOpen(false);
                    onBookClick();
                }}
                className="w-full text-center bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-focus transition-colors duration-300 font-semibold shadow-md"
            >
                Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
