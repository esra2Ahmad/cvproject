import React from "react";
import {GoArrowUpRight} from 'react-icons/go'
import Link from "next/link";
import { ourportfolio } from "@/constants";
import PortfolioCard from "./PortfolioCard";

const OurPortfolio = () => {
  return (
    <div className=" max-w-[1240px] h-[1400px] mx-48  bg-zinc-900 rounded-br-3xl z-50 relative top-[-250px]">
      <div className="flex justify-between mx-24 pt-16">
        <div className="w-[520px] h-[13px]">
          <h6 className="text-[14px] uppercase font-light text-zinc-300 tracking-[3px]">
            Our Portfolio
          </h6>
          <h3 className="text-[38px] uppercase font-medium text-zinc-200 tracking-[3px] mt-3">
            Look at my work & give us{" "}
            <span className="text-lime-300">your feedback</span>
          </h3>
        </div>
        <div className="w-[140px] h-[21px] flex justify-between items-center">
          <p className="text-[14px] font-normal text-zinc-200">
            view All Works
          </p>
        <Link href="/pages/portfolio"><GoArrowUpRight className="text-zinc-200 text-[30px]"/></Link>
        </div>
      </div>
      <div className=' flex flex-wrap gap-4 mt-48 ml-[58px]'>
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
