
import React, { useState } from 'react';
import type { Service } from '../types';

const MusculoskeletalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        {/* Spine representation */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-4-14h8m-8 4h8m-8 4h8m-8 4h8" />
    </svg>
);

const SurgicalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        {/* Crutch */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m-7.5-7.5l-6 6m7.5 1.5l-6 6m0-7.5L3 21" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12l3-3M3 21l3-3" />
        {/* Medical Cross hint */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 4h2v2h-2z" />
    </svg>
);

const ElderlyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        {/* Person with cane */}
        <circle cx="10" cy="7" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 13l1.5 8m-5-8l-3 9M8 13c0-3 2-5 5-5h1l2.5 7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 21l.5-8-1-2" />
    </svg>
);

const NeuroIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        {/* Brain */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const PainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        {/* Joint/Knee with protection/relief circle */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l2-2m-2 2l-2-2" />
    </svg>
);

const StrengthIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
         {/* Person stretching/moving */}
         <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M10 10v4" />
    </svg>
);

interface ServiceIconProps {
    src: string;
    Fallback: React.ComponentType;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ src, Fallback }) => {
    const [error, setError] = useState(false);

    if (error) {
        return <Fallback />;
    }

    return (
        <img 
            src={src} 
            alt="Service Icon" 
            className="h-16 w-16 object-contain"
            onError={() => setError(true)}
        />
    );
};

const services: Service[] = [
  {
    icon: <ServiceIcon src="/elder-logo.jpg" Fallback={ElderlyIcon} />,
    title: 'Elderly Rehabilitation',
    description: 'Mobility training, fall prevention, balance work, strength improvement, and pain management.',
  },
  {
    icon: <ServiceIcon src="/muscul-logo.jpg" Fallback={MusculoskeletalIcon} />,
    title: 'Musculoskeletal Physiotherapy',
    description: 'Treatment for neck pain, back pain, joint stiffness, sports injuries, and muscle strains.',
  },
  {
    icon: <ServiceIcon src="/strength-logo.jpg" Fallback={StrengthIcon} />,
    title: 'Strength & Mobility Therapy',
    description: 'Posture correction, flexibility training, strengthening exercises, and functional movement recovery.',
  },
  {
    icon: <ServiceIcon src="/pain-logo.jpg" Fallback={PainIcon} />,
    title: 'Pain Management',
    description: 'Treatment for arthritis, sciatica, chronic pain, and muscle/joint discomfort.',
  },
  {
    icon: <ServiceIcon src="/neuro-logo.jpg" Fallback={NeuroIcon} />,
    title: 'Neurological Physiotherapy',
    description: 'Stroke recovery, Parkinson\'s support, nerve injury rehabilitation, coordination therapy.',
  },
  {
    icon: <ServiceIcon src="/post-logo.jpg" Fallback={SurgicalIcon} />,
    title: 'Post-Surgical Rehabilitation',
    description: 'Recovery programs for knee replacement, hip replacement, spinal surgery, and orthopedic procedures.',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group border border-gray-50 h-full">
    <div className="mb-6 bg-primary/5 p-4 rounded-full group-hover:bg-primary/10 transition-colors shrink-0">
        {service.icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
    <p className="text-secondary leading-relaxed">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 scroll-mt-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">
            Comprehensive care tailored to your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
