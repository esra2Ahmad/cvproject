import React from 'react'
import {SiBehance} from 'react-icons/Si'
import {AiOutlineTwitter} from "react-icons/ai"
import Image from 'next/image'
import{FaLinkedinIn}from"react-icons/fa"
import{BiBasketball} from "react-icons/bi"
import Link from 'next/link'
import Navlinks from './Navlinks'

const About = () => {
  return (
    <div className=' w-[1240px]  h-[650px]  mx-[149px] bg-zinc-900 rounded-[12px] m-0'>
    <div className='  flex justify-between pl-3 pr-3'>
        <div className='w-[418px]   '>
            <div className='w-[338.667px] h-[536.85px] border  border-zinc-700 relative  top-20 left-10 rounded-[12px]'>
                <div>
                <Image src="/images/profile.jpg" width={306} height={306} alt="profile" className='mx-4 mt-4 '/>
                 <Image src="/images/icon1.png" width={40} height={40} alt="figma" className=' rounded-[12px]  relative top-[-280px]  left-[-4px] rotate-12 px-2 py-2  bg-gradient-to-r from-zinc-800 via-zinc-500 to-white'/>
                <Image src="/images/icon2.png" width={40} height={40} alt="figma" className=' rounded-[12px] relative top-[-240px]  left-[306px] rotate-12 px-2 py-2 bg-gradient-to-r from-white via-zinc-500 to-zinc-800'/>
                <Image src="/images/icon4.png" width={40} height={40} alt="figma" className=' relative top-[-150px]  left-[40px]  -rotate-12 px-2 py-2'/>
                </div>
                <div className='relative top-[-100px] flex flex-col gap-4'>
                <h1 className='text-center text-[24px] font-medium leading-[22px] text-white font-Sora'>Pablo Gavi</h1>
                <h3 className='text-center text-[13px] font-light leading-7 text-white font-Popins '>AVILABLE FOR FREE LANCE</h3>
                </div>
                <div className='flex  gap-2 w-33% pl-4 pr-4 relative top-[-70px] items-center justify-center'>
            <div className='w-[45px] h-[45px] rounded-[5px]  text-white border bottom-2 border-slate-400 hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0'>
            <Link href="/about" className=' relative left-3 top-3 '> <SiBehance/> </Link>
            </div>
            <div className='w-[45px] h-[45px] rounded-[5px] text-white border bottom-2 border-slate-400 hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0'>
            <Link href="/about" className='  relative left-3 top-3 '> <AiOutlineTwitter/>  </Link>
            </div>
            <div className='w-[45px] h-[45px] rounded-[5px]   text-white border bottom-2 border-slate-400 hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0'>
            <Link href="/about" className='  relative left-3 top-3 '> <FaLinkedinIn/> </Link>
            </div>
            <div className='w-[45px] h-[45px] rounded-[5px]   text-white border bottom-2 border-slate-400 hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0'>
            <Link href="/about" className=' relative left-3 top-3 '> <BiBasketball/>  </Link>
            </div>

        </div>
            </div>
        </div>
        <div className='w-[857px] h-[287px] pl-24 pt-4'>
            <h1 className=' text-[55px] font-medium  text-white  space-y-1  mt-16 font-Sora'>
            Hello, I’m<span className=' text-lime-300 font-medium'> Pablo Gavi,</span> <br/> Front-end Developer and<br/> UX / UI Designer
Based in<br/> California
            </h1>
            <div className='flex gap-10 w-[757px] h-[91px] mt-20 '>
                <div className='flex justify-center items-center gap-2'>
                <h2 className='text-[70px] font-medium leading-[20px] text-white'>14</h2>
                <p className='text-[15px] font-light leading-[25px] text-white font-Popins  '> Years <br/>Of Exprience</p>
                </div>
                <div className='flex  items-center gap-3'>
                <h2 className='text-[70px] font-medium leading-[20px] text-white'>6K</h2>
                <p className='text-[15px] font-light leading-[25px] text-white  font-Popins '> Clients <br/>WorldWide</p>
                </div>
                
                <bottun className="w-[171px]    h-[50px] border border-white text-white text-center pt-3 mt-5   hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0">Download c.v</bottun>
            
            </div>
        </div>
        
    </div>
   
    </div>
  )
}

export default About