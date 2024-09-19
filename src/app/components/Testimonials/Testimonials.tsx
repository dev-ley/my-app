'use client'
import React from 'react'
import H2 from '../Texto/H2'
import Button from '../Button/Button'
import { Play } from '../Utils/play'
import Image from 'next/image'
import H3 from '../Texto/H3'
import Client from './Client'

const Testimonials = () => {
  return (
    <section className=' items-center border h-[788px] flex flex-col pt-[10px] px-[28px]'>
      <div className=' items-center border w-[359px] h-[776px] flex flex-col gap-[80px] py-[100px]'>
        <div>
          <H2 text='Testimonials' />
        </div>

        <div className='w-[297px] h-[281px] flex flex-col items-center text-center gap-[50px] py-[15px]'                                 >
          <Image src={'/Images/testimonial/logos_ibm.png'} alt='logo da ibm' width={127} height={51} />
          <H3 fontFamily='graphik' fontSize={14.2} text='Most calendars are designed for teams. Slate is designed for freelancers who want a simpleway to plan their schedule.' />
          <Client imagem='avatar' name='Organize across' job='Ui designer'/>
        </div>

        <div>
          <Button onClick={Play} text='More Testimonials' />
        </div>

      </div>
    </section>
  )
}

export default Testimonials
