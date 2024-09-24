'use client'
import React from 'react'
import H2 from '../Texto/H2'
import H4 from '../Texto/H4'
import Button from '../Button/Button'
import { Play } from '../Utils/play'
import CardPartners from './CardPartners'

const Partners = () => {
    return (
        <section className=' h-[1060px] px-[20px]'>
            <div className=' h-[1060px] flex flex-col gap-[80px] px-[20px] py-[50px]'>
                <div className='h-[182px] flex flex-col items-center gap-[7px] text-center'>
                    <H2 text='Partners' />
                    <H4 text='Most calendars are designed for teams.' />
                </div>
                <div className='h-[558px] flex flex-col items-center gap-[30px] py-[18px]'>
                    <CardPartners src='/images/partners/logos_google.svg' alt='logo da google' width={193} height={63} />
                    <CardPartners src='/images/partners/amazon.svg' alt='logo da Amazon' width={193} height={59} />
                    <CardPartners src='/images/partners/microsoft.svg' alt='logo da microsoft' width={221} height={77} />
                </div>
                <div className='flex flex-col items-center h-[60px] '>
                    <Button text='Try For Free' onClick={Play} width={236} height={60} textSize={20} peso={800} />
                </div>
            </div>
        </section>
    )
}

export default Partners
