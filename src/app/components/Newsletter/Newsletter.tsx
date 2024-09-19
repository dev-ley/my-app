'use client'
import React from 'react'
import H2 from '../Texto/H2'
import H4 from '../Texto/H4'
import Image from 'next/image'
import { Play } from '../Utils/play'
import Button from '../Button/Button'

const Newsletter = () => {
  return (
    <section className='border  border-red-500 h-[1003px] flex flex-col justify-center items-center gap-[59px] py-[80px] px-[10px]'>
      <div className=' text-center h-[217px] flex flex-col items-center gap-[7px]'>
        <p className='text-[20px] font-graphikBold font-extrabold'>
          At your fingertips
        </p>

        <H2 text='Newsletter' />
          
        <H4 text='Most calendars are designed for teams.' />
         
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

        <div className='h-[168px] flex flex-col items-center justify-center gap-[12px] '>
          <input type="text" id='Subscribe' name='Subscribe' placeholder='Your Email' className='w-[353px] h-[54px] text-[14px] flex flex-col px-[35px] py-[19px] gap-[47px] rounded-[39px] placeholder-black border border-gray-200' />
          <Button onClick={Play} text='Subscribe' textSize={20} width={353} height={54} />
        </div>
      </div>

    </section>
  )
}

export default Newsletter
