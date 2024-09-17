import React from 'react'

interface TextProps {
    children: string;
    fontFamily:string;
    cor:string;
    
}

const Tittle = ({ children, fontFamily, cor }:TextProps) => {
  return (
    <h2 className={`text-[48px] ${cor} text-center w-[353px] h-[185px] leading-[1.2] tracking-[0.2px] m-[5px] mt-[20px] ${fontFamily}`}>
      {children}
    </h2>
  )
}

export default Tittle
