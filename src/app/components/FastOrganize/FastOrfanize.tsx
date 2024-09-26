'use client'
import useIsDesktop from '@/app/components/Utils/isDesktop';
import React from 'react'
import H2 from '../Texto/H2'
import H4 from '../Texto/H4'
import Button from '../Button/Button'
import Image from 'next/image'
import { Play } from '../Utils/play'


const FastDesk = () => {

    const isDesktop = useIsDesktop();

    return (
        <section className='flex flex-col items-center  w-full h-[800px] lg:h-[924px]  lg:justify-center'>
            <div className='  flex flex-col py-[50px] h-[740px] mx-[20px] my-[30px]  lg:flex-row lg:items-center  lg:max-w-[1243px] lg:h-[472px] gap-[50px] '>
                <div className='lg:h-[350px] lg:max-w-[532px]'>
                    <div className='flex flex-col h-[237px] gap-[17px] items-center text-center lg:items-start lg:text-start '>
                        <H2 text={'Fastest way to organize'} />
                        <H4 text={isDesktop
                            ? 'Most calendars are designed for teams. Slate is designed for freelancers.'
                            : 'Most calendars are designed for teams.'} />
                    </div>
                    <div className='flex flex-col items-center my-[59px] h-[60px] lg:items-start'>
                        <Button onClick={Play} text='Try For Free' textSize={20} peso={800} height={60} />
                    </div>
                </div>

                <div className='  flex flex-col items-center h-[255px]  lg:h-[386px] lg:w-[661px] lg:justify-center'>
                    <Image
                        src={isDesktop ? '/images/fastorganize/Macbookdesk.svg' : '/images/fastorganize/imgnotebook.svg'}
                        alt='imagem de um notebook'
                        width={isDesktop ? 624 : 379}
                        height={isDesktop ? 349 : 210}
                    />
                </div>
            </div>
        </section>
    )
}

export default FastDesk
