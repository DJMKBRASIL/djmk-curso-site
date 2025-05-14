import React from 'react';
import { siteConfig } from '@/config/siteConfig'; // Not used here, but kept for consistency if needed later

// Placeholder for an SVG icon or an emoji
const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-secondary w-8 h-8 mb-2 opacity-50">
    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/>
  </svg>
);

const testimonials = [
  {
    id: 1,
    quote: "O cara tem uma didática surreal, fala direto ao ponto e mostra tudo na prática.",
    author: "@renanbeats"
  },
  {
    id: 2,
    quote: "Eu achava que ser DJ era impossível. Em duas semanas eu já tava fazendo mixagens que nunca imaginei!",
    author: "Aluno Satisfeito"
  },
  {
    id: 3,
    quote: "MK é aquele tipo de professor que você sente que tá com você no rolê. Sério, nunca aprendi tanto com tanta leveza.",
    author: "DJ em Formação"
  }
];

interface TestimonialsSectionProps {
  id: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ id }) => {
  return (
    <section id={id} className="w-full bg-darkText text-lightText py-16 px-8 md:px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          A Transformação Começa Aqui: <span className="text-secondary">O Que Nossos Alunos Dizem</span>
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-primary p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <QuoteIcon />
              <p className="text-lg italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <p className="font-semibold text-accent text-xl">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

