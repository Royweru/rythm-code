import React from "react";
import { InputBox } from "./input-box";
import { Navbar } from "../navbar";

export const Hero = () => {
  return (
    <>
      <div className=' w-full bg-[url("/hero1.jpg")] lg:h-[550px] bg-cover bg-center'>
        <Navbar />
        <div className=" w-full relative lg:p-20 md:p-16 p-6  grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="  h-full flex-col justify-center items-center hidden md:flex col-span-1">
            <h2 className="max-w-lg font-bold font-gothic text-shade-yellow lg:text-[2.75rem] text-4xl relative leading-tight">
              Welcome to Rythm code where we solve your coding problems
            </h2>
          </div>
          <InputBox />
        </div>
      </div>
    </>
  );
};
