import React from 'react'
import Image from 'next/image'
import Navlinks from '@/app/Components/Navlinks'
import Link from 'next/link'
import { ourportfolio } from '@/constants'
import PagePort from '@/app/Components/PagePort'

const page = () => {
  return (
    <div className=' bg-zinc-800  w-full  h-[2800px]'>
      <div className='pt-8 mx-24 flex  gap-[550px] items-center'>
      <Image src="/images/logo-light.png" alt="logo"  height={50} width={100}></Image>
      <div className='w-[600px] list-none flex  justify-between  cursor-pointer'>
        
        <li className='text-white text-[14px] '><Link href="/">Home</Link></li>
        <li className='text-white text-[14px]'><Link href="#services">Services</Link></li>
        <li className='text-white text-[14px]'><Link href="#about">About</Link></li>
        <li className='text-white text-[14px]'><Link href="#ourportfolio">Portfile</Link></li>
        <li className='text-white text-[14px]'><Link href="/about">Price</Link></li>
        <li className='text-white text-[14px]'><Link href="/about">Contact</Link></li>
        <li className='text-white text-[14px]'><Link href="/about">Blog</Link></li>
        
    
</div>

      </div>
      <div className=' max-w-[1280px] bg-zinc-900 h-[2500px] mx-24 rounded-[12px]  mt-20'>
        <h3 className="text-[14px] uppercase font-light text-zinc-300  text-center pt-11 "> our porttfolio</h3>
        <h2 className="text-[38px] uppercase font-medium text-zinc-200  text-center mt-4">Look at my <span className='text-lime-300'>Portfolio </span></h2>
<div className=' flex flex-wrap gap-11 mt-24 mx-24'>
            {ourportfolio.map((detail, index) => (
              <PagePort
                key={index}
                image={detail.image}
                brand={detail.brand}
                text={detail.text}
                
              />
            ))}
            </div>
            <div className=' flex flex-wrap gap-11 mt-24 mx-24'>
            {ourportfolio.map((detail, index) => (
              <PagePort
                key={index}
                image={detail.image}
                brand={detail.brand}
                text={detail.text}
                
              />
            ))}
            </div>
</div>
<p className='text-white text-center mt-11'>© 2023 Gavi is Proudly Powered <span className='text-lime-300 underline'>by Ui-ThemeZ </span></p> 
    </div>
  )
}

export default page