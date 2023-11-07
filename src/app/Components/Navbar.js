import React from "react";
import Link from "next/link";
import { SiBehance } from "react-icons/Si";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { BiBasketball } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="flex  justify-between py-8 w-[1240px]  mx-[139px] gap-11  z-50 ">
      <Image
        src="/images/logo-light.png"
        alt="logo"
        height={10}
        width={100}
      ></Image>
      <div className="flex  gap-4  w-38%  ml-11">
        <div className="w-10 h-10   rounded-full text-white border bottom-2 border-zinc-700 hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0">
          <Link href="/about" className=" relative left-3 top-3 ">
            {" "}
            <SiBehance />{" "}
          </Link>
        </div>
        <div className="w-10 h-10  rounded-full text-white border bottom-2 border-zinc-700 hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0">
          <Link href="/about" className="  relative left-3 top-3 ">
            {" "}
            <FaGithub />{" "}
          </Link>
        </div>
        <div className="w-10 h-10  rounded-full text-white border bottom-2 border-zinc-700 hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0">
          <Link href="/about" className="  relative left-3 top-3 ">
            {" "}
            <FaLinkedinIn />{" "}
          </Link>
        </div>
        <div className="w-10 h-10  rounded-full text-white border bottom-2 border-zinc-700 hover:bg-white hover:text-black transition-all duration-[0.4s] ease-linear delay-0">
          <Link href="/about" className=" relative left-3 top-3 ">
            {" "}
            <BiBasketball />{" "}
          </Link>
        </div>
      </div>
      <p className="text-white tracking-widest  font-normal w-[163px] text-[14px] font-sora">GAvi@WEBSITE.COM</p>
    </div>
  );
};

export default Navbar;
