'use client'
import React from 'react'
import Image from 'next/image'
import {BsStarFill} from 'react-icons/bs'

const Testimilions = (props) => {
  return (
    <div className=' flex flex-row mx-12   '>
<div>
        <Image src={props.qout} width={90} height={90} alt='qout'/>
</div>
    <div className='flex flex-col mx-12'>
        <div className='flex  gap-4'>
            <div className='flex gap-1 justify-center items-center'>
        <BsStarFill className='text-lime-300'/>
        <BsStarFill  className='text-lime-300'/>
        <BsStarFill  className='text-lime-300'/>
        <BsStarFill  className='text-lime-300'/>
        <BsStarFill  className='text-lime-300'/>
        </div>
        <p className=' text-zinc-200'>(71 Rieviews)</p>
        </div>
        <p className=' w-[555]px h-[208px] text-[28px] font-light text-zinc-200 mt-10'> We have purchased well into the thousands of items,<br/> but this is without doubt one of the best we’ve have <br/>been lucky enough to work on, the attention to detail<br/> apparent throughout, and the delivery is impressively<br/> intuitive </p>
        <div className='flex gap-8  items-center mt-10'>
            <Image src='/images/u1.jpg' width={60} height={60} alt="" className='rounded-full'/>
            
            <div>
                <p className='text-[20px] font-medium text-lime-300'>Leonad Hesier</p>
                <p className='text-[20px] font-medium text-zinc-300'>Envato Costumer</p>
                
            </div>
            <div className='flex gap-4'>

            </div>
        </div>

    </div>
</div>
  )
}

export default Testimilions