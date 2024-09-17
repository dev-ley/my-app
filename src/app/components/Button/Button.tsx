import React from 'react'

interface ButtonProps {
  children: React.ReactNode; // O conteúdo do botão
  textColor: string;
  textFamily: string;
  cor: string; // A cor do botão, passado como uma string
}

const button = ({ children, cor, textColor, textFamily }: ButtonProps) => {
  return (
    <button className={`text-[20px] ${textColor} ${textFamily} text-center w-[236px] h-[52px] rounded-[35px] ${cor}`}>
      {children}
    </button>
  )
}

export default button
