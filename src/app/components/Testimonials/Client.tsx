import Image from 'next/image'
import React from 'react'

interface ClientProps {
  imagem:string;
  name:string;
  job:string;
}


const Client = ({imagem, name, job}:ClientProps) => {
  return (
    <div className='flex gap-[10px] border w-[128px] h-[42px]'>
      <div className='w-[42px] h-[42px]'>
        <Image src={`/Images/testimonial/${imagem}.svg`} alt='logo avatar' width={127} height={51} />
      </div>

      <div className='flex flex-col items-center justify-center  w-[75px] h-[42px]'>
        <h5 className='text-[9px] h-[19px] w-[75px]'>{name}</h5>
        <span className='text-[12px] h-[23px] w-[65px]'>{job}</span>
      </div>
    </div>
  )
}

export default Client
