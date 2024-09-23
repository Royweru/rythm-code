"use client"
import React from "react";
import { InputBox } from "./input-box";
import { Navbar } from "../nav";
import { useOrderModal } from "@/hooks/use-order-modal";

export const Hero = () => {

  const [_open,setOpen] = useOrderModal()
  return (
    <>
      <div className=' w-full bg-[url("/hero1.jpg")] lg:h-[550px] min-h-[300px] bg-cover bg-center'>
        <Navbar />
        <div
          className=" w-full relative lg:p-20 md:p-16 p-6  md:grid lg:grid-cols-2
         md:grid-cols-2 grid-cols-1 gap-5 hidden "
        >
          <div className="  h-full flex-col justify-center items-center hidden md:flex col-span-1">
            <h2 className="max-w-lg font-bold font-gothic text-shade-yellow lg:text-[2.75rem] text-4xl relative leading-tight">
              Welcome to Rythm code where we solve your coding problems
            </h2>
          </div>
          <InputBox />
        </div>
        <div className=" w-full relative flex flex-col gap-y-4 md:hidden">
          <div className=" w-full flex items-center justify-center">
            <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] w-[300px]"
            onClick={()=>setOpen(true)}
            >
              <span className=" font-semibold text-md font-gothic  text-shade-purple">
                  Make an order
              </span>
            </button>
          </div>
          <h2
            className=" text-5xl font-semibold text-shade-yellow shadow-small
             leading-tight tracking-wide p-10"
          >
            Welcome to Rythm code where we solve your coding problems
          </h2>
        </div>
      </div>
    </>
  );
};
