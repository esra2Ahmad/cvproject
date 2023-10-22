'use client'
import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { blog } from "@/constants";
import { FaTwitter } from "react-icons/fa6";
import NewBlog from "@/app/Components/NewBlog";
const page = () => {
  const [formData, setFormData] = useState({
    email: "",
    yourname: "",
    textarea: "",
    subject: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    submitToApi(formData);
  }
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevformData) => {
      return {
        ...prevformData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  return (
    <div className=" bg-zinc-800  w-full  h-[5800px]">
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
      <div className=" max-w-[1280px] bg-zinc-900 h-[5400px] mx-24 rounded-[12px]  mt-20">
        <div className="flex justify-center gap-4 pt-24">
          <div className=" w-[145px] h-[40px] rounded-[40px] border  bg-zinc-800 border-zinc-700 ">
            <p className="text-center mt-[6px] text-[15px] text-zinc-200">
              Web Designe
            </p>
          </div>
          <div className=" w-[115px] h-[40px] rounded-[40px] border  bg-zinc-800 border-zinc-700 ">
            <p className="text-center mt-[6px] text-[15px] text-zinc-200">
              Envato
            </p>
          </div>
        </div>
        <h1 className="mt-11 text-center text-zinc-100 text-[55px] font-medium">
          Network of wormholes <br />
          colonies extraordinary claims
          <br /> require.
        </h1>
        <p className="mt-11 text-center text-zinc-100 text-[14px] font-light uppercase tracking-widest">
          6 , August 2022 - By Admin
        </p>
        <Image
          src="/images/bb1.jpg"
          width={976}
          height={540}
          alt="blog"
          className=" mt-24 mx-32"
        />
        <div className="flex items-center justify-center w-[900px] mx-40">
          <div className="text-lime-300 font-bold text-[50px] h-[50px]">A</div>
          <p className="mt-8 mx-2 tracking-wider text-[17px] font-light text-zinc-400 leading-[25px]">
            new report said earlier this week that Apple is working on a brand
            new laptop. A trusted Apple
            <br /> insider with a proven track record confirmed that Apple is
            working on the larger MacBook Air..
          </p>
        </div>
        <p className="mt-8  tracking-wider text-[17px] font-light mx-52 text-zinc-400 leading-[25px]">
          new report said earlier this week that Apple is working on a brand new
          laptop. Apple plans to release
          <br /> a 15-inch MacBook Air in 2023, a first for the Air series. A
          trusted Apple insider with a proven track
          <br /> record confirmed that Apple is working on the larger MacBook
          Air.
        </p>
        <p className="mt-8  tracking-wider text-[17px] font-light mx-52 text-zinc-400 leading-[25px]">
          However, Apple might not include it in the Air series when it launches
          it. As for the notebook’s release
          <br /> date, the 15-inch MacBook isn’t coming soon. It’ll get a late
          2023 release at best, according to the <br /> new claims.
        </p>
        <h5 className="mt-11 tracking-wider text-[24px] font-medium mx-52 text-zinc-100 leading-[25px]">
          What sizes do MacBook Airs come in?
        </h5>
        <p className="mt-8  tracking-wider text-[17px] font-light mx-52 text-zinc-400 leading-[25px]">
          Apple currently sells only one MacBook Air size. The laptop comes in a
          13-inch version that matches
          <br /> the pre-2021 13-inch MacBook Pro size. Previously, Apple sold
          an 11-inch MacBook Air, but the company <br />
          discontinued that model in 2017.
        </p>
        <div className="border border-zinc-800  bg-transparent mx-52 mt-16 w-[800px] h-[185px]">
          <div className=" flex gap-6 mx-16 mt-10 items-center">
            <div>
              <Image
                src="/images/quote.png"
                width={100}
                height={100}
                alt="qout"
              />
            </div>
            <h6 className=" text-[20px] text-zinc-100">
              Increase your site traffic and gain new customers with a<br />
              beautiful and functional blog.
              <br />
              <span className="text-lime-300 text-[16px] tracking-wider">
                - Ui-ThemeZ Code
              </span>
            </h6>
          </div>
        </div>
        <div className=" flex mx-[195px] mt-24 gap-[50px]">
          <Image src="/images/bb2.jpg" width={387} height={400} alt="bb2" />
          <Image src="/images/bb3.jpg" width={387} height={400} alt="bb3" />
        </div>
        <h5 className="mt-11 tracking-wider text-[24px] font-medium mx-52 text-zinc-100 leading-[25px]">
          What sizes do MacBook Airs come in?
        </h5>
        <p className="mt-8 mx-52 tracking-wider text-[17px] font-light text-zinc-400 leading-[25px]">
          A new report said earlier this week that Apple is working on a brand
          new laptop. Apple plans to <br /> release a 15-inch MacBook Air in
          2023, a first for the Air series. A trusted Apple insider with a
          proven <br /> track record confirmed that Apple is working on the
          larger MacBook Air.
        </p>
        <h5 className="mt-11 tracking-wider text-[24px] font-medium mx-52 text-zinc-100 leading-[25px]">
          Ordered & Unordered Lists.
        </h5>
        <ul className="mt-4  mx-56 space-y-3  list-disc">
          <li className="text-[17px] font-medium  text-zinc-400 leading-[25px]">
            Yet this above sewed flirted opened ouch
          </li>
          <li className="text-[17px] font-medium  text-zinc-400 leading-[25px]">
            Goldfinch realistic sporadic ingenuous
          </li>
          <li className="text-[17px] font-medium  text-zinc-400 leading-[25px]">
            Abominable this abidin far successfully then like piquan
          </li>
        </ul>
        <h5 className="mt-11 tracking-wider text-[24px] font-medium mx-52 text-zinc-100 leading-[25px]">
          Ordered & Unordered Lists.
        </h5>
        <ul className="mt-4  mx-56 space-y-3  list-disc">
          <li className="text-[17px] font-medium  text-zinc-400 leading-[25px]">
            01 - Yet this above sewed flirted opened ouch
          </li>
          <li className="text-[17px] font-medium  text-zinc-400 leading-[25px]">
            02 - Goldfinch realistic sporadic ingenuous
          </li>
          <li className="text-[17px] font-medium  text-zinc-400 leading-[25px]">
            03 - Abominable this abidin far successfully then like piquan{" "}
          </li>
        </ul>
        <p className="mt-8  tracking-wider text-[17px] font-light mx-52 text-zinc-400 leading-[25px]">
          However, Apple might not include it in the Air series when it launches
          it. As for the notebook’s release
          <br /> date, the 15-inch MacBook isn’t coming soon. It’ll get a late
          2023 release at best, according to the <br /> new claims.
        </p>
        <div className=" flex justify-between items-center border border-l-0 border-r-0  border-zinc-800  bg-zinc-900  mx-52 mt-16 w-[800px] h-[70px]">
          <div className="flex gap-2 items-center">
            <p className="text-zinc-100">Tags:</p>
            <div className=" w-[70px] h-[30px] rounded-[15px] bg-zinc-800 text-zinc-200 text-center  ">
              Tech
            </div>
            <div className=" w-[70px] h-[30px] rounded-[15px] bg-zinc-800 text-zinc-200 text-center  ">
              GAVI
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-zinc-100">Share:</p>
            <div className=" w-[40px] h-[40px] rounded-full bg-zinc-800 text-zinc-200 text-center   ">
              <FaFacebookF className="mt-3 mx-3" />
            </div>
            <div className=" w-[40px] h-[40px] rounded-full bg-zinc-800 text-zinc-200 text-center  ">
              <FaTwitter className="mt-3 mx-3" />
            </div>
            <div className=" w-[40px] h-[40px] rounded-full bg-zinc-800 text-zinc-200 text-center  ">
              <FaYoutube className="mt-3 mx-3" />
            </div>
          </div>
        </div>
        <div className=" flex justify-between items-center   border-zinc-800  bg-zinc-800  mx-52 mt-16 w-[800px] h-[180px]">
          <div className="flex mx-14 gap-6 items-center">
            <Image
              src="/images/author1.jpg"
              width={100}
              height={100}
              alt="authare"
              className="rounded-[10px]"
            />
            <div className="flex flex-col gap-2 ">
              <h1 className=" text-[18px] font-medium text-zinc-100 tracking-wider">
                Chris Smith
              </h1>
              <p className=" text-[15px] font-light text-zinc-100 tracking-wider">
                Nulla eleifend, lectus eu gravida facilisis, ipsum metus
                faucibus eros,
                <br /> vitae vulputate nibh libero ac metus.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mx-52 mt-11">
          <div className="">
            <Image
              src="/images/blog1.jpg"
              width={400}
              height={154}
              className="w-[400px] h-[154px] "
              alt=""
            />
          </div>
          <Image
            src="/images/blog2.jpg"
            width={400}
            height={154}
            className="w-[400px] h-[154px] "
            alt=""
          />
        </div>
        <h1 className="mt-11 mx-52 text-zinc-100 text-[24px] font-medium">
          comments (2)
        </h1>
        <div className=" flex justify-between items-center border  border-zinc-700  border-t-0 border-l-0 border-r-0  bg-transparent  mx-52 mt-16 w-[800px] h-[180px]">
          <div className="flex items-center mx-11 gap-6">
            <Image src="/images/author1.jpg" width={75} height={75} alt=""  className=" w-[100px] h-[100px]  rounded-full"/>
            <div className="flex flex-col gap-2">
              <h3 className=" text-[18px] font-medium text-zinc-100 tracking-wider">Megan fox</h3>
              <p className=" text-[14px] font-light text-zinc-100 tracking-wider">
                Ut elementum turpis lorem, id vulputate risus consequat vitae.
                Morbi eget
                <br /> urna imperdiet, pellentesque nulla id, tempus mauris.
              </p>
            </div>
            <div className="w-[80px] h-[30px] rounded-[22px] border border-zinc-600 text-center text-zinc-100">Replay</div>
          </div>
          
        </div>
        <div className=" flex justify-between items-center border  border-zinc-700  border-t-0 border-l-0 border-r-0  bg-transparent  mx-52  w-[800px] h-[180px]">
          <div className="flex items-center mx-11 gap-6">
            <Image src="/images/author1.jpg" width={75} height={75} alt=""  className=" w-[100px] h-[100px]  rounded-full"/>
            <div className="flex flex-col gap-2">
              <h3 className=" text-[18px] font-medium text-zinc-100 tracking-wider">Megan fox</h3>
              <p className=" text-[14px] font-light text-zinc-100 tracking-wider">
                Ut elementum turpis lorem, id vulputate risus consequat vitae.
                Morbi eget
                <br /> urna imperdiet, pellentesque nulla id, tempus mauris.
              </p>
            </div>
            <div className="w-[80px] h-[30px] rounded-[22px] border border-zinc-600 text-center text-zinc-100">Replay</div>
          </div>
          
        </div>
        <h2 className=" text-[24px] font-bold text-zinc-100 tracking-wider mx-52 mt-14"> Leave @comment</h2>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col gap-4 items-start mt-11 z-50 "
        >
          <div className="flex flex-row  gap-6 pt-2  ">
            <input
              type="text"
              placeholder="     Name"
              onChange={handleChange}
              name=" yourname"
              value={formData.yourname}
              className=" w-[400px] h-[52px] border bg-transparent ml-52 border-zinc-800 rounded-[2px]"
            />
            <input
              type="email"
              placeholder="     Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              className=" w-[400px] h-[52px] border border-zinc-800 bg-transparent rounded-[2px]"
            />
          </div>
          <input
            type=" textarea"
            placeholder="    subject"
            onChange={handleChange}
            name=" subject"
            value={formData.email}
            className=" w-[820px] h-[50px] border border-zinc-800 mx-52 bg-transparent rounded-[2px] "
          />
          <input
            type=" textarea"
            placeholder=" Messege*"
            onChange={handleChange}
            name=" textarea"
            value={formData.email}
            className=" bg-transparent pl-4 mx-52  w-[820px] h-[155px] border border-zinc-800 rounded-[2px] "
          />

          <button className=" bg-transparent w-[820px] mx-52  h-[50px] text-zinc-400  font-semibold text-[16px] border border-zinc-800 mt-[18px] text-center pl-4 hover:bg-lime-300">
            {" "}
            Send Message
          </button>
        </form>
        <h2 className=" text-[40px] font-medium text-zinc-100 tracking-wider mx-24 mt-14 leading-[20px]"> 
Related Posts
</h2>
      <div className="w-[1200px] h-[1px] bg-zinc-800 mx-10 mt-8"></div>  
      <div className=' flex   justify-between mt-11 mx-24  gap-16'>
        {blog.map((detail, index) => (
              <NewBlog
                key={index}
                image={detail.image}
                date={detail.date}
                title={detail.title}
               
              />
            ))}
        </div>
        <p className='text-white text-center mt-28'>© 2023 Gavi is Proudly Powered <span className='text-lime-300 underline'>by Ui-ThemeZ </span></p>
      </div>
    </div>
  );
};

export default page;
