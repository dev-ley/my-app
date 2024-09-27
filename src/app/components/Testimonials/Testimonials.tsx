'use client'
import React from 'react'
import H2 from '../Texto/H2'
import Button from '../Button/Button'
import Play from '../Utils/play'
import Image from 'next/image'
import H3 from '../Texto/H3'
import Client from './Client'
import useIsDesktop from '@/app/components/Utils/isDesktop';
import H4 from '../Texto/H4'

const Testimonials = () => {

  const isDesktop = useIsDesktop()

  return (
    <section className=' items-center  h-[788px] flex flex-col px-[28px]'>
      <div className='  items-center  w-[359px] h-[776px] flex flex-col gap-[80px] py-[100px] lg:w-full '>
        <div>
          <H2 text='Testimonials' />
        </div>

        <div className='w-[297px] h-[281px] flex flex-col items-center text-center gap-[50px] py-[15px] lg:w-[987px]'                                 >
          <Image src={'/images/testimonial/ibm.png'} alt='Logo da Ibm' width={127} height={51} />
          {isDesktop ? <H4 text='Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.' /> : <H3 fontFamily='graphik' fontSize={14.2} text='Most calendars are designed for teams. Slate is designed for freelancers who want a simpleway to plan their schedule.' />}
          <Client imagem='avatar' name='Organize across' job='Ui designer' />
        </div>

        <div>
          <Button onClick={Play} text='More Testimonials' />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
