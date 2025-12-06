
import React from 'react';

const HeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* CSS Styles for internal SVG animations */}
      <style>{`
        @keyframes armMove {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes legLift {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-3deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        .animate-arm { transform-origin: 180px 220px; animation: armMove 3s ease-in-out infinite; }
        .animate-leg { transform-origin: 300px 300px; animation: legLift 4s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>

      <svg viewBox="0 0 500 400" className="w-full h-auto drop-shadow-xl animate-float" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Background Elements */}
        <circle cx="250" cy="200" r="180" className="fill-primary animate-pulse-slow" />
        <circle cx="100" cy="100" r="20" className="fill-accent opacity-20 animate-bounce" style={{ animationDuration: '3s' }} />
        <circle cx="400" cy="80" r="15" className="fill-white opacity-30 animate-bounce" style={{ animationDuration: '4s' }} />
        
        {/* Floor/Mat */}
        <ellipse cx="250" cy="360" rx="200" ry="20" className="fill-black opacity-10" />
        <rect x="80" y="330" width="340" height="15" rx="5" className="fill-teal-800" /> {/* Mat */}

        {/* --- PATIENT (Lying Down) --- */}
        <g id="patient">
          {/* Left Leg (Stationary) */}
          <path d="M 150 330 L 280 330" stroke="#94A3B8" strokeWidth="25" strokeLinecap="round" />
          
          {/* Right Leg (Animated) */}
          <g className="animate-leg">
            <path d="M 150 330 L 290 310" stroke="#CBD5E1" strokeWidth="25" strokeLinecap="round" />
            <path d="M 290 310 L 300 290" stroke="#F59E0B" strokeWidth="25" strokeLinecap="round" /> {/* Shoe/Foot */}
          </g>

          {/* Torso */}
          <rect x="80" y="295" width="140" height="40" rx="10" fill="#60A5FA" />
          
          {/* Head */}
          <circle cx="70" cy="305" r="25" fill="#FDBA74" />
          <path d="M 55 295 Q 70 315 85 295" stroke="#000" strokeWidth="2" fill="none" opacity="0.1" /> {/* Smile */}
        </g>

        {/* --- PHYSIO (Kneeling/Crouching) --- */}
        <g id="physio" transform="translate(260, 160)">
            {/* Back Leg */}
            <path d="M 60 140 L 40 190" stroke="#0F766E" strokeWidth="28" strokeLinecap="round" />

            {/* Body */}
            <path d="M 20 60 L 20 150 L 70 150 L 80 80 Z" fill="#FFFFFF" />
            
            {/* Front Leg */}
            <path d="M 70 140 L 90 190" stroke="#0D9488" strokeWidth="28" strokeLinecap="round" />

            {/* Head */}
            <circle cx="50" cy="40" r="28" fill="#FDBA74" />
            <path d="M 30 25 Q 50 10 70 25" stroke="#475569" strokeWidth="8" fill="none" /> {/* Hair */}

            {/* Arms (Animated) */}
            <g className="animate-arm">
                <path d="M 40 70 L 10 120" stroke="#FDBA74" strokeWidth="18" strokeLinecap="round" /> {/* Arm Skin */}
                <path d="M 40 70 L 25 95" stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round" /> {/* Sleeve */}
            </g>
        </g>

        {/* Equipment: Exercise Ball */}
        <circle cx="420" cy="300" r="50" className="fill-accent opacity-90" />
        <path d="M 380 300 Q 420 320 460 300" stroke="white" strokeWidth="3" fill="none" opacity="0.3" />
        <path d="M 380 280 Q 420 300 460 280" stroke="white" strokeWidth="3" fill="none" opacity="0.3" />

      </svg>
    </div>
  );
};

export default HeroIllustration;
