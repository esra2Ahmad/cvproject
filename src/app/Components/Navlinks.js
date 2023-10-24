
import React from 'react'
import Link from 'next/link'

const Navlinks = () => {
  return (
    <div className='w-[600px] list-none flex  justify-between relative top-[-70px] left-[490px] cursor-pointer'>
        
            <li className='text-white text-[14px] '><Link href="/about">Home</Link></li>
            <li className='text-white text-[14px]'><Link href="#services">Services</Link></li>
            <li className='text-white text-[14px]'><Link href="#about">About</Link></li>
            <li className='text-white text-[14px]'><Link href="#ourportfolio">Portfile</Link></li>
            <li className='text-white text-[14px]'><Link href="/about">Price</Link></li>
            <li className='text-white text-[14px]'><Link href="/about">Contact</Link></li>
            <li className='text-white text-[14px]'><Link href="/about">Blog</Link></li>
            
        
    </div>
  )
}

export default Navlinks