import React from "react";
import Navlinks from "./Navlinks";

const Outline = () => {
  return (
    <div>
        <div className="h-0 border border-t-[130px] border-b-transparent w-[550px] border-l-[1px] border-l-transparent border-r-transparent border-r-[180px] border-zinc-900 ml-[139px] mt-[-15px] rounded-[12px] ">

        </div>
      <div className="   z-50 ">
        <div className="w-[410px]   bg-transparent"></div>

        <div className="w-[800px]  bg-transparent "></div>
      </div>
      <div className="h-0  border border-b-[124px] border-t-transparent w-[850px] border-r-[1px] border-r-transparent border-l-transparent border-l-[170px] border-zinc-900 ml-[529px] rounded-[12px] mt-[-60px]">
        <Navlinks/>
      </div>
      
    </div>
  );
};

export default Outline;
