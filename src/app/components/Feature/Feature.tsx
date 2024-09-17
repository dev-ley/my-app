'use client'

import React from 'react'
import Tittle from '../Texto/Tittle'
import Paragraph from '../Texto/Paragraph'
import Image from 'next/image'
import ItemFeature from './ItemFeature'

const Feature = () => {

  const Play = ():void => {
    alert('Você clicou no Play!')
  }

  return (
    <section className='flex flex-col items-center  mt-[24px] w-full h-[1596.12px]'>
      <div className="flex flex-col items-center  w-[285px] h-[182px] mx-[66.5px] mt-[80px]">
          <Tittle fontFamily='text-graphikBolder' cor='text-black'>
            Features
          </Tittle>
          <Paragraph cor='text-black' font='text-[24px]' fontFamily='font-graphik'>
            Most calendars are designed for teams.
          </Paragraph>
        </div>

        <div  className='mt-[50px] flex flex-col justify-center items-center cursor-pointer mx-[16.5px] w-[90%] h-[229px]  rounded-[26.7px]   bg-center bg-no-repeat' style={{ backgroundImage: "url('/images/feature/screen.svg')" }}>
           <Image  onClick={Play}
            src="/images/feature/playbutton.svg"
            alt="Botão de Play"
            width={61.42}
            height={61.42}
           />
        </div>

        <div className='flex flex-col  w-[255px] h-[924px] mx-[85px] py-[18px] gap-[75px] mt-[50px]'>
          <ItemFeature
          imagem='mdi_drawing' 
          titulo='OpenType features Variable fonts'
          texto='Slate helps you see how many more days you need to work to reach your financial goal.'/>          
        
          <ItemFeature
          imagem='mdi_draw' 
          titulo='Design with real data'
          texto='Slate helps you see how many more days you need to work to reach your financial goal.'/>          
        
          <ItemFeature
          imagem='mdi_brush' 
          titulo='Fastest way to take action'
          texto='Slate helps you see how many more days you need to work to reach your financial goal.'/>          
        </div>

    </section>
  )
}

export default Feature
