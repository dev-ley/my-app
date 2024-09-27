'use client'
import useIsDesktop from '@/app/components/Utils/isDesktop';
import React from 'react'
import Image from 'next/image'
import ItemFeature from './ItemFeature'
import Play from '../Utils/play'
import H2 from '../Texto/H2'
import H4 from '../Texto/H4'

const Feature = () => {

  const isDesktop = useIsDesktop();

  return (
    <section className='flex flex-col items-center'>
      <div className=' flex flex-col items-center lg: mt-[24px] w-full h-[1596.12px] lg:h-[1362px] lg:max-w-[1440px] '>
        <div className=" flex flex-col items-center  w-[285px] h-[182px] mx-[66.5px] mt-[80px] lg:w-[552px] lg:h-[182px] ">
          <div className='text-center w-[353px] h-[185px] leading-[1.2] tracking-[0.2px] m-[5px] mt-[20px] '>
            <H2 text='Features' />
          </div>
          <div className='text-center w-[353px] h-[150px] leading-[1.5] mt-[16px] tracking-[0.05cm] lg:w-[552px] '>
            <H4 text={isDesktop
              ? 'Most calendars are designed for teams. Slate is designed for freelancers.'
              : 'Most calendars are designed for teams.'} />
          </div>
        </div>

        <div className={` items-center w-full  ${isDesktop ? 'flex flex-col-reverse' : 'flex flex-col'}`}>
          <div className=' mt-[50px] flex flex-col justify-center items-center cursor-pointer  w-[90%] h-[229px]  rounded-[26.7px] lg:max-w-[1177px] lg:h-[658px] shadow-2xl  bg-center bg-no-repeat' style={{ backgroundImage: `url(${isDesktop ? '/images/feature/screendesk.svg' : '/images/feature/screen.svg'})`, }}>
            <Image onClick={Play} src="/images/feature/playbutton.svg" alt="Botão de Play" width={isDesktop ? 187 : 61.42} height={isDesktop ? 187 : 61.42} />
          </div>

          <div className={` ${isDesktop ? 'flex flex-row' : 'flex flex-col'}  w-[255px] h-[924px] py-[18px] gap-[75px] my-[50px] lg:w-[869px] lg:h-[257px] `}>
            <ItemFeature imagem='mdi_drawing' titulo='OpenType features Variable fonts' texto='Slate helps you see how many more days you need to work to reach your financial goal.' />
            <ItemFeature imagem='mdi_draw' titulo='Design with real data' texto='Slate helps you see how many more days you need to work to reach your financial goal.' />
            <ItemFeature imagem='mdi_brush' titulo='Fastest way to take action' texto='Slate helps you see how many more days you need to work to reach your financial goal.' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Feature
