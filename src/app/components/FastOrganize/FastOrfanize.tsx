'use client'
import React from 'react'
import Tittle from '../Texto/Tittle'
import Paragraph from '../Texto/Paragraph'
import Button from '../Button/Button'
import Image from 'next/image'
import { Play } from '../Utils/play'


const FastOrfanize = () => {
    return (
        <section className='flex flex-col items-center  w-full h-[800px]'>
            <div className='flex flex-col gap-[59px] py-[50px] h-[740px] mx-[20px] my-[30px] '>
                <div className='flex flex-col h-[237px] items-center '>
                    <Tittle fontFamily='text-graphikBolder' cor='text-black'>
                        Fastest way to organize
                    </Tittle>
                    <Paragraph cor='text-black' font='text-[24px]' fontFamily='font-graphik'>
                        Most calendars are designed for teams.
                    </Paragraph>
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
