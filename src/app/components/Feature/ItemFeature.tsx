import Image from 'next/image'
import React from 'react'

interface ItemProps {
    imagem: string;
    titulo: string;
    texto: string;
}

const ItemFeature = ({ imagem, titulo, texto }: ItemProps) => {
    return (
        <div className=' w-[255px] h-[257px] flex flex-col items-center gap-[10px] pb-2'>
            <div className=' w-[61px] h-[61px] flex flex-col justify-center items-center'>
                <Image
                    src={`/images/feature/${imagem}.svg`}
                    alt='ico'
                    width={61}
                    height={61}
                />
            </div>

            <div className='h-[76px] flex content-center text-center'>
                <p className='flex content-center text-[20px] font-graphikBold  font-extrabold text-center '>
                    {titulo}
                </p>
            </div>

            <div className=' w-[251px] h-[100px] flex  text-center'>
                <p className=' text-[18px] px-[10px] '>
                    {texto}
                </p>
            </div>
        </div>
    )
}

export default ItemFeature