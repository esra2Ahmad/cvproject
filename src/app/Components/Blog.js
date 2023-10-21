import React from 'react'
import {GoArrowUpRight} from 'react-icons/go'
import Link from 'next/link'
import { blog } from '@/constants'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className=" max-w-[1280px] h-[400px] mx-auto  bg-zinc-900  relative top-[-350px]">
        <div className="flex justify-between mx-24  relative top-[-350px]">
        <div className="w-[520px] h-[13px]">
          <h6 className="text-[14px] uppercase font-light text-zinc-300 tracking-[3px]">
            Our Blog
          </h6>
          <h3 className="text-[38px] uppercase font-medium text-zinc-200 tracking-[3px]">
          Latest News & {" "}
            <span className="text-lime-300">Blogk</span>
          </h3>
        </div>
        <div className="w-[140px] h-[21px] flex justify-between items-center">
          <p className="text-[14px] font-normal text-zinc-200">
            view All Works
          </p>
        <Link href="/pages/post"><GoArrowUpRight className="text-zinc-200 text-[30px]"/></Link>
        </div>
      </div>
      <div className=' flex mx-24 gap-6 relative top-[-300px]'>
        <div className=' flex   justify-between mt-11  gap-16'>
        {blog.map((detail, index) => (
              <BlogCard
                key={index}
                image={detail.image}
                date={detail.date}
                title={detail.title}
               
              />
            ))}
        </div>

      </div>
      <p className='text-white text-center relative top-[-130px]'>© 2023 Gavi is Proudly Powered <span className='text-lime-300 underline'>by Ui-ThemeZ </span></p>
    </div>
  )
}

export default Blog