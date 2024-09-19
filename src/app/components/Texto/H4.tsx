import React from 'react'

interface H4Props {
  text: string;
  cor?: string;
  font?: number;
  fontFamily?: string;
}

const H4 = ({ text, cor, font = 28, fontFamily }: H4Props) => {
  return (
    <h4 
    style={{
      color: cor,
      fontFamily: fontFamily,
      fontSize: `${font}px`,

    }}>
      {text}
    </h4>
  )
}

export default H4
