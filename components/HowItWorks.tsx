
import React from 'react';
import type { Step } from '../types';

const steps: Step[] = [
  {
    step: 1,
    title: 'Book Your Visit',
    description: 'Call, WhatsApp, or complete our online booking form.',
  },
  {
    step: 2,
    title: 'Home Assessment',
    description: 'A full evaluation in the comfort of your home.',
  },
  {
    step: 3,
    title: 'Personal Treatment Plan',
    description: 'Tailored therapy plan developed specifically for your condition and goals.',
  },
  {
    step: 4,
    title: 'Ongoing Sessions',
    description: 'Regular visits to track progress and support lasting recovery.',
  },
];

const StepCard: React.FC<{ step: Step }> = ({ step }) => (
    <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md transition-all">
        <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-2xl font-bold mb-4 shadow-sm">
            {step.step}
        </div>
        <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-secondary">{step.description}</p>
        </div>
    </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How It Works</h2>
          <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">
            Simple, seamless steps to recovery.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
                <StepCard key={s.step} step={s} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
