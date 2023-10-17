
import React from 'react'
import Link from 'next/link'
import {SiBehance} from 'react-icons/Si'
import {AiOutlineTwitter} from "react-icons/ai"
import Image from 'next/image'
import{FaLinkedinIn}from"react-icons/fa"
import{BiBasketball} from "react-icons/bi"

const Navbar = () => {
  return (
    <div className='flex  justify-between py-[20px] max-w-[1280px] mx-auto pl-3 pr-3 '>
        <Image src="/images/logo-light.png" alt="logo"  height={50} width={100}></Image>
        <div className='flex  gap-2 w-33% pl-4 pr-4'>
            <div className='w-10 h-10   rounded-full text-white border bottom-2 border-gray-500 hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0'>
            <Link href="/about" className=' relative left-3 top-3 '> <SiBehance/> </Link>
            </div>
            <div className='w-10 h-10  rounded-full text-white border bottom-2 border-gray-500 hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0'>
            <Link href="/about" className='  relative left-3 top-3 '> <AiOutlineTwitter/>  </Link>
            </div>
            <div className='w-10 h-10  rounded-full text-white border bottom-2 border-gray-500 hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0'>
            <Link href="/about" className='  relative left-3 top-3 '> <FaLinkedinIn/> </Link>
            </div>
            <div className='w-10 h-10  rounded-full text-white border bottom-2 border-gray-500 hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0'>
            <Link href="/about" className=' relative left-3 top-3 '> <BiBasketball/>  </Link>
            </div>

        </div>
        <p className='text-white'>GAvi@WEBSITE.COM</p>
    </div>
  )
}

export default Navbar