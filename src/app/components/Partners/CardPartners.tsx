import Image from 'next/image'
import React from 'react'

interface CardPartnersProps {
    src: string;
    alt: string;
    width: number;
    height: number;

}

const CardPartners = ({ src, alt, width, height }: CardPartnersProps) => {
    return (
        <div className=' h-[151px] flex flex-col items-center gap-[15px] py-[25px] px-[40px] text-center'>
            <p className=' text-[16px] w-[94px] h-[23px] '>Client Name</p>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    )
}

export default CardPartners
