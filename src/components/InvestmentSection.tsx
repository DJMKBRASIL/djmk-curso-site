import React from 'react';
import { siteConfig } from '@/config/siteConfig';

const InvestmentSection = () => {
  return (
    <section className="w-full bg-primary text-lightText py-16 px-8 md:px-16">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Seu Investimento na Sua Paixão (ou Futura Profissão!)
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Isso mesmo. Um curso que poderia custar facilmente R$ 297,00 ou até mais, mas você garante acesso completo por um valor simbólico, pensado para realmente transformar vidas.
        </p>
        <div className="bg-darkText p-8 md:p-12 rounded-xl shadow-2xl border-2 border-secondary mb-10">
          <p className="text-xl md:text-2xl mb-2">Acesso completo ao curso <span className="font-bold">{siteConfig.courseName}</span> + Todos os Bônus por apenas:</p>
          <p className="text-5xl md:text-7xl font-bold text-secondary mb-4">
            R$ 67,80
          </p>
          <p className="text-md mb-6">(Pagamento único, acesso vitalício)</p>
          <a 
            href={siteConfig.hotmartLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-accent text-white font-bold py-4 px-10 rounded-lg text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg block w-full md:w-auto md:inline-block"
          >
            QUERO ME INSCREVER AGORA!
          </a>
        </div>
        <p className="text-md italic">
          * Aproveite essa condição especial. O valor pode ser alterado a qualquer momento.
        </p>
      </div>
    </section>
  );
};

export default InvestmentSection;

