import React from 'react';
import Button from '../Button/Button'; // Certifique-se de que o caminho está correto
import Tittle from '../Texto/Tittle';
import Paragraph from '../Texto/Paragraph';

const Herolight = () => {
  return (
    <div className='mx-[30px] mt-[42px] my-[20px] h-[698px] py-[50px] flex flex-col items-center'>
      <div>
        <div className="flex flex-col items-center">
          <Tittle font='text-[48px]' fontFamily='text-graphikBolder' cor='text-white'>
            The best products start with Figma
          </Tittle>
          <Paragraph cor='text-white' font='text-[24px]' fontFamily='font-graphikBolder'>
            Most calendars are designed for teams.
          </Paragraph>
        </div>
        <div className="flex flex-col items-center">
          <Button textFamily="font-graphikBold" textColor='text-white' cor="bg-corbtn">
            Try For Free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Herolight;
