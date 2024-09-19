import React from 'react'

interface H4Props {
  text: string;
  fontSize?: number;
  fontFamily?: string;
  peso?:number;
  textSpacing?:number;
  cor?: string;

}

const H4 = ({ text, fontSize = 28, peso, fontFamily = 'Graphik',textSpacing = 0.2, cor }: H4Props) => {
  return (
    <h4 
    style={{
      fontSize: `${fontSize}px`,
      fontFamily: fontFamily,
      fontWeight: `${peso}`,
      letterSpacing: `${textSpacing}px`,
      color: cor,

    }}>

      {text}
    </h4>
  )
}

export default H4
