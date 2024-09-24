'use client'
import React, { useState, useEffect } from 'react';
import Button from '../Button/Button'; // Ajuste o caminho conforme necessário
import H1 from '../Texto/H1';
import H2 from '../Texto/H2';
import H4 from '../Texto/H4';
import { Play } from '../Utils/play';

const Herolight = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Função para atualizar o estado com base na largura da tela
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    handleResize(); // Verifica o tamanho da tela no início
    window.addEventListener('resize', handleResize); // Adiciona o listener

    // Remove o listener na desmontagem do componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='px-[20px] py-[30px] flex flex-col items-center gap-[10px] h-[847px]'>
      <div className='px-[12px] py-[50px] flex flex-col items-center gap-[59px] h-[780px] lg:w-[1440px] lg:h-[885px]'>
        <div className='pt-[15px] text-center flex flex-col gap-[27px] lg:w-[826px] lg:h-[335px]'>
          {isDesktop ? (
            <H1 text='The best products start with Figma' cor='white' />
          ) : (
            <H2 text='The best products start with Figma' cor='white' />
          )}
          <H4 
            text='Most calendars are designed for teams. Slate is designed for freelancers.' 
            cor='white' 
            textSpacing={2.2} 
            peso={100} 
          />
        </div>
        <div className='flex flex-col items-center'>
          <Button peso={100} onClick={Play} text='Try For Free' />
        </div>
      </div>
    </div>
  );
};

export default Herolight;
