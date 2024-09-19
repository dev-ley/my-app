import React from 'react'

interface H5Props {
  text: string;
  fontSize?: number;
  fontFamily?: string;
  cor?: string;
}

const H5 = ({ text, fontSize = 16, fontFamily = 'graphik', cor }: H5Props) => {
  return (
    <h5 
    style={{
      fontSize: `${fontSize}px`,
      fontFamily: fontFamily,
      color: cor,
    }}>

      {text}
    </h5>
  )
}

export default H5
