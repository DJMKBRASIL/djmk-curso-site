import React from 'react';
import { siteConfig } from '@/config/siteConfig';

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  return (
    <section id={id} className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-primary text-lightText p-8 relative overflow-hidden pt-20 md:pt-0">
      {/* Adjusted padding top for mobile to account for header, desktop might not need it if header is transparent initially */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          {siteConfig.courseName}: <span className="text-secondary">Domine a pista como um mestre</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-8">
          E Transforme Sua Carreira de DJ com <span className="text-accent">{siteConfig.djName}</span>
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Aprenda a arte da mixagem, dos loops e da presença de palco direto com quem já abriu shows para os maiores nomes da cena. Seu caminho para o sucesso começa aqui!
        </p>
        <a 
          href={siteConfig.hotmartLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-secondary hover:bg-accent text-white font-bold py-4 px-10 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          QUERO GARANTIR MINHA VAGA!
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

