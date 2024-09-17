'use client'
import React from 'react'
import Tittle from '../Texto/Tittle'
import Paragraph from '../Texto/Paragraph'
import Image from 'next/image'
import { Play } from '../Utils/play'

const Newsletter = () => {
  return (
    <section className='border  border-red-500 h-[1003px] flex flex-col justify-center items-center gap-[59px] py-[80px] px-[10px]'>
      <div className=' h-[217px] flex flex-col items-center gap-[7px]'>
        <p className='text-[20px] font-graphikBold font-extrabold'>
          At your fingertips
        </p>

        <Tittle fontFamily='' cor=''>
          Newsletter
        </Tittle>

        <Paragraph cor='' font='text-[23px]' fontFamily=''>
          Most calendars are designed for teams.
        </Paragraph>

      </div>

      <div className='h-[347px] flex flex-col gap-[7px]'>
        <Image
          src={`/images/newsletter/container.svg`}
          alt='imagem newsletter'
          width={371}
          height={348}
        />
      </div>

      <div className=' h-[261px] flex flex-col gap-[7px]'>
        <p className='text-[19px] text-center font-graphikBold font-extrabold'>
          Subscribe to our Newsletter
        </p>
        <p className='text-[20px] font-graphikbolder text-center '>
          Available exclusivery on Figmaland
        </p>

        <div className='h-[168px] flex flex-col gap-[12px] '>
          <label htmlFor="Subscribe" className='w-[353px] h-[54px] text-[14px] flex flex-col px-[35px] py-[19px] gap-[47px] '>
            Your Email
          </label>
          <input onClick={Play} name='Subscribe' value={'Subscribe'} type="button" className='bg-[#2091F9] text-[20px] text-white rounded-[35px] h-[54px]' />
        </div>
      </div>

    </section>
  )
}

export default Newsletter
