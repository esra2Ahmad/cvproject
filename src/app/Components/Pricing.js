import React from "react";
import { BsCheck } from "react-icons/bs";

const Pricing = () => {
  return (
    <div className=" w-[1240px] h-[1000px] mx-[139px] bg-zinc-900  relative  rounded-tr-3xl">
      <h6 className="text-center text-[14px] uppercase font-normal text-zinc-400 pt-24 font-sora tracking-[2px]">
        {" "}
        Best Pricing
      </h6>
      <h3 className="text-center text-[38px]  font-mediume text-zinc-400 pt-4 font-sora">
        <span className="text-lime-300">Flexible</span> Pricing Plan
      </h3>
      <div className="flex ">
        <div className="ml-[-30px]">
          <div className="flex relative left-[64px] mt-24">
            <div className="w-[82px] h-[60px] bg-zinc-800 ml-6"></div>
            <div className="w-0 h-0 border-t-[60px] border-b-[1px]   border-l-zinc-800 border-l-[60px]  border-t-transparent border-l-transparent"></div>
            <div className="w-[51px] h-1">
              <div className="w-[90px] h-[40px] rounded-[25px] bg-lime-300 ml-[-20px] mt-1 uppercase text-center pt-2 font-Sora text-zinc-800 font-medium text-[14px]">
                basic
              </div>
            </div>
            <div className="w-0 h-0 border-t-[60px] border-t-transparent  bg-transparent border-r-[60px] border-zinc-800  border-b-[1px] border-b-transparent"></div>
            <div className="w-[82px] h-[60px] bg-zinc-800 mr-6 "></div>
          </div>

          <div className="w-[335px] h-[500px] bg-zinc-800 mx-[88px]  relative top-[-5px]">
            <div className="flex  items-end mx-8 pt-4 gap-8">
              <p className="text-[45px] font-bold text-lime-300">$19</p>
              <p className=" text-[24px] font-normal  text-zinc-100">/ hour</p>
            </div>
            <div className="w-[260px] h-[1px] bg-zinc-700 mx-6 mt-11 "></div>
            <div className="flex flex-col gap-4 mt-11">
              <div className="flex gap-2 items-center mx-8 ">
                <BsCheck className="text-lime-300 text-[30px]" />
                <p className="text-[14px] text-white font-medium font-Sora first-letter:uppercase">
                  Need Your Wireframe
                </p>
              </div>
              <div className="flex gap-2 items-center mx-8">
                <BsCheck className="text-lime-300 text-[30px]" />
                <p className="text-[14px] text-white font-medium font-Sora first-letter:uppercase">
                  Design With Figma, Framer
                </p>
              </div>
              <div className="flex gap-2 items-start mx-8">
                <BsCheck className="text-lime-300 text-[30px]" />
                <p className="text-[14px] text-white font-medium font-Sora first-letter:uppercase ">
                  Implement With Webflow,
                  <br /> React, WordPress,
                  <br /> Laravel/PHP
                </p>
              </div>
              <div className="flex gap-2 items-center mx-8">
                <BsCheck className="text-lime-300 text-[30px]" />
                <p className="text-[14px] text-white font-medium font-Sora first-letter:uppercase ">
                  Support 6 Months
                </p>
              </div>
              <bottun className="w-[171px] mx-20 rounded-[12px] text-[14px] font-Sora uppercase  h-[50px] border border-white text-white text-center pt-3 mt-5   hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0">
                Get Started
              </bottun>
            </div>
          </div>
        </div>
        <div className="ml-[-120px] mt-[-25px]">
          <div className="flex relative left-[64px] mt-24">
            <div className="w-[82px] h-[60px] bg-zinc-800 ml-6"></div>
            <div className="w-0 h-0 border-t-[60px] border-b-[1px]   border-l-zinc-800 border-l-[60px]  border-t-transparent border-l-transparent"></div>
            <div className="w-[51px] h-1">
              <div className="w-[110px] h-[40px] rounded-[25px] bg-lime-300 ml-[-30px] mt-1 uppercase text-center pt-2 font-Sora text-zinc-800 font-medium text-[14px]">
                popular
              </div>
            </div>
            <div className="w-0 h-0 border-t-[60px] border-t-transparent  bg-transparent border-r-[60px] border-zinc-800  border-b-[1px] border-b-transparent"></div>
            <div className="w-[82px] h-[60px] bg-zinc-800 mr-6 "></div>
          </div>

          <div className="w-[335px] h-[550px] bg-zinc-800 mx-[88px]  relative top-[-5px]">
            <div className="flex  items-end mx-8 pt-4 gap-8">
              <p className="text-[45px] font-bold text-lime-300">$39</p>
              <p className=" text-[24px] font-normal  text-zinc-100">/ hour</p>
            </div>
            <div className="w-[260px] h-[1px] bg-zinc-700 mx-6 mt-11 "></div>
            <div className="flex flex-col gap-4 mt-11">
              <div className="flex gap-2 items-center mx-8 ">
                <BsCheck className="text-lime-300 text-[30px]" />
                <p className="text-[14px] text-white font-medium font-Sora first-letter:uppercase">
                  Need Your Wireframe
                </p>
              </div>
              <div className="flex gap-2 items-center mx-8">
                <BsCheck className="text-lime-300 text-[30px]" />
                <p className="text-[14px] text-white font-medium font-Sora first-letter:uppercase">
                  Design With Figma, Framer
                </p>
              </div>
              <div className="flex gap-2 items-start mx-8">
                <BsCheck className="text-lime-300 text-[30px]" />
                <p className="text-[14px] text-white font-medium font-Sora first-letter:uppercase ">
                  Implement With Webflow,
                  <br /> React, WordPress,
                  <br /> Laravel/PHP
                </p>
              </div>
              <div className="flex gap-2 items-center mx-8">
                <BsCheck className="text-lime-300 text-[30px]" />
                <p className="text-[14px] text-white font-medium font-Sora first-letter:uppercase ">
                  Support 6 Months
                </p>
              </div>
              <div className="flex gap-2 items-center mx-8">
                <BsCheck className="text-lime-300 text-[30px]" />
                <p className="text-[14px] text-white font-medium font-Sora first-letter:uppercase ">
                Your project alway be priority
                </p>
              </div>
              <bottun className="w-[171px] mx-20 rounded-[12px] text-[14px] font-Sora uppercase  h-[50px] border border-white text-white text-center pt-3 mt-5   hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0">
                Get Started
              </bottun>
            </div>
          </div>
        </div>
       
        <div className="ml-[-120px]">
          <div className="flex relative left-[64px] mt-24">
            <div className="w-[82px] h-[60px] bg-zinc-800 ml-6"></div>
            <div className="w-0 h-0 border-t-[60px] border-b-[1px]   border-l-zinc-800 border-l-[60px]  border-t-transparent border-l-transparent"></div>
            <div className="w-[51px] h-1">
              <div className="w-[108px] h-[40px] rounded-[25px] bg-lime-300 ml-[-30px] mt-1 uppercase text-center pt-2 font-Sora text-zinc-800 font-medium text-[14px]">
                premium
              </div>
            </div>
            <div className="w-0 h-0 border-t-[60px] border-t-transparent  bg-transparent border-r-[60px] border-zinc-800  border-b-[1px] border-b-transparent"></div>
            <div className="w-[82px] h-[60px] bg-zinc-800 mr-6 "></div>
          </div>

          <div className="w-[335px] h-[500px] bg-zinc-800 mx-[88px]  relative top-[-5px]">
            <div className="flex  items-end mx-8 pt-4 gap-8">
              <p className="text-[45px] font-bold text-lime-300">$19</p>
              <p className=" text-[24px] font-normal  text-zinc-100">/ hour</p>
            </div>
            <div className="w-[260px] h-[1px] bg-zinc-700 mx-6 mt-11 "></div>
            <div className="flex flex-col gap-4 mt-11">
              <div className="flex gap-2 items-center mx-8 ">
                <BsCheck className="text-lime-300 text-[30px]" />
                <p className="text-[14px] text-white font-medium font-Sora first-letter:uppercase">
                  Need Your Wireframe
                </p>
              </div>
              <div className="flex gap-2 items-center mx-8">
                <BsCheck className="text-lime-300 text-[30px]" />
                <p className="text-[14px] text-white font-medium font-Sora first-letter:uppercase">
                  Design With Figma, Framer
                </p>
              </div>
              <div className="flex gap-2 items-start mx-8">
                <BsCheck className="text-lime-300 text-[30px]" />
                <p className="text-[14px] text-white font-medium font-Sora first-letter:uppercase ">
                  Implement With Webflow,
                  <br /> React, WordPress,
                  <br /> Laravel/PHP
                </p>
              </div>
              <div className="flex gap-2 items-center mx-8">
                <BsCheck className="text-lime-300 text-[30px]" />
                <p className="text-[14px] text-white font-medium font-Sora first-letter:uppercase ">
                  Support 6 Months
                </p>
              </div>
              <bottun className="w-[171px] mx-20 rounded-[12px] text-[14px] font-Sora uppercase  h-[50px] border border-white text-white text-center pt-3 mt-5   hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0">
                Get Started
              </bottun>
            </div>
          </div>
        </div>
        

        
      </div>
      <div className="w-full h-[1px] bg-zinc-800 mt-24"></div>
    </div>
  );
};

export default Pricing;
