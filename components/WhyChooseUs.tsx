
import React from 'react';

const reasons = [
    "Professional, licensed physiotherapists",
    "One-to-one personalised home care",
    "No travel — we come to you",
    "Flexible appointment times",
    "Evidence-based treatment methods",
    "Ideal for post-surgical and elderly patients"
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Knock Knock Physio</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 max-w-4xl mx-auto">
                {reasons.map((reason, index) => (
                    <div key={index} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 bg-green-100 rounded-full p-1">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-lg text-gray-700 font-medium">{reason}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
