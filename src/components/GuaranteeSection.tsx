import React from 'react';
import { siteConfig } from '@/config/siteConfig';

// Placeholder for an SVG icon or an emoji
const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary w-16 h-16 mx-auto mb-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const GuaranteeSection = () => {
  return (
    <section className="w-full bg-darkText text-lightText py-16 px-8 md:px-16">
      <div className="container mx-auto text-center max-w-2xl">
        <ShieldCheckIcon />
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Risco Zero: Sua Satisfação <span className="text-secondary">Garantida</span> ou Seu Dinheiro de Volta!
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Eu confio tanto na transformação que o curso <span className="font-semibold">{siteConfig.courseName}</span> vai te proporcionar que ofereço uma garantia incondicional de 7 dias. Se, por qualquer motivo, você sentir que o curso não é para você, basta enviar um e-mail e nós devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
        </p>
        <p className="text-lg md:text-xl">
          Seu único risco é continuar adiando o seu sonho de se tornar um DJ de sucesso.
        </p>
        {/* Optional: Add a small visual element or a subtle background pattern */}
      </div>
    </section>
  );
};

export default GuaranteeSection;

