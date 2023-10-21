import React from "react";
import Image from "next/image";
import Link from "next/link";
import {BsArrowReturnRight} from 'react-icons/bs'
import {FaCalendarAlt} from 'react-icons/fa'
import {BsListUl} from 'react-icons/bs'
import {BsPerson} from 'react-icons/bs'
import {BsGlobe}  from 'react-icons/bs'
import {BsArrowLeft} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'



const page = () => {
  return (
    <div className=" bg-zinc-800  w-full  h-[2800px]">
      <div className="pt-8 mx-24 flex  gap-[550px] items-center">
        <Image
          src="/images/logo-light.png"
          alt="logo"
          height={50}
          width={100}
        ></Image>
        <div className="w-[600px] list-none flex  justify-between  cursor-pointer">
          <li className="text-white text-[14px] ">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white text-[14px]">
            <Link href="#services">Services</Link>
          </li>
          <li className="text-white text-[14px]">
            <Link href="#about">About</Link>
          </li>
          <li className="text-white text-[14px]">
            <Link href="#ourportfolio">Portfile</Link>
          </li>
          <li className="text-white text-[14px]">
            <Link href="/about">Price</Link>
          </li>
          <li className="text-white text-[14px]">
            <Link href="/about">Contact</Link>
          </li>
          <li className="text-white text-[14px]">
            <Link href="/about">Blog</Link>
          </li>
        </div>
      </div>
      <div className=" max-w-[1280px] bg-zinc-900 h-[2400px] mx-24 rounded-[12px]  mt-20">
        <Image
          src="/images/layer1.png"
          width={993}
          height={616}
          alt="layer"
          className="mx-32 pt-24"
        />
        <div className="flex  ml-40 gap-11 mt-24">
          <div className="w-[552px] h-[643px]">
            <h1 className="font- bold text-[38px] text-zinc-100">
              The First layer.
            </h1>
            <p className="text-[15px] mt-4 font-light space-y-2 text-zinc-300 leadind-[30px] tracking-widest">
              We create everything digital, printable and analytical won’t
              seasons,
              <br /> appear days them stars replenish divided. All second forth.
              Him place
              <br /> was seas man and gathering creepeth called fly.
              <br />
            </p>
            <p className="text-[15px] font-light  text-zinc-300 leadind-[30px] tracking-widest mt-8 space-y-2">
              Now there is more fashion. There is no so-called trends. Now chase
              <br />
              after anything not necessary — nor for fashionable color nor the
              <br />
              shape, nor for style. Think about the content that you want to
              invest in
              <br /> a created object, and only then will form. The thing is
              <br />
              your spirit
              <br />
            </p>
            <p className="text-[18px] font-normal  text-zinc-100 leadind-[30px] tracking-wider mt-8 space-y-2">
              Here choose yourself like that, without any looking back
              <br />,do your personal,home,small fashion,and all will be well.
              <br />
            </p>
            <p className="text-[15px] mt-8 font-light space-y-2 text-zinc-300 leadind-[30px] tracking-widest">
              We create everything digital, printable and analytical won’t
              seasons,
              <br /> appear days them stars replenish divided. All second forth.
              Him place
              <br /> was seas man and gathering creepeth called fly.
              <br />
            </p>
            <div>
                <div className="flex gap-4 items-center mt-11">
                    <BsArrowReturnRight className="text-zinc-100"/>
                    <p className="text-[18px] font-medium text-zinc-100 leading-[20px]"> Amazing communication.</p>
                </div>
                <div className="flex gap-4 items-center mt-11">
                    <BsArrowReturnRight className="text-zinc-100"/>
                    <p className="text-[18px] font-medium text-zinc-100 leading-[20px]">  Best trendinf designing experience.</p>
                </div>
                <div className="flex gap-4 items-center mt-11">
                    <BsArrowReturnRight className="text-zinc-100"/>
                    <p className="text-[18px] font-medium text-zinc-100 leading-[20px]"> Email & Live chat.</p>
                </div>
                <div className="flex gap-4 items-center mt-11">
                    <BsArrowReturnRight className="text-zinc-100"/>
                    <p className="text-[18px] font-medium text-zinc-100 leading-[20px]"> Amazing communication.</p>
                </div>
            </div> 

          </div>
          <div className="w-[316px] h-[360px] bg-zinc-800 border border-zinc-700 rounded-[7px]">
            <div className=" flex flex-col  mx-6 mt-8">
                <div className="flex gap-4 item center ">
                    <FaCalendarAlt className="text-zinc-100"/>
                    <p className="text-[15px] font-bold leading-[20px] text-zinc-100 uppercase tracking-wide">Date</p>
                </div>
                
                <p className="text-[15px] font-light leading-[20px] text-zinc-300 mt-3">6, August 2022</p>
            </div>
            <div className=" flex flex-col  mx-6 mt-8">
                <div className="flex gap-4 item center ">
                    <BsListUl className="text-zinc-100"/>
                    <p className="text-[15px] font-bold leading-[20px] text-zinc-100 uppercase tracking-wide">Categories:</p>
                </div>
                
                <p className="text-[15px] font-light leading-[20px] text-zinc-300 mt-3">Web Design</p>
            </div>
            <div className=" flex flex-col  mx-6 mt-8">
                <div className="flex gap-4 item center ">
                    <BsPerson className="text-zinc-100"/>
                    <p className="text-[15px] font-bold leading-[20px] text-zinc-100 uppercase tracking-wide">Clients:</p>
                </div>
                
                <p className="text-[15px] font-light leading-[20px] text-zinc-300 mt-3">Themeforest</p>
            </div>
            <div className=" flex flex-col  mx-6 mt-8">
                <div className="flex gap-4 item center ">
                    <BsGlobe className="text-zinc-100"/>
                    <p className="text-[15px] font-bold leading-[20px] text-zinc-100 uppercase tracking-wide">Website:</p>
                </div>
                
                <p className="text-[15px] font-light leading-[20px] text-zinc-300 mt-3">UI_ThemeZ.com</p>
            </div>
          </div>
        </div>
        <div className="flex ml-36  gap-24 pt-64">
            <Image src='/images/layer2.png' width={436}  height={291} alt='layer2'/>
            <Image src='/images/layer3.png' width={436}  height={291} alt='layer2'/>
        </div>
        <div className=' w-3/4 mx-36  h-[1px] bg-zinc-800 mt-24'></div>
        <div className="flex justify-between mx-36 mt-24">
            <div className="flex gap-3 items-center">
                <BsArrowLeft className="text-zinc-100 font-bold  hover:text-lime-300"/>
                <p className="text-zinc-100 font-medium text-[18px] leading-[20px] hover:text-lime-300">Prev Project</p>

            </div>
            <div className="flex gap-3 items-center">
            <p className="text-zinc-100 font-medium text-[18px] leading-[20px] hover:text-lime-300">Next Project</p>
                < BsArrowRight className="text-zinc-100 font-bold  hover:text-lime-300"/>
               
            </div>
        </div>
      </div>
      <p className="text-white text-center mt-11">
        © 2023 Gavi is Proudly Powered{" "}
        <span className="text-lime-300 underline">by Ui-ThemeZ </span>
      </p>
    </div>
  );
};

export default page;
