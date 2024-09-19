import React from 'react'

interface H4Props {
  text: string;
  cor?: string;
  font?: string;
  fontFamily?: string;
}

const H4 = ({ text, cor, font = 28, fontFamily }: H4Props) => {
  return (
    <p 
    style={{
      color: cor,
      fontFamily: fontFamily,
      fontSize: `${font}px`,

    }}>
      {text}
    </p>
  )
}

export default H4
