import React from 'react'
import Image from 'next/image'
import {FaCalendarAlt} from 'react-icons/fa'
import {FaComments} from 'react-icons/fa'
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link';

const BlogCard = (props) => {
  return (
    <div className='border border-zinc-800  w-[346px] h-[540px] bg-transparent'>
        <Image src={props.image} width={346} height={252} alt="blog"/>
        <div className='w-[330px] h-[227px] bg-zinc-800 rounded-[12px] ml-[7px]  relative top-[-30px]'>
            <div className=' w-[145px] h-[30px] rounded-[40px] border  border-zinc-700  relative top-[40px] left-[40px] '>
                <div className='flex  justify-center   items-center gap-4 ml-2'>
                    <FaCalendarAlt className=' text-lime-300'/>
                    <p className='text-zinc-300'>{props.date}</p>
                </div>
                <p className="text-[22px] font-Sora mt-4  font-medium  text-zinc-300 underline w-[250px] tracking-widest leading-[30px] hover:text-lime-300  ">{props.title}</p>
            </div>
        </div>
        <div className='w-[295px] h-[50px] bg-tranparent ml-[20px]  mt-[-20px] flex justify-between'>
            <div className='flex gap-2 items-center  mx-2'>
                <FaComments className=' text-zinc-300'/>
                <p className='text-[13px] font-Sora text-zinc-300 font-normal'>2comments</p>
            </div>
            <div  className='flex gap-2 items-center  mx-2'>
            <p className='text-[13px] text-zinc-300  font-Sora font-normal'>Read more</p>
           <Link href='/pages/blog'> <BsArrowRight className=' text-zinc-300'/> </Link>
            </div>
        </div>

    </div>
  )
}

export default BlogCard