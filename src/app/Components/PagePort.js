import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {GoArrowUpRight} from 'react-icons/go'

const PortfolioCard = (props) => {
  return (
    <div>
        <div className='w-[510px] h-[402px] hover:border hover:border-lime-200  rounded-[12px]  '>
       <Image src={props.image} sizes='100vw' height={0} width={0} className=' mx-1 my-1 w-[500px] h-[395px] rounded-[12px]' alt=""/>
        </div>
        <div className='flex justify-between items-center mx-2'>
        <div>
        <button className='w-[87px] h-[29px] rounded-[12px] border mt-6 border-zinc-800 text-zinc-100 hover:bg-lime-300 hover:text-black'>{props.brand}</button>
        <p className='text-[28px] text-zinc-300 font-bold mt-4'>{props.text}</p>
        </div>
         <Link href='../pages/firstLayer'><GoArrowUpRight className='text-[38px] text-zinc-300'/></Link>
        </div>
        

    </div> 
  )
}

export default PortfolioCard