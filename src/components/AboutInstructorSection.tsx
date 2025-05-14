import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

// Placeholder for an SVG icon or an emoji. For a real project, you'd use an actual SVG.
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

interface AboutInstructorSectionProps {
  id: string;
}

const AboutInstructorSection: React.FC<AboutInstructorSectionProps> = ({ id }) => {
  return (
    <section id={id} className="w-full bg-primary text-lightText py-16 px-8 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-darkText flex items-center justify-center text-center border-4 border-secondary overflow-hidden">
            {/* Usando a nova foto do DJ MK */}
            <Image 
              src="/images/dj-mk-profile.png" 
              alt={`Foto de ${siteConfig.djName}`}
              width={320} 
              height={320} 
              className="rounded-full object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Conheça Seu Mentor: <span className="text-secondary">{siteConfig.djName}</span>
          </h2>
          <div className="text-lg md:text-xl space-y-4 mb-8">
            <p>
              Com mais de <span className="text-accent font-semibold">20 anos de experiência</span> comandando as pistas em clubs, festas, casamentos e eventos corporativos de todos os portes.
            </p>
            <p>
              DJ MK já abriu shows para grandes nomes da música como MC Pedrinho, Hariel, Wiu, Oruam, Hungria, MC Davi e muitos outros, consolidando sua presença e técnica no cenário nacional.
            </p>
            <p>
              Além da vasta experiência prática, possui profundo conhecimento técnico como <span className="text-accent font-semibold">produtor musical, engenheiro de mixagem e masterização</span>. E o principal: ele veio da base, entende os desafios de quem está começando do zero e vai te guiar em cada passo, sem enrolação.
            </p>
          </div>
          <a 
            href={siteConfig.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-accent text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            <InstagramIcon />
            Siga no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutInstructorSection;

