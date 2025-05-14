import React from 'react';
import { siteConfig } from '@/config/siteConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-darkText text-lightText/70 py-8 px-8 md:px-16 text-center">
      <div className="container mx-auto">
        <p className="mb-2">
          Copyright © {currentYear} {siteConfig.djName}. Todos os direitos reservados.
        </p>
        <p className="text-sm">
          {/* Links para Políticas de Privacidade e Termos de Uso (se houver) */}
          {/* <a href="/politica-de-privacidade" className="hover:text-secondary transition-colors">Política de Privacidade</a> 
          <span className="mx-2">|</span>
          <a href="/termos-de-uso" className="hover:text-secondary transition-colors">Termos de Uso</a> */}
        </p>
        {/* Opcional: Pequena menção ao desenvolvedor */}
        {/* <p className="text-xs mt-4">Site desenvolvido por Manus Web Solutions</p> */}
      </div>
    </footer>
  );
};

export default Footer;

