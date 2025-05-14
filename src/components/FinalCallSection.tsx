import React from "react";
import { siteConfig } from "@/config/siteConfig";

// Placeholder for SVG icons
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
);

interface FinalCallSectionProps {
  id: string;
}

const FinalCallSection: React.FC<FinalCallSectionProps> = ({ id }) => {
  return (
    <section id={id} className="w-full bg-secondary text-lightText py-20 px-8 md:px-16 text-center">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Não Deixe Seu Sonho Para Depois. <span className="text-primary">Comece Hoje!</span>
        </h2>
        <p className="text-xl md:text-2xl mb-10 italic">
          "Você não precisa ser perfeito pra começar. Mas precisa começar pra ser perfeito. Vamos juntos nessa jornada?"
        </p>
        <a 
          href={siteConfig.hotmartLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-darkText text-lightText font-bold py-4 px-12 rounded-lg text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg mb-12 inline-block"
        >
          SIM, QUERO SER UM DJ DE SUCESSO!
        </a>
        
        <div className="mt-12 pt-10 border-t border-lightText/30">
            <h3 className="text-2xl font-semibold mb-6">Ainda com dúvidas ou quer trocar uma ideia?</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href={siteConfig.instagramLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lg hover:underline">
                    <InstagramIcon /> @{siteConfig.djName.toLowerCase().replace(/ /g, ".")}brasil
                </a>
                <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lg hover:underline">
                    <WhatsAppIcon /> Chamar no WhatsApp
                </a>
                <a href={siteConfig.emailLink} className="inline-flex items-center gap-2 text-lg hover:underline">
                    <MailIcon /> {siteConfig.emailLink.replace("mailto:", "")}
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCallSection;

