import React from 'react'

interface H2Props {
  text: string;
  fontSize?: number;
  fontFamily?: string;
  cor?: string;
}

const H2 = ({ text, fontSize = 48, fontFamily = 'graphik', cor }: H2Props) => {
  return (
    <h2     
      style={{
        fontSize: `${fontSize}px`,
        fontFamily: `${fontFamily}`,
        color: `${cor}`,
      }}>

      {text}
    </h2>
  )
}

export default H2
