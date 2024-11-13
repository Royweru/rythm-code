"use client"
import React from "react";
import { InputBox } from "./input-box";


import { Course } from "@prisma/client";


export const Hero = ({
   courses
}:{
  courses:Course[]
}) => {


  return (
    <>
      <div className=' w-full bg-[url("/hero2.jpg")]  min-h-[300px] bg-cover bg-center'>
        
        <div
          className=" w-full relative lg:p-20 md:p-16 p-6  md:grid lg:grid-cols-2
         md:grid-cols-2 grid-cols-1 gap-5 hidden "
        >
          <div className="  h-full flex-col justify-center items-center hidden lg:flex col-span-1">
           <h4 className=" font-semibold font-mono text-4xl leading-snug">
           Coding is life , coding is fun. Let’s embrace it, let’s love
           it
           </h4>
          </div>
          <InputBox courses={courses} />
        </div>
      
      </div>
    </>
  );
};
