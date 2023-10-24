import React from "react";
import { BsCheck } from "react-icons/bs";


const Pricing = () => {
  return (
    <div className=" max-w-[1240px] h-[1000px] mx-48  bg-zinc-900  relative top-[-650px] rounded-tr-3xl">
      <h6 className="text-center text-[14px] uppercase font-light text-zinc-400 pt-24 font-sora">
        {" "}
        Test Pricing
      </h6>
      <h3 className="text-center text-[38px]  font-mediume text-zinc-400 pt-4 font-sora">
        <span className="text-lime-300">Flexible</span> Pricing Plan
      </h3>
      <div className=" flex w-max-[1240px] relative left-[-30px] ">
        <div className="relative left-[-10px]">
          <div className="flex relative left-[64px] mt-24">
            <div className="w-[81px] h-[50px] bg-zinc-800 relative left-6"></div>
            <div className="w-0 h-0 border-t-[50px] border-b-[1px] relative  left-6  border-l-zinc-800 border-l-[50px]  border-t-transparent border-l-transparent"></div>
            <div className="w-[90px] h-[40px] rounded-[25px] bg-lime-300 left-[10px] text-center pt-1 uppercase text-[15] relative top-[-10px]"> Basic</div>
            <div className="w-0 h-0 border-t-[50px] border-t-transparent relative right-1  bg-transparent border-r-[50px] border-r-zinc-800  border-b-[1px] border-b-transparent"></div>
            <div className="w-[80px] h-[50px] bg-zinc-800 relative right-1"></div>
          </div>

          <div className="w-[322px] h-[520px] bg-zinc-800 mx-[88px]  relative top-[-5px]">
          <div className='flex  items-end mx-8 pt-7 gap-8'>
                    <p className='text-[45px] font-bold text-lime-300'>$19</p>
                    <p className=' text-[24px] font-normal  text-zinc-100'>/ hour</p>
                </div>
                <div className='w-[260px] h-[1px] bg-zinc-700 mx-6 mt-7 '></div>
                <div className='flex flex-col gap-4 mt-8'>
                <div className='flex gap-2 items-center mx-8'>
                    <BsCheck className='text-lime-300 text-[30px]'/>
                    <p className='text-[18px] text-white font-medium '>Need your wireframe</p>
                </div>
                <div className='flex gap-2 items-center mx-8'>
                    <BsCheck className='text-lime-300 text-[30px]'/>
                    <p className='text-[18px] text-white font-medium '>Design with Figma, Framer</p>
                </div>
                <div className='flex gap-2 items-start mx-8'>
                    <BsCheck className='text-lime-300 text-[30px]'/>
                    <p className='text-[18px] text-white font-medium '>Implement with Webflow,<br/> React, WordPress,<br/> Laravel/PHP</p>
                </div>
                <div className='flex gap-2 items-center mx-8'>
                    <BsCheck className='text-lime-300 text-[30px]'/>
                    <p className='text-[18px] text-white font-medium '>Support 6 months</p>
                </div>
                <bottun className="w-[171px] mx-20 rounded-[12px]   h-[50px] border border-white text-white text-center pt-3 mt-5   hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0">Get Started</bottun>
              
                </div>
          </div>
        </div>

        <div className="mt-16 relative left-[-10px]">
          <div className="flex relative left-[-64px] ">
            <div className="w-[81px] h-[50px] bg-zinc-800 relative left-6"></div>
            <div className="w-0 h-0 border-t-[50px] border-b-[1px] relative  left-6  border-l-zinc-800 border-l-[50px]  border-t-transparent border-l-transparent"></div>
            <div className="w-[110px] h-[40px] rounded-[25px] bg-lime-300  relative top-[-10px] text-center pt-1 uppercase text-[15]">popular</div>
            <div className="w-0 h-0 border-t-[50px] border-t-transparent relative right-6  bg-transparent border-r-[50px] border-r-zinc-800  border-b-[1px] border-b-transparent"></div>
            <div className="w-[80px] h-[50px] bg-zinc-800 relative right-6"></div>
          </div>

          <div className="w-[322px] h-[580px] bg-zinc-800 mx-[88px]  relative left-[-128px] top-[-5px]">
          <div className='flex  items-end mx-8 pt-7 gap-8'>
                    <p className='text-[45px] font-bold text-lime-300'>$39</p>
                    <p className=' text-[24px] font-normal  text-zinc-100'>/ hour</p>
                </div>
                <div className='w-[260px] h-[1px] bg-zinc-700 mx-6 m-7 '></div>
                <div className='flex flex-col gap-4 mt-8'>
                <div className='flex gap-2 items-center mx-8'>
                    <BsCheck className='text-lime-300 text-[30px]'/>
                    <p className='text-[18px] text-white font-medium '>Need your wireframe</p>
                </div>
                <div className='flex gap-2 items-center mx-8'>
                    <BsCheck className='text-lime-300 text-[30px]'/>
                    <p className='text-[18px] text-white font-medium '>Design with Figma, Framer</p>
                </div>
                <div className='flex gap-2 items-start mx-8'>
                    <BsCheck className='text-lime-300 text-[30px]'/>
                    <p className='text-[18px] text-white font-medium '>Implement with Webflow,<br/> React, WordPress,<br/> Laravel/PHP</p>
                </div>
                <div className='flex gap-2 items-center mx-8'>
                    <BsCheck className='text-lime-300 text-[30px]'/>
                    <p className='text-[18px] text-white font-medium '>Support 6 months</p>
                </div>
                <div className='flex gap-2 items-center mx-8'>
                    <BsCheck className='text-lime-300 text-[30px]'/>
                    <p className='text-[18px] text-white font-medium '>Your project alway be priority</p>
                </div>
                <bottun className="w-[171px] mx-20 rounded-[12px]   h-[50px] border border-white text-white text-center pt-3 mt-5   hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0">Get Started</bottun>
                </div>
          </div>
        </div>

         <div className="relative left-[-10px]">
          <div className="flex relative left-[-194px] mt-24">
            <div className="w-[81px] h-[50px] bg-zinc-800 relative left-6"></div>
            <div className="w-0 h-0 border-t-[50px] border-b-[1px] relative  left-6  border-l-zinc-800 border-l-[50px]  border-t-transparent border-l-transparent"></div>
            <div className="w-[110px] h-[40px] rounded-[25px] bg-lime-300  relative top-[-10px] text-center pt-1 uppercase text-[15]">medium</div>
            <div className="w-0 h-0 border-t-[50px] border-t-transparent relative right-6  bg-transparent border-r-[50px] border-r-zinc-800  border-b-[1px] border-b-transparent"></div>
            <div className="w-[80px] h-[50px] bg-zinc-800 relative right-6"></div>
          </div>

          <div className="w-[322px] h-[520px] bg-zinc-800 mx-[88px]  relative left-[-258px] top-[-5px]">
          <div className='flex  items-end mx-8 pt-7 gap-8'>
                    <p className='text-[45px] font-bold text-lime-300'>$59</p>
                    <p className=' text-[24px] font-normal  text-zinc-100'>/ hour</p>
                </div>
                <div className='w-[260px] h-[1px] bg-zinc-700 mx-6 mt-7 '></div>
                <div className='flex flex-col gap-4 mt-8'>
                <div className='flex gap-2 items-center mx-8'>
                    <BsCheck className='text-lime-300 text-[30px]'/>
                    <p className='text-[18px] text-white font-medium '>Need your wireframe</p>
                </div>
                <div className='flex gap-2 items-center mx-8'>
                    <BsCheck className='text-lime-300 text-[30px]'/>
                    <p className='text-[18px] text-white font-medium '>Design with Figma, Framer</p>
                </div>
                <div className='flex gap-2 items-start mx-8'>
                    <BsCheck className='text-lime-300 text-[30px]'/>
                    <p className='text-[18px] text-white font-medium '>Implement with Webflow,<br/> React, WordPress,<br/> Laravel/PHP</p>
                </div>
                <div className='flex gap-2 items-center mx-8'>
                    <BsCheck className='text-lime-300 text-[30px]'/>
                    <p className='text-[18px] text-white font-medium '>Support 6 months</p>
                </div>
                <bottun className="w-[171px] mx-20 rounded-[12px]   h-[50px] border border-white text-white text-center pt-3 mt-5   hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0">Get Started</bottun>
                
          </div>
          
        </div>
    </div>
    </div>
    </div>
  );
};

export default Pricing;
