import React from 'react';
import { siteConfig } from '@/config/siteConfig';

// Placeholder for SVG icons or emojis
const GiftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary w-6 h-6 mr-2">
    <polyline points="20 12 20 22 4 22 4 12"/>
    <rect width="20" height="5" x="2" y="7"/>
    <line x1="12" x2="12" y1="22" y2="7"/>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
  </svg>
);

const CheckListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary w-6 h-6 mr-2">
    <path d="M15 3h6v18h-6z"/>
    <path d="M10 3H4v18h6z"/>
    <path d="m9 8 2 2 4-4"/>
    <path d="m9 16 2 2 4-4"/>
  </svg>
);

const mainBenefits = [
  { id: 1, text: "Curso completo em vídeo-aulas (do zero ao avançado – acesso vitalício)", icon: <GiftIcon /> },
  { id: 2, text: "Templates prontos de repertório para diferentes estilos de festa", icon: <CheckListIcon /> },
  { id: 3, text: "Checklist de eventos: tudo que você precisa levar e fazer antes de tocar", icon: <CheckListIcon /> },
  { id: 4, text: "Grupo fechado no WhatsApp/Telegram com networking direto com DJ MK e outros alunos", icon: <GiftIcon /> },
  { id: 5, text: "Atualizações futuras do curso sem custo adicional", icon: <GiftIcon /> },
  { id: 6, text: "Certificado de conclusão para agregar valor ao seu nome", icon: <CheckListIcon /> },
];

const bonusItems = [
  { id: 1, text: "Mini curso de marketing para DJs iniciantes: aprenda a divulgar seu trabalho!" },
  { id: 2, text: "Pacote com 10 sets exclusivos do DJ MK para você estudar e se inspirar." },
  { id: 3, text: "Guia com as melhores controladoras custo-benefício de 2025 para você fazer o investimento certo." },
];

const WhatYouGetSection = () => {
  return (
    <section className="w-full bg-primary text-lightText py-16 px-8 md:px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Ao se Inscrever no <span className="text-secondary">{siteConfig.courseName}</span>, Você Garante:
        </h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
          {mainBenefits.map((benefit) => (
            <div key={benefit.id} className="flex items-start p-4 bg-darkText rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              {benefit.icon}
              <p className="text-lg">{benefit.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-darkText p-8 md:p-12 rounded-xl shadow-2xl border-2 border-secondary">
          <h3 className="text-2xl md:text-4xl font-bold mb-8 text-center text-secondary">
            E AINDA TEM MAIS! BÔNUS EXCLUSIVOS:
          </h3>
          <ul className="space-y-6">
            {bonusItems.map((bonus) => (
              <li key={bonus.id} className="flex items-center text-lg md:text-xl">
                <GiftIcon />
                <span>{bonus.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;

