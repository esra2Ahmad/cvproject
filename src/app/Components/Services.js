
import React from 'react'
import Link from 'next/link'
import CardServices from './CardServices'
import { services } from '@/constants'
import Navlinks from './Navlinks'

const Services = () => {
  return (
    <div  className=' max-w-[1240px]  mx-48   bg-zinc-900 relative top-[-250px]'>
      <Navlinks/>
        <div>
            <div className='flex flex-col gap-8 pt-11'>
                <h6 className='text-center text-[14px] font-light uppercase text-white'>Our Services</h6>
                <h3 className='text-center text-[38px] font-medium   uppercase text-white'>Turn Information<br/><span className=' text-lime-300'>Into  Aceationable</span> Insights </h3>
            </div>
            <div className=' flex flex-wrap gap-11 ml-[40px] my-16 '>
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