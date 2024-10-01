'use client'
import React from 'react'
import H2 from '../Texto/H2'
import H4 from '../Texto/H4'
import Image from 'next/image'
import H5 from '../Texto/H5'
import H3 from '../Texto/H3'
import Button from '../Button/Button'
import Play from '../Utils/play'
import useIsDesktop from '../Utils/isDesktop'

const Contact = () => {

    const isDesktop = useIsDesktop();

    return (
        <section className=' h-[1569px] flex flex-col items-center py-[99px]  lg:pt-[153px] pb-[52px] lg:h-[1206px]'>
            <div className=' w-[358px] h-[1370px] flex flex-col items-center justify-around py-[50px]  lg:w-[1228px] lg:h-[1001px] lg:justify-center'>
                <div className=' w-[285px] h-[182px] flex flex-col items-center gap-[7px] text-center lg:w-[552px] lg:my-[50px]'>
                    <H2 text='Contact Us' />
                    <H4 text={isDesktop ? 'Most calendars are designed for teams. Slate is designed for freelancers.' : 'Most calendars are designed for teams.'} />
                </div>

                <div className='flex flex-col items-center lg:flex lg:flex-row-reverse  lg:w-[1228px] lg:justify-between lg:gap-[50px]'>
                    <div className=' lg:w-[725px] lg:h-[613px] lg:flex lg:flex-col-reverse '>
                        <div className=' w-[191px] h-[61px] flex justify-between gap-[10px] px-[10px] py-[10px] m-[68px] lg:py-0 lg:m-0'>
                            <Image src={`/images/contact/ant-design_twitter-outlined.svg`} alt='icon' width={40} height={40} />
                            <Image src={`/images/contact/ant-design_facebook-filled.svg`} alt='icon' width={40} height={40} />
                            <Image src={`/images/contact/ant-design_linkedin-filled.svg`} alt='icon' width={40} height={40} />
                        </div>

                        {isDesktop &&
                            <div className='w-[516px] h-[324px]  my-[50px] mx-auto'>
                                <Image src={`/images/contact/map.svg`} alt='icon' width={516} height={324} />
                            </div>
                        }

                        <div className='w-[349px] h-[208px] flex flex-col items-center gap-[75px] lg:items-start'>
                            <div className=' w-[349px] h-[172px] flex flex-col gap-[10px] lg:w-[725px] lg:h-[108px] lg:flex-row'>
                                <div className=' w-[349px] h-[60px] flex items-center gap-[10px] lg:flex-col lg:w-[313px] lg:h-[108px]'>
                                    <Image src={`/images/contact/bx_bx-map.svg`} alt='icon' width={26} height={32} />
                                    <H5 text='6386 Spring St undefined Anchorage, Georgia 12473 United States' />
                                </div>
                                <div className=' w-[349px] h-[60px] flex items-center gap-[10px] lg:flex-col lg:w-[137px] lg:h-[87px]'>
                                    <Image src={`/images/contact/ic_baseline-phone-android.svg`} alt='icon' width={21} height={34} />
                                    <H5 text='(843) 555-0130' />
                                </div>
                                <div className=' w-[349px] h-[60px] flex items-center gap-[10px] lg:flex-col lg:w-[225px] lg:h-[75px]'>
                                    <Image src={`/images/contact/ant-design_mail-outlined.svg`} alt='icon' width={27} height={22} />
                                    <H5 text='willie.jennings@example.com' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className=' border border-[#DDDDDD] rounded-[20px] w-[349px] h-[669px] flex flex-col align-top px-[49px] py-[52px]  gap-[45px] lg:w-[453px]'>
                        <div className='text-center'>
                            <H3 text='Contact Us' />
                        </div>
                        <input type="text" placeholder='Your Name' className='w-[280px] lg:w-[353px] h-[54px] rounded-[39px] bg-[#F5F5F5] flex flex-col gap-[47px] px-[20px] py-[19px] placeholder:text-black placeholder:text-sm' />
                        <input type="text" placeholder='Your Email' className='w-[280px] lg:w-[353px] h-[54px] rounded-[39px]  bg-[#F5F5F5] flex flex-col gap-[47px] px-[20px] py-[19px] placeholder:text-black placeholder:text-sm' />
                        <textarea placeholder='Your Message' className='w-[280px] lg:w-[353px] h-[193px] bg-[#F5F5F5] px-[10px] py-[10px] text-left placeholder:text-black placeholder:text-sm resize-none' />
                        <Button text='Send' onClick={Play} width={145} height={56} />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
