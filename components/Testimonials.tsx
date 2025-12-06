
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "The convenience of having a physiotherapist come to my home was a game-changer after my surgery. The care was exceptional and I recovered much faster than I expected.",
    name: 'Sarah J.',
    location: 'Edinburgh',
  },
  {
    quote: "Professional, knowledgeable, and incredibly supportive. My mobility has improved significantly. I couldn't recommend Knock Knock Physio more highly.",
    name: 'David R.',
    location: 'Glasgow',
  },
  {
    quote: "My father was hesitant about physio, but the at-home service made him feel comfortable. The therapist was patient and built a wonderful rapport with him.",
    name: 'Emily T.',
    location: 'North Berwick',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
    <div className="flex-grow">
      <p className="text-secondary italic mb-6">"{testimonial.quote}"</p>
    </div>
    <div>
      <p className="font-bold text-gray-800">{testimonial.name}</p>
      <p className="text-sm text-gray-500">{testimonial.location}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Clients Say</h2>
          <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">
            We are proud to have helped so many people on their road to recovery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
