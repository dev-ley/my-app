import React from 'react'

interface H3Props {
  text: string;
  fontSize?: number;
  fontFamily?: string;
  cor?: string;
  peso?:number;
}

const H3 = ({ text, fontSize = 20, peso, fontFamily = 'Graphik-bold', cor }: H3Props) => {
  return (
    <h3     
      style={{
        fontSize: `${fontSize}px`,
        fontFamily: `${fontFamily}`,
        color: `${cor}`,
        fontWeight:`${peso}`,
      }}>

      {text}
    </h3>
  )
}

export default H3
