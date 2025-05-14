import React from 'react';
import { siteConfig } from '@/config/siteConfig';

// Placeholder for SVG icons
const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform duration-300 group-open:rotate-180">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const faqItems = [
  {
    id: 1,
    question: "Preciso já ter uma controladora?",
    answer: "Não! No curso, o DJ MK te mostra os equipamentos recomendados e como você pode treinar até mesmo com softwares e recursos básicos antes de investir em uma controladora."
  },
  {
    id: 2,
    question: "O curso tem acesso vitalício?",
    answer: "Sim! Uma vez inscrito, você pode assistir às aulas quando e quantas vezes quiser, no seu ritmo, para sempre. E ainda recebe todas as atualizações futuras!"
  },
  {
    id: 3,
    question: "E se eu não gostar do curso?",
    answer: `Você tem 7 dias de garantia incondicional. Se por qualquer motivo achar que o curso não é para você, é só mandar um e-mail e seu investimento é 100% devolvido. Risco zero!`
  },
  {
    id: 4,
    question: "Posso fazer o curso mesmo trabalhando ou estudando?",
    answer: "Claro! As aulas são gravadas e ficam disponíveis para você assistir no seu tempo, de onde estiver. O aprendizado se adapta à sua rotina."
  }
];

const FaqSection = () => {
  return (
    <section className="w-full bg-primary text-lightText py-16 px-8 md:px-16">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Ainda Tem <span className="text-secondary">Dúvidas?</span> A Gente Responde!
        </h2>
        <div className="space-y-6">
          {faqItems.map((item) => (
            <details key={item.id} className="group bg-darkText p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <summary className="flex justify-between items-center font-semibold text-xl cursor-pointer list-none">
                {item.question}
                <ChevronDownIcon />
              </summary>
              <p className="text-lightText/80 mt-4 text-lg">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

