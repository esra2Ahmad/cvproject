import React from 'react'
import Image from 'next/image'

const SkillsCard = (props) => {
  return (
    <div className='w-[335px] h-[342px]   bg-zinc-800 rounded-[12px] flex flex-col gap-4 '>
      <div className='flex justify-between mt-6 mx-11'>
        <p className='text-zinc-200  inline-block '>{props.number}</p>
        <p className='text-zinc-200  '>{props.year}</p>
      </div>
      <Image src={props.image} width={100} height={68} alt="ooo" className='mt-20 mx-11'/>
      <h6 className='mx-11 mt-3 text-[18px] font-normal leading-[20px] w-[225px]  tracking-wide text-zinc-200'>{props.title}</h6>
      <p className='mx-11 mt-3 text-[18px] font-normal leading-[20px] w-[225px]  tracking-wide text-lime-300'>{props.name}</p>
    </div>
  )
}

export default SkillsCard