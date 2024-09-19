'use client';

import React from 'react';
import Button from '../Button/Button'; // Certifique-se de que o caminho está correto
import H2 from '../Texto/H2';
import { Play } from '../Utils/play';
import H4 from '../Texto/H4';

const Herolight = () => {
  return (
    <div className=' px-[20px] py-[30px] flex flex-col gap-[10px] h-[847px]'>
      <div className='px-[12px] py-[50px] flex flex-col gap-[59px] h-[780px]'>
        <div className='pt-[15px] text-center flex flex-col gap-[27px]'>
          <H2 text='The best products start with Figma' cor='white' />
          <H4 text='Most calendars are designed for teams.' cor='white' textSpacing={2.1} peso={100} />
        </div>
        <div className='flex flex-col items-center'>
          <Button peso={100} onClick={Play} text='Try For Free' />
        </div>
      </div>
    </div>
  );
};

export default Herolight;
