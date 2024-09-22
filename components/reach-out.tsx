import Image from "next/image";
import React from "react";

export const ReachOut = () => {
  return (
    <div className="  relative px-12 md:px-14 lg:px-20 py-10 md:py-16">
      <div className=" flex w-full flex-col md:flex-row justify-between items-center xl:gap-4">
        <div className=" relative w-full h-[300px]">
          <Image
            src={"/smilemoji.jpg"}
            alt=""
            fill
            className=" bg-contain bg-center"
          />
        </div>
        <div className="w-full  px-7 items-center flex flex-col gap-y-3 py-12 lg:py-16">
          <h2
            className=" tracking-wide font-bold  leading-tight
                lg:text-[3rem] md:text-[2.75rem] text-5xl text-shade-purple"
          >
            Reach out today
          </h2>
          <p className=" font-light text-text-blackgrey tracking-wide font-gothic leading-normal">
            Need help in that project, that assignment , that course work
            wondering how to solve a code challenge want a guide on the best
            practices to sharpen your coding skills !! We mostly major on web
            design and development and we have a road map to those looking to
            learn web development and design, this include the best tutorials to
            watch the best communities to join and so on.
          </p>
        </div>
      </div>
    </div>
  );
};
