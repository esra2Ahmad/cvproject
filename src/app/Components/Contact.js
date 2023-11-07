"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import {BsSendFill} from 'react-icons/bs'

const Contact = () => {
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
    <div className=" w-[1240px] h-[650px] mx-[139px] bg-zinc-900 ">
     
      <div className="flex  ">
        
        <div className="z-50 bg-transparent ml-[-20px]">
          <h6 className="  tracking-widest text-[14px] uppercase font-Sora font-light text-zinc-400 pt-24 mx-24">
            Get In Touch
          </h6>
          <h2 className=" tracking-wider w-[433px] text-[50px] font-bold text-zinc-200 pt-6 mx-24 font-Sora">
            {" "}
            Lets make your
            <br /> brand brilliant!
          </h2>
          <p className="  tracking-wider w-[433px] text-[15px]  font-Popins font-light text-zinc-300 pt-6 mx-24 leading-[30px]">
            If you would like to work with us or just want to get in <br />
            touch, we’d love to hear from you!
          </p>
          <p className=" w-[433px] text-[40px] font-medium text-lime-300 pt-6 mx-24 underline">
            {" "}
            +1 840 841 25 69
          </p>
          <ul className=" list-none flex gap-8 text-zinc-200 text-[15px] mx-24 mt-11">
            <li className=" hover:translate-y-2 hover:translate-x-2 ease-linear duration-100 ">
              Facebook
            </li>
            <li className=" hover:translate-y-2 hover:translate-x-2 ease-linear duration-100 ">
              Twitter
            </li>
            <li className=" hover:translate-y-2 hover:translate-x-2 ease-linear duration-100 ">
              LinkedIn
            </li>
            <li className=" hover:translate-y-2 hover:translate-x-2 ease-linear duration-100 ">
              Instagram
            </li>
          </ul>
        </div>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col gap-4 items-start mt-24   z-50"
        >
          <div className="flex flex-row  gap-6 pt-2  ">
            <input
              type="text"
              placeholder="     Name"
              onChange={handleChange}
              name=" yourname"
              value={formData.yourname}
              className=" w-[275px] h-[52px] border bg-transparent border-zinc-800 rounded-[2px]"
            />
            <input
              type="email"
              placeholder="     Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              className=" w-[275px] h-[52px] border border-zinc-800 bg-transparent rounded-[2px]"
            />
          </div>
          <input
            type=" textarea"
            placeholder="    subject"
            onChange={handleChange}
            name=" subject"
            value={formData.email}
            className=" w-[575px] h-[50px] border border-zinc-800  bg-transparent rounded-[2px] "
          />
          <input
            type=" textarea"
            placeholder=" Messege*"
            onChange={handleChange}
            name=" textarea"
            value={formData.email}
            className=" bg-transparent pl-4   w-[575px] h-[155px] border border-zinc-800 rounded-[2px] "
          />

          <button className=" bg-transparent w-[575px]  h-[50px] text-zinc-400  font-semibold text-[16px] border border-zinc-800 mt-[18px] text-center pl-4 hover:bg-lime-300">
            {" "}
            Send Message
          </button>
        </form>
      </div>
      <div className="w-full h-[1px] bg-zinc-800 mt-24"></div>
    </div>
  );
};

export default Contact;
