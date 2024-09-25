import React from 'react'
import CardUsuario from './CardUsuario';

const usuarios = [
  {
    nome: "Carlos Silva",
    idade: 28,
    email: "carlos.silva@email.com",
    telefone: "(11) 98765-4321"
  },
  {
    nome: "Mariana Souza",
    idade: 34,
    email: "mariana.souza@email.com",
    telefone: "(21) 91234-5678"
  },
  {
    nome: "João Pereira",
    idade: 22,
    email: "joao.pereira@email.com",
    telefone: "(31) 99876-5432"
  },
  {
    nome: "Fernanda Oliveira",
    idade: 29,
    email: "fernanda.oliveira@email.com",
    telefone: "(41) 98765-1234"
  },
  {
    nome: "Lucas Costa",
    idade: 31,
    email: "lucas.costa@email.com",
    telefone: "(51) 91234-8765"
  },
  {
    nome: "Paula Ribeiro",
    idade: 27,
    email: "paula.ribeiro@email.com",
    telefone: "(61) 99988-1234"
  },
  {
    nome: "Ricardo Lima",
    idade: 35,
    email: "ricardo.lima@email.com",
    telefone: "(71) 98877-6543"
  },
  {
    nome: "Amanda Ferreira",
    idade: 30,
    email: "amanda.ferreira@email.com",
    telefone: "(81) 98765-4321"
  },
  {
    nome: "Eduardo Alves",
    idade: 26,
    email: "eduardo.alves@email.com",
    telefone: "(91) 91234-5678"
  },
  {
    nome: "Juliana Martins",
    idade: 33,
    email: "juliana.martins@email.com",
    telefone: "(51) 99976-5432"
  }
];

const Usuarios = () => {
  return (
    <div className='flex flex-wrap gap-3 '>
      {usuarios.map((usuario) => {
        return (
          <CardUsuario nome={usuario.nome} idade={usuario.idade} email={usuario.email} telefone={usuario.telefone} />
        )
      })}
    </div>
  )
}

export default Usuarios;