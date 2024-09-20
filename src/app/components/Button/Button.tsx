import React from 'react'

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  peso?: number;
  textColor?: string;
  textSize?: number;
  textFamily?: string;
  cor?: string;
  width?: number;
  height?: number;

}

const Button = ({ onClick, text, peso, textColor = 'white', textSize = 16, textFamily, cor = '#2091F9', width = 236, height = 52 }: ButtonProps) => {

  return (
    <button onClick={(onClick)}
      className={`
        text-${textColor} 
        font-${textFamily} 
        rounded-[35px] 
        text-center`}
      style={{
        backgroundColor: `${cor}`,
        width: `${width}px`,
        height: `${height}px`,
        fontSize: `${textSize}px`,
        fontWeight: `${peso}`,
        color:`${textColor}`,
        
      }}>
      {text}
    </button>
  );
}

export default Button
