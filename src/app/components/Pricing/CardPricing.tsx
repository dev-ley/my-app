'use client'
import React from 'react'
import H3 from '../Texto/H3'
import H5 from '../Texto/H5'
import Button from '../Button/Button'
import { Play } from '../Utils/play'

interface CardPricingProps {
    name: string;
    price: string;
    bg?: string;
    cortext?: string;
    bgbutton?: string;
}

const CardPricing = ({ name, price, bg = 'white', bgbutton = '#2091F9', cortext = 'black' }: CardPricingProps) => {

    const features = [
        'Pricing Feature',
        'Pricing Feature',
        'Pricing Feature',
        'Pricing Feature',
        'Pricing Feature',
    ];

    return (
        <div className='w-[335px] h-[607px] flex flex-col items-center gap-[30px]  p-[40px] rounded-[10px]' style={{ backgroundColor: `${bg}`, color: `${cortext}` }} >
            <div className=' w-[144px] h-[80px] flex flex-col items-center text-center gap-[5px]'>
                <H3 text={name} />
                <H5 text='Organize across all apps by hand' />
            </div>

            <div className=' w-[183px] h-[61px] flex items-center  justify-center content-center gap-[7px]'>
                <div>
                    <H3 text={price} fontSize={74} />
                </div>
                <div className=' flex flex-col h-[51px] w-[79px] text-start'>
                    <H3 text='$' fontFamily='graphik-bold' fontSize={20} peso={900} />
                    <H5 text='Per Month' />
                </div>
            </div>

            <div className=' flex flex-col items-center h-[240px] w-[255px] text-center'>
                <div className='flex flex-col items-center h-[240px] w-[255px] text-center'>
                    {features.map((feature, index) => (
                        <div key={index} className='flex gap-[10px] w-[129px] h-[48px] p-[10px]'>
                            <p style={{ fontSize: '15px' }}>{feature}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className=' flex flex-col gap-[10px] items-center h-[56px] w-[255px] text-center '>
                <Button onClick={Play} cor={bgbutton} text='Order Now' textColor={bg} />
            </div>
        </div>
    )
}

export default CardPricing
