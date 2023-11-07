import React from 'react'
import {GoArrowUpRight} from 'react-icons/go'
import Link from 'next/link'
import { blog } from '@/constants'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className=" w-[1240px] h-[860px] mx-[139px] bg-zinc-900 ">
        <div className="flex justify-between items-center mx-16 pt-14  ">
        <div className="w-[520px] flex flex-col gap-3">
          <h6 className="text-[14px] uppercase font-light text-zinc-300 tracking-[3px]  font-Sora">
            Our Blog
          </h6>
          <h3 className="text-[38px] uppercase font-medium text-zinc-200 tracking-[3px] font-Sora">
          Latest News & {" "}
            <span className="text-lime-300">Blog</span>
          </h3>
        </div>
        <div className="w-[140px] h-[21px] flex justify-between items-center">
          <p className="text-[14px] font-normal text-zinc-200">
            view All Works
          </p>
        <Link href="/pages/post"><GoArrowUpRight className="text-zinc-200 text-[30px]"/></Link>
        </div>
      </div>
      <div className=' flex ml-16 gap-11 mt-24'>
        <div className=' flex   justify-between  gap-8 '>
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
     
    </div>
  )
}

export default Blog