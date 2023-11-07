
import React from 'react'
import Link from 'next/link'

const Navlinks = () => {
  return (
    <div className='w-[600px] list-none flex gap-6 mt-11  ml-20  cursor-pointer'>
        
            <li className='text-white text-[14px] font-Sora uppercase '><Link href="/about">Home</Link></li>
            <li className='text-white text-[14px] font-Sora uppercase '><Link href="#services">Services</Link></li>
            <li className='text-white text-[14px] font-Sora uppercase'><Link href="#about">About</Link></li>
            <li className='text-white text-[14px] font-Sora uppercase '><Link href="#ourportfolio">Portfile</Link></li>
            <li className='text-white text-[14px] font-Sora  uppercase'><Link href="/about">Price</Link></li>
            <li className='text-white text-[14px] font-Sora uppercase'><Link href="/about">Contact</Link></li>
            <li className='text-white text-[14px] font-Sora uppercase'><Link href="/about">Blog</Link></li>
            
        
    </div>
  )
}

export default Navlinks