"use client"; // Adicionado para indicar que este é um Client Component

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';

// Placeholder for Menu and X icons (e.g., from lucide-react or SVGs)
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const menuItems = [
  { label: "Início", href: "#hero" }, 
  { label: "O Curso", href: "#about-course" }, 
  { label: "Sobre DJ MK", href: "#about-instructor" }, 
  { label: "Depoimentos", href: "#testimonials" }, 
  { label: "Contato", href: "#contact" }, 
  { label: "Inscreva-se Agora", href: siteConfig.hotmartLink, isButton: true, target: "_blank" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 70, // Adjust offset for fixed header height
          behavior: 'smooth',
        });
      }
      setIsOpen(false); // Close mobile menu on click
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-primary shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="text-2xl font-bold text-secondary hover:text-accent transition-colors">
          {siteConfig.djName}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 items-center">
          {menuItems.map((item) => (
            item.isButton ? (
              <a
                key={item.label}
                href={item.href}
                target={item.target || '_self'}
                rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                className="bg-secondary hover:bg-accent text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-lightText hover:text-secondary transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-lightText hover:text-secondary focus:outline-none">
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary shadow-lg pb-4">
          <nav className="flex flex-col space-y-2 px-4">
            {menuItems.map((item) => (
              item.isButton ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.target || '_self'}
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="bg-secondary hover:bg-accent text-white font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out text-center"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-lightText hover:text-secondary block px-3 py-2 rounded-md text-base font-medium text-center"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

