import React from 'react'

interface ParagraphProps {
  children: string;
  cor: string;
  font: string;
  fontFamily: string;
}

const Paragraph = ({ children, cor, font, fontFamily }: ParagraphProps) => {
  return (
    <p className={`${font} ${cor} text-center w-[353px] h-[150px] leading-[1.5] mt-[16px] tracking-[0.05cm] ${fontFamily}`}>
      {children}
    </p>
  )
}

export default Paragraph
