'use client'
import React from 'react'
import H2 from '../Texto/H2'
import H4 from '../Texto/H4'
import Button from '../Button/Button'
import Play from '../Utils/play'
import CardPartners from './CardPartners'
import useIsDesktop from '@/app/components/Utils/isDesktop';

const Partners = () => {

    const isDesktop = useIsDesktop()

    return (
        <section className='px-[20px] '>
            <div className=' h-[1060px] flex flex-col gap-[80px] px-[20px] py-[50px] lg:max-w[1440px] lg:items-center lg:h-[932px]   '>
                <div className='h-[182px] flex flex-col items-center gap-[27px] text-center lg:w-[552px] lg:h-[222px]'>
                    <H2 text='Partners' />
                    <H4 text={isDesktop
                        ? 'Most calendars are designed for teams. Slate is designed for freelancers.'
                        : 'Most calendars are designed for teams.'} />
                </div>
                <div className=' flex flex-col items-center gap-[30px] py-[18px] lg:flex-row lg:gap-0 lg:py-0  lg:justify-center lg:max-w-[1100px] flex-wrap  content-center'>
                    <CardPartners src='/images/partners/logos_google.svg' alt='logo da google' width={193} height={63} />
                    <CardPartners alturacx={273} larguracx={160} src='/images/partners/amazon.svg' alt='logo da Amazon' width={193} height={59} />
                    <CardPartners alturacx={165} larguracx={301} src='/images/partners/microsoft.svg' alt='logo da microsoft' width={221} height={77} />
                    {isDesktop ? (
                        <>
                            <CardPartners src='/images/partners/Uber.svg' alt='logo da microsoft' width={140} height={77} />
                            <CardPartners src='/images/partners/Dropbox.svg' alt='logo da Amazon' width={229} height={59} />
                            <CardPartners src='/images/partners/logos_google.svg' alt='logo da google' width={193} height={63} />
                            <CardPartners src='/images/partners/Uber.svg' alt='logo da microsoft' width={140} height={77} />
                            <CardPartners src='/images/partners/amazon.svg' alt='logo da Amazon' width={193} height={59} />
                        </>)
                        : ''}
                </div>
                <div className='flex flex-col items-center h-[60px] '>
                    <Button text='Try For Free' onClick={Play} width={236} height={60} textSize={20} peso={800} />
                </div>
            </div>
        </section>
    )
}

export default Partners
