import React from 'react'
import FooterCard from './FooterCard'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='bg-[#252B42]  text-white h-[1431px] flex flex-col items-center py-[107px]'>
            <div className=' w-[284px] h-[1217px] flex flex-col items-center gap-[76px]'>
                <div className=' w-[186px] h-[947px] flex flex-col items-center gap-[73px]'>
                    <FooterCard />
                    <FooterCard />
                    <FooterCard />
                </div>

                <div className=' w-[284px] h-[194px] flex flex-col items-center gap-[10px]'>
                    <div className=' flex w-[284px] h-[46px] items-center' >
                        <Image src={'/images/footer/bx_bx-map.svg'} alt='map' width={46} height={46} />
                        <p className='text-[15px]'>7480 Mockingbird Hill undefined </p>
                    </div>
                    <div className=' flex w-[284px] h-[47px] items-center gap-[10px]' >
                        <Image src={'/images/footer/ic_baseline-phone-android.svg'} alt='map' width={35} height={35} />
                        <p className='text-[15px]'>(239) 555-0108</p>
                    </div>
                    <div className=' flex w-[171px] h-[81px] gap-[24px] py-[20px] justify-between' >
                        <Image src={'/images/footer/ant-design_twitter-outlined.svg'} alt='map' width={41} height={41} />
                        <Image src={'/images/footer/ant-design_facebook-filled.svg'} alt='map' width={41} height={41} />
                        <Image src={'/images/footer/ant-design_linkedin-filled.svg'} alt='map' width={41} height={41} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
