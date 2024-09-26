import Image from 'next/image'
import React from 'react'

interface CardPartnersProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    alturacx?: number;
    larguracx?: number;

}

const CardPartners = ({ src, alt, width, height, larguracx, alturacx }: CardPartnersProps) => {
    return (
        <div className={`border border-[#D8D8D8]  lg:w-[${larguracx}px] lg:h-[${alturacx}px] h-[151px] flex flex-col items-center gap-[15px] py-[25px] px-[40px] text-center`}>
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
