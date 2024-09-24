'use client'
import React, { useState, useEffect } from 'react';
import Herolight from './Herolight';
import Navbar from './Navbar';
import Navbardesk from './Navbardesk';

const HeadLight = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  // Função para verificar o tamanho da tela
  const handleResize = () => {
    if (window.innerWidth >= 1224) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  // useEffect para adicionar e limpar o evento de resize
  useEffect(() => {
    // Verifica o tamanho da tela no primeiro render
    handleResize();

    // Adiciona o evento de resize
    window.addEventListener('resize', handleResize);

    // Limpa o evento quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative  h-[910px] bg-mobile-bg bg-cover bg-center bg-no-repeat lg:bg-desktop-bg">
      {isDesktop ? <Navbardesk /> : <Navbar />}
      <Herolight />
    </section>
  );
};

export default HeadLight;
