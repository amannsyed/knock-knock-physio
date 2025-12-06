
import React, { useState } from 'react';
import type { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: 'Do I need a doctor\'s referral?',
    answer: 'No referral is required. You can book an appointment directly with us at any time.',
  },
  {
    question: 'How long is a session?',
    answer: 'Sessions typically last 45–60 minutes, ensuring enough time for assessment, treatment, and exercises.',
  },
  {
    question: 'Who do you treat?',
    answer: 'We treat adults of all ages, including elderly patients and post-surgical clients requiring rehabilitation.',
  },
  {
    question: 'What do I need for treatment?',
    answer: 'Just comfortable clothing and a small clear area for movement. We bring everything else needed.',
  },
  {
    question: 'Where do you operate?',
    answer: 'We provide home visits throughout our local service area — please contact us to confirm availability for your specific location.',
  },
];

const AccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void; }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 focus:outline-none hover:text-primary transition-colors"
                onClick={onClick}
            >
                <span>{item.question}</span>
                <svg
                    className={`w-6 h-6 transform transition-transform duration-300 text-primary ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                 <p className="text-secondary leading-relaxed">
                    {item.answer}
                </p>
            </div>
        </div>
    );
}

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 scroll-mt-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">FAQ</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <AccordionItem 
                key={index} 
                item={item} 
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
