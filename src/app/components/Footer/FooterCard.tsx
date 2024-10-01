import React from 'react'
import H3 from '../Texto/H3'

const FooterCard = () => {
    return (
        <div className='w-[186px] h-[267px] flex flex-col items-center gap-[15px] lg:items-start '>
            <div className='w-[167px] h-[48px] flex flex-col items-center py-[10px] gap-[10px]'>
                <H3 text='Annette Steward' />
            </div>
            <div className='w-[122px] h-[204px] flex flex-col items-center justify-between gap-[16px] lg:items-start lg:justify-start '>
                <a className='text-[15px]' href="#">Jennie Cooper</a>
                <a className='text-[15px]' href="#">Julie Henry</a>
                <a className='text-[15px]' href="#">Johnny Murphy</a>
                <a className='text-[15px]' href="#">Gregory Mccoy</a>
                <a className='text-[15px]' href="#">Marvin Mckinney</a>
            </div>
        </div>
    )
}

export default FooterCard
