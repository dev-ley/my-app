import React from 'react'

interface H1Props {
  text: string;
  fontSize?: number;
  fontFamily?: string;
  cor?: string;
}

const H1 = ({ text, fontSize = 74, fontFamily = 'Graphik-bold', cor }: H1Props) => {
  return (
    <h1     
      style={{
        fontSize: `${fontSize}px`,
        fontFamily: `${fontFamily}`,
        color: `${cor}`,
      }}>

      {text}
    </h1>
  )
}

export default H1
