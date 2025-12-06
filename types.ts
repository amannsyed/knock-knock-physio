
export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Step {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
