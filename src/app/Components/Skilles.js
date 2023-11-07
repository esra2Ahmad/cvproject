"use client";
import React from "react";
import Image from "next/image";
import { skills } from "@/constants";
import SkillsCard from "./SkillsCard";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const Skilles = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= 1) {
      newIndex = 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="w-[1240px]  mx-[139px] pt-11 bg-zinc-900 my-0">
      <div className="flex gap-6  pt-11    items-center ml-14">
        <div className="w-[243px] h-[239px] space-y-3 flex flex-col justify-center ">
          <h6 className="text-[14px] uppercase font-light tracking-normal text-zinc-500  font-Sora">
            {" "}
            Our Skills
          </h6>
          <p className="text-[32px] uppercase font-medium tracking-normal text-zinc-100 font-Sora">
            <span className="text-lime-300">Awards</span> & Recognitions
          </p>
        </div>
        <div className="w-[343px] h-[239px] flex flex-col gap-10 ml-40 ">
          <div className="w-[343px] h-[136px] border border-zinc-800 rounded-[12px]   ">
            <div className="w-[50px] h-[28px] rounded-[28px] border border-zinc-800   ml-[270px] mt-3">
              <p className="text-center text-zinc-200">95%</p>
            </div>
            <div className="flex gap-4 justify-start items-center   ml-8">
              <Image
                src="/images/s1.png"
                width={40}
                height={40}
                alt="skill1"
                className=" "
              />
              <p className="text-[18px] font-Sora font-normal tracking-normal text-zinc-300 ml-6 hover:select-all">
                UI / UX Design
              </p>
            </div>
            <div className=" h-[2px] w-[300px] ml-5 bg-zinc-800 relative top-4  ">
              <span className=" block bg-zinc-300 h-full w-11/12"></span>
            </div>
          </div>
          <div className="w-[343px] h-[136px] border border-zinc-800 rounded-[12px]  ">
            <div className="w-[50px] h-[28px] rounded-[28px] border border-zinc-800   ml-[270px] mt-3">
              <p className="text-center text-zinc-200">85%</p>
            </div>
            <div className="flex gap-4 justify-start items-center   ml-8">
              <Image
                src="/images/s3.png"
                width={40}
                height={40}
                alt="skill1"
                className=" "
              />
              <p className="text-[18px] font-Sora font-normal tracking-normal text-zinc-300 ml-6 hover:select-all">
                Word Press
              </p>
            </div>
            <div className=" h-[2px] w-[300px] ml-5 bg-zinc-800 relative top-4  ">
              <span className=" block bg-zinc-300 h-full  w-[85%]"></span>
            </div>
          </div>
        </div>
        <div className="w-[343px] h-[239px] flex flex-col gap-10   ">
          <div className="w-[343px] h-[136px] border border-zinc-800 rounded-[12px]  ">
            <div className="w-[50px] h-[28px] rounded-[28px] border border-zinc-800   ml-[270px] mt-3">
              <p className="text-center text-zinc-200">80%</p>
            </div>
            <div className="flex gap-4 justify-start items-center   ml-8">
              <Image
                src="/images/s2.png"
                width={40}
                height={40}
                alt="skill1"
                className=" "
              />
              <p className="text-[18px]  font-normal tracking-normal text-zinc-300 ml-6 hover:select-all">
                Development
              </p>
            </div>
            <div className=" h-[2px] w-[300px] ml-5 bg-zinc-800 relative top-4  ">
              <span className=" block bg-zinc-300 h-full w-[80%]"></span>
            </div>
          </div>
          <div className="w-[343px] h-[136px] border border-zinc-800 rounded-[12px]  ">
            <div className="w-[50px] h-[28px] rounded-[28px] border border-zinc-800   ml-[270px] mt-3">
              <p className="text-center text-zinc-200">78%</p>
            </div>
            <div className="flex gap-4 justify-start items-center   ml-8">
              <Image
                src="/images/s4.png"
                width={40}
                height={40}
                alt="skill1"
                className=" "
              />
              <p className="text-[18px]  font-normal tracking-normal text-zinc-300 ml-6 hover:select-all">
              Graphic Designe
              </p>
            </div>
            <div className=" h-[2px] w-[300px] ml-5 bg-zinc-800 relative top-4  ">
              <span className=" block bg-zinc-300 h-full w-[78%]"></span>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-full overflow-hidden flex flex-col   relative ">
        <div
          className="whitespace-nowrap  duration-1000"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          <div className="  inline-flex   mt-11  mx-14  gap-14">
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
          <div className="  inline-flex    mt-11  mx-14  gap-14">
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
        </div>
      </div>
      <div className="  flex  gap-4 ml-[1100px] mt-11">
        <button
          className="h-12  text-zinc-400  text-[30px] px-2 w-12  z-40  rounded-full bg-zinc-800 border border-zinc-700 duration-300 "
          onClick={() => {
            updateIndex(0);
          }}
        >
          <BsArrowLeft />
        </button>

        <button
          className="h-12 w-12 text-[30px] px-2 text-zinc-400 z-50 rounded-full bg-zinc-800 border border-zinc-700 duration-300 "
          onClick={() => {
            updateIndex(1);
          }}
        >
          <BsArrowRight />
        </button>
      </div>
      <div className="w-full h-[1px] bg-zinc-800 mt-24"></div>
    </div>
  );
};

export default Skilles;
