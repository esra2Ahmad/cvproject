import React from "react";
import {GoArrowUpRight} from 'react-icons/go'
import Link from "next/link";
import { ourportfolio } from "@/constants";
import PortfolioCard from "./PortfolioCard";

const OurPortfolio = () => {
  return (
    <div className="w-[1240px] h-[1500px] mx-[139px]  bg-zinc-900 rounded-br-3xl z-50 ">
      <div className="flex justify-between mx-14 pt-24">
        <div className="w-[520px] h-[13px]">
          <h6 className="text-[14px] uppercase font-light text-zinc-300 tracking-[3px] font-Sora">
            Our Portfolio
          </h6>
          <h3 className="text-[38px]  font-medium text-zinc-200 tracking-[2px]  mt-3 font-Sora">
            Look at my work &<br/> give us{" "}
            <span className="text-lime-300">your feedback</span>
          </h3>
        </div>
        <div className="w-[140px] h-[21px] flex justify-between items-center">
          <p className="text-[14px] font-normal text-zinc-200 font-Sora first-letter:uppercase">
            view All Works
          </p>
        <Link href="/pages/portfolio"><GoArrowUpRight className="text-zinc-200 text-[30px]"/></Link>
        </div>
      </div>
      <div className=' flex flex-wrap gap-11  mt-56  ml-14'>
            {ourportfolio.map((detail, index) => (
              <PortfolioCard
                key={index}
                image={detail.image}
                brand={detail.brand}
                text={detail.text}
                
              />
            ))}
            </div>
    </div>
  );
};

export default OurPortfolio;
