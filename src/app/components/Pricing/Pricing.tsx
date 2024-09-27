'use client'
import React from 'react'
import H2 from '../Texto/H2'
import H4 from '../Texto/H4'
import CardPricing from './CardPricing'
import useIsDesktop from '../Utils/isDesktop'



const Pricing = () => {

  const isDesktop = useIsDesktop()

  return (
    <section className=' h-[2430px] flex flex-col items-center gap-[10px] px-[28px] bg-[#252B42] border border-red-500 lg:h-[1155px]'>
      <div className=' h-[2419px] flex flex-col items-center gap-[80px] px-[13px] py-[100px]    lg:h-[1155px] lg:w-[1440px]'>

        <div className=' text-center w-[285px] h-[182px] flex flex-col items-center gap-[7px]  lg:h-[1155px] lg:w-[1777px]'>
          <div className=' w-[178px] h-[75px] flex flex-col gap-[10px]'>
            <H2 text='Pricing' cor='white' />
          </div>
          <div className=' w-[285px] h-[100px] flex flex-col gap-[10px] lg:w-[532px] '>
            <H4 cor='white' text={isDesktop
              ? 'Most calendars are designed for teams. Slate is designed for freelancers.'
              : 'Most calendars are designed for teams.'} />
          </div>
        </div>

        <div className=' text-center  h-[1957px] flex flex-col items-center gap-[50px]  py-[18px] lg:flex-row  lg:h-[693px]' >
          <CardPricing name='FREE' price='0' />
          <CardPricing name='STANDARD' price='10' bg='#2091F9' bgbutton='white' cortext='white' alturacard={693} />
          <CardPricing name='BUSINESS' price='99' />
        </div>

      </div>
    </section>
  )
}

export default Pricing
