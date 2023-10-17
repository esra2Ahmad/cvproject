import React from 'react'
import Image from 'next/image'

const CardServices = (props) => {
  return (
    <div className=' grid grid-cols-2 gap-6'>
        <div className='flex flex-col gap-4'>
        < Image src={props.image} width={70} height={70} alt='1'/>
        <h3>{props.name}</h3>
        <p>{props.text}</p>
        </div>

    </div>
  )
}

export default CardServices