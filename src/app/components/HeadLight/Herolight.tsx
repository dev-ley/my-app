'use client';

import React from 'react';
import Button from '../Button/Button'; // Certifique-se de que o caminho está correto
import H2 from '../Texto/H2';
import { Play } from '../Utils/play';
import H4 from '../Texto/H4';

const Herolight = () => {

  return (
    <div className='mx-[30px] mt-[42px] my-[20px] h-[698px] py-[50px] flex flex-col items-center'>
      <div>
        <div className="flex flex-col items-center justify-center text-center">
          <H2 text='The best products start with Figma'  cor='white'/>
          <H4 text='Most calendars are designed for teams.' cor='white' />
        </div>
        <div className="flex flex-col items-center">
          <Button text='Try For Free' onClick={Play} textFamily="graphikBold" textSize={20} />
        </div>
      </div>
    </div>
  );
};

export default Herolight;
