import React from 'react';
import { siteConfig } from '@/config/siteConfig';

// Placeholder for an SVG icon or an emoji. For a real project, you'd use an actual SVG.
const UserCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary w-8 h-8 mb-2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <polyline points="16 11 18 13 22 9"/>
  </svg>
);

const audienceProfiles = [
  { id: 1, text: "Iniciantes que nunca tocaram e querem começar com o pé direito, sem perder tempo com informações soltas." },
  { id: 2, text: "DJs que já arranham alguma coisa, mas querem organizar o conhecimento, aprimorar a técnica e dar um salto de qualidade." },
  { id: 3, text: "Artistas, beatmakers e MCs que desejam se apresentar de forma mais profissional e dominar o palco." },
  { id: 4, text: "Qualquer pessoa apaixonada por música que sonha em transformar esse amor em uma fonte de renda ou uma carreira de sucesso." },
];

const TargetAudienceSection = () => {
  return (
    <section className="w-full bg-darkText text-lightText py-16 px-8 md:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Este Curso é Para <span className="text-secondary">Você</span> Se...
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audienceProfiles.map((profile) => (
            <div key={profile.id} className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <UserCheckIcon />
              <p className="text-lg leading-relaxed">{profile.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;

