import React from 'react'

interface TextProps {
    children: string;
    fontFamily:string;
    cor:string;
    font:string;
}

const Tittle = ({ children, fontFamily, cor, font }:TextProps) => {
  return (
    <h2 className={`${font} ${cor} text-center w-[353px] h-[185px] leading-[1.2] tracking-[0.2px] m-[5px] mt-[20px] ${fontFamily}`}>
      {children}
    </h2>
  )
}

export default Tittle
