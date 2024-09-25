import React from 'react'

interface CardUsuarioProps{
    nome:string;
    idade: number,
    email: string,
    telefone:string
}

const CardUsuario = ({ nome, idade, email, telefone }:CardUsuarioProps) => {
  return (
      <div className={`flex flex-col gap-1  bg-slate-400 rounded-sm p-2 justify-center w-[300px] h-[150px]`}  >
          <h2>Nome   : {nome}</h2>
          <p className={idade > 30 ? 'text-red-500':'' }> 
             idade   : {idade}</p>
          <p>email   : {email}</p>
          <p>telefone: {telefone}</p>
      </div>
  )
}

export default CardUsuario
