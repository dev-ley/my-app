"use client";  // Marcar como Client Component

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './Navebar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para abrir/fechar o menu ao clicar no ícone de hamburguer
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Função para fechar o menu se clicar fora
  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verifica se o clique foi fora do menu
      if (menuOpen && !(event.target as HTMLElement).closest('.side-nav')) {
        closeMenu(); // Fecha o menu se clicado fora
      }
    };

    // Adiciona o listener de clique
    document.addEventListener('click', handleClickOutside);

    // Remove o listener quando o componente desmontar
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container-header">
        <div className="container-logo">
          <Image
            className="logo"
            src="/images/navbar/Rectangle.svg"
            alt="Logo"
            width={186}
            height={58}
          />
        </div>

        <div className="menu-hamburguer" onClick={toggleMenu}>
          <Image
            src="/images/navbar/bntnavebarh.svg"
            alt="Menu hamburguer"
            width={40}
            height={32}
          />
        </div>
      </div>

      <nav onClick={toggleMenu} className={`side-nav ${menuOpen ? 'open' : ''}`}>
        
        <a href="#">Home</a>
        <a href="#">Product</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
