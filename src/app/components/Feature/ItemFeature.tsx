import Image from 'next/image'
import React from 'react'
import H3 from '../Texto/H3';
import Paragraphe from '../Texto/Paragraphe';

interface ItemProps {
    imagem: string;
    titulo: string;
    texto: string;
}

const ItemFeature = ({ imagem, titulo, texto }: ItemProps) => {
    return (
        <div className=' w-[255px] h-[257px] flex flex-col items-center text-center gap-[10px] pb-2'>
            <div className=' w-[61px] h-[61px] flex flex-col justify-center items-center'>
                <Image
                    src={`/images/feature/${imagem}.svg`}
                    alt='ico'
                    width={61}
                    height={61}
                />
            </div>

            <div className='h-[76px] '>
                <H3 text={titulo} cor='#252B42' />
            </div>

            <div className=' w-[251px] h-[100px]'>
                <Paragraphe text={texto} cor='#374754' />
            </div>
        </div>
    )
}

export default ItemFeature