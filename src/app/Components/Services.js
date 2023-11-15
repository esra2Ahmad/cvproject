
import React from 'react'
import Link from 'next/link'
import CardServices from './CardServices'
import { services } from '@/constants'
import Navlinks from './Navlinks'

const Services = () => {
  return (
    <div  className='w-[1240px]  mx-[149px]  bg-zinc-900  rounded-tl-[12px] mt-[-10px]'>
      
        <div>
            <div className='flex flex-col gap-8 pt-16'>
                <h6 className='text-center text-[14px] font-light uppercase text-white font-Sora'>Our Services</h6>
                <h3 className='text-center text-[38px] font-medium  text-white font-Sora'>Turn Information<br/><span className=' text-lime-300'>Into  Aceationable</span> Insights </h3>
            </div>
            <div className=' flex flex-wrap gap-11 mx-14 my-16 '>
            {services.map((detail, index) => (
              <CardServices
                key={index}
                image={detail.image}
                name={detail.name}
                text={detail.text}
              />
            ))}
            </div>
        </div>
        <div className='w-full h-[1px] bg-zinc-800'></div>
    </div>
  )
}

export default Services