import Image from 'next/image'
import React from 'react'

const Navbardesk = () => {
  return (
    <div className='text-white flex flex-col items-center  h-[156px] '>
        <nav className='   flex items-center justify-between w-[1210px] h-[156px] '>
            <div className='flex px-[50px] py-[43px]'>
                <div className='flex items-center w-[437px]'>
                    <a className="p-4 text-lg hover:bg-gray-600 w-full" href="usuarios">Home</a>
                    <a className="p-4 text-lg hover:bg-gray-600 w-full" href="#">Product</a>
                    <a className="p-4 text-lg hover:bg-gray-600 w-full" href="#">Pricing</a>
                    <a className="p-4 text-lg hover:bg-gray-600 w-full" href="#">About</a>
                    <a className="p-4 mr-4 text-lg hover:bg-gray-600 w-full" href="#">Contact </a>
                    <Image className="logo" src="/images/navbar/logo.svg" alt="Logo" width={248} height={78} />
                </div>
            </div>
        
            <div className="flex-shrink-0">
            </div>
            <div className=' flex w-[171px] h-[81px] gap-[24px] py-[20px] justify-between' >
                <Image src={'/images/footer/ant-design_twitter-outlined.svg'} alt='map' width={41} height={41} />
                <Image src={'/images/footer/ant-design_facebook-filled.svg'} alt='map' width={41} height={41} />
                <Image src={'/images/footer/ant-design_linkedin-filled.svg'} alt='map' width={41} height={41} />
            </div>
        </nav>
    </div>
  )
}

export default Navbardesk