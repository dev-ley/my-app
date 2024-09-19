import React from 'react'

interface ParagrapheProps {
  text: string;
  fontSize?: number;
  fontFamily?: string;
  cor?: string;
}

const Paragraphe = ({ text, fontSize = 18, fontFamily = 'graphik', cor }: ParagrapheProps) => {
  return (
    <p 
    style={{
      fontSize: `${fontSize}px`,
      fontFamily: fontFamily,
      color: cor,
    }}>

      {text}
    </p>
  )
}

export default Paragraphe
