"use client";

import { testimelions } from "@/constants";

import { useState } from "react";
import Testimilions from "./Testimilions";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const Test = () => {
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
    <div
      className="
  h-[890px]  mx-48 bg-zinc-900  relative top-[-600px] z-40  "
    >
      <div className="relative  left-[55px] bg-zinc-800 rounded-bl-3xl  w-[1100px] rounded-tl-3xl">
        <div className="  pt-24 mx-14">
          <h6 className="text-[18px] font-medium  text-zinc-300 uppercase">
            Testimonials
          </h6>
          <h3 className="text-[38px] font-medium  text-zinc-100">
            Trusted by <br />
            <span className="text-lime-300">Hundered Clients</span>
          </h3>
        </div>

        <div className=" h-full overflow-hidden flex flex-col   relative ">
          <div
            className="whitespace-nowrap  duration-1000"
            style={{ transform: `translate(-${activeIndex * 120}%)` }}
          >
            <div className=" inline-flex  items-center w-[1280px] h-[600px]  ">
              {testimelions.map((product, index) => (
                <Testimilions key={index} qout={product.qout} />
              ))}
            </div>
            <div className=" inline-flex justify-center items-center w-[1280px] h-[600px]  ">
              {testimelions.map((product, index) => (
                <Testimilions key={index} qout={product.qout} />
              ))}
            </div>
          </div>
          <div className="  flex  gap-4   relative left-[700px] top-[-40px]">
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
        </div>
      </div>
    </div>
  );
};

export default Test;
