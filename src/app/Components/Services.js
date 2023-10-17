
import React from 'react'
import Link from 'next/link'
import CardServices from './CardServices'
import { services } from '@/constants'

const Services = () => {
  return (
    <div  className=' max-w-[1280px] h-[900px] mx-auto  bg-zinc-900'>
        <div>
            <div className='flex flex-col gap-8'>
                <h6 className='text-center text-[14px] font-light uppercase text-white'>Our Services</h6>
                <h3 className='text-center text-[38px] font-medium   uppercase text-white'>Turn Information<br/><span className=' text-lime-300'>Into  Aceationable</span> Insights </h3>
            </div>
            <div className=' grid grid-cols-2'>
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
    </div>
  )
}

export default Services