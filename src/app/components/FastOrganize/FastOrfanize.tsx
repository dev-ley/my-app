'use client'
import React from 'react'
import H2 from '../Texto/H2'
import H4 from '../Texto/H4'
import Button from '../Button/Button'
import Image from 'next/image'
import { Play } from '../Utils/play'


const FastOrfanize = () => {
    return (
        <section className='flex flex-col items-center  w-full h-[800px]'>
            <div className='flex flex-col gap-[59px] py-[50px] h-[740px] mx-[20px] my-[30px] '>
                <div className='flex flex-col h-[237px] gap-[7px] items-center text-center '>
                    <H2 text='Fastest way to organize' />
                    <H4 text='Most calendars are designed for teams.' />
                </div>

                <div className='flex flex-col items-center h-[60px] '>
                    <Button onClick={Play} text='Try For Free' textSize={20} peso={800} height={60} />
                </div>
                <div className='flex flex-col items-center h-[255px] '>
                    <Image
                        src="/images/fastorganize/imgnotebook.svg"
                        alt='imagem de um notebook'
                        width={379}
                        height={212}
                    />
                </div>
            </div>
        </section>
    )
}

export default FastOrfanize
