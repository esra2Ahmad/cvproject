import React from 'react'
import Image from 'next/image'
import { skills } from '@/constants'
import SkillsCard from './SkillsCard'

const Skilles = () => {
  return (
    <div className=' max-w-[1280px] h-[900px] mx-auto  bg-zinc-900 '>
        <div className='flex gap-11  py-11  w-full   justify-center items-center'>
            <div className='w-[343px] h-[239px] space-y-3 flex flex-col justify-center '>
                <h6 className='text-[14px] uppercase font-light tracking-normal text-zinc-500'> Our Skills</h6>
                <p className='text-[38px] uppercase font-medium tracking-normal text-zinc-100'><span className='text-lime-300'>Awards</span> & Recognitions</p>
            </div>
            <div  className='w-[343px] h-[239px] flex flex-col gap-10   '>
                <div className='w-[343px] h-[136px] border border-zinc-800 rounded-[12px]  '>
                    <div className='w-[50px] h-[28px] rounded-[28px] border border-zinc-800   ml-[270px] mt-3'><p className='text-center text-zinc-200'>95%</p></div>
                    <div className='flex gap-4 justify-start items-center   ml-8'>
                    <Image src='/images/s1.png' width={40} height={40} alt="skill1" className=' '/>
                    <p className='text-[18px]  font-normal tracking-normal text-zinc-300 ml-6 hover:select-all'>UI / UX Design</p>
                    </div>
                    <div className=' h-[2px] w-[300px] ml-5 bg-zinc-800 relative top-4  '>
                    <span    className=' block bg-zinc-300 h-full w-11/12'></span>
                    </div>
                </div>
                <div className='w-[343px] h-[136px] border border-zinc-800 rounded-[12px]  '>
                    <div className='w-[50px] h-[28px] rounded-[28px] border border-zinc-800   ml-[270px] mt-3'><p className='text-center text-zinc-200'>85%</p></div>
                    <div className='flex gap-4 justify-start items-center   ml-8'>
                    <Image src='/images/s3.png' width={40} height={40} alt="skill1" className=' '/>
                    <p className='text-[18px]  font-normal tracking-normal text-zinc-300 ml-6 hover:select-all'>Word Press</p>
                    </div>
                    <div className=' h-[2px] w-[300px] ml-5 bg-zinc-800 relative top-4  '>
                    <span    className=' block bg-zinc-300 h-full  w-[85%]'></span>
                    </div>
                </div>
           
           
           
            </div>
            <div  className='w-[343px] h-[239px] flex flex-col gap-10   '>
                <div className='w-[343px] h-[136px] border border-zinc-800 rounded-[12px]  '>
                    <div className='w-[50px] h-[28px] rounded-[28px] border border-zinc-800   ml-[270px] mt-3'><p className='text-center text-zinc-200'>80%</p></div>
                    <div className='flex gap-4 justify-start items-center   ml-8'>
                    <Image src='/images/s2.png' width={40} height={40} alt="skill1" className=' '/>
                    <p className='text-[18px]  font-normal tracking-normal text-zinc-300 ml-6 hover:select-all'>Development</p>
                    </div>
                    <div className=' h-[2px] w-[300px] ml-5 bg-zinc-800 relative top-4  '>
                    <span    className=' block bg-zinc-300 h-full w-[80%]'></span>
                    </div>
                
                </div>
                <div className='w-[343px] h-[136px] border border-zinc-800 rounded-[12px]  '>
                    <div className='w-[50px] h-[28px] rounded-[28px] border border-zinc-800   ml-[270px] mt-3'><p className='text-center text-zinc-200'>78%</p></div>
                    <div className='flex gap-4 justify-start items-center   ml-8'>
                    <Image src='/images/s4.png' width={40} height={40} alt="skill1" className=' '/>
                    <p className='text-[18px]  font-normal tracking-normal text-zinc-300 ml-6 hover:select-all'>WordPress</p>
                    </div>
                    <div className=' h-[2px] w-[300px] ml-5 bg-zinc-800 relative top-4  '>
                    <span    className=' block bg-zinc-300 h-full w-[78%]'></span>
                    </div>
                </div>
            </div>

        </div>

        
        
        <div className='  flex   justify-between mt-11   mx-24  gap-16'>
            {skills.map((detail, index) => (
              <SkillsCard
                key={index}
                image={detail.image}
                name={detail.name}
                number={detail.number}
                year={detail.year}
                title={detail.title}
              />
            ))}
            </div>
            <div className='w-full h-[1px] bg-zinc-800 mt-24'></div>
        </div>
    
  )
}

export default Skilles