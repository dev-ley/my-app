"use client";  // Marcar como Client Component

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
    <header className="relative p-4">
      <div className="flex justify-between items-center">
        <div className="flex-shrink-0">
          <Image
            className="logo"
            src="/images/navbar/Rectangle.svg"
            alt="Logo"
            width={186}
            height={58}
          />
        </div>

        <div className="cursor-pointer" onClick={toggleMenu}>
          <Image
            src="/images/navbar/bntnavebarh.svg"
            alt="Menu hamburguer"
            width={40}
            height={32}
          />
        </div>
      </div>

      <nav onClick={toggleMenu} className={`fixed top-0 right-0 h-full bg-black/80 text-white flex flex-col justify-center items-start p-4 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '250px' }} // Pode ajustar dinamicamente o width em Tailwind se necessário
      >
        
        <a className="p-4 text-lg hover:bg-gray-600 w-full" href="#">Home</a>
        <a className="p-4 text-lg hover:bg-gray-600 w-full" href="#">Product</a>
        <a className="p-4 text-lg hover:bg-gray-600 w-full" href="#">Pricing</a>
        <a className="p-4 text-lg hover:bg-gray-600 w-full" href="#">About</a>
        <a className="p-4 text-lg hover:bg-gray-600 w-full" href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
