import React from 'react'
import Image from 'next/image'


const CardServices = (props) => {
  return (
    <div className='w-[540px] h-[280px]   border border-zinc-700 rounded-[12px]  hover:border-b-lime-300  hover:shadow-[inset_0px_-87px_46px_-115px_#B2FF66]' >
        <div className='flex flex-col gap-6 mx-11 my-11 z-10'>
        < Image src={props.image} width={70} height={70} alt='1'/>
        <h6 className='text-[18px] font-normal text-white font-Sora'>{props.name}</h6>
        <p className='text-[15px] font-light text-gray font-Popins'>{props.text}</p>
        <p></p>
        </div>


    </div>
  )
}

export default CardServices