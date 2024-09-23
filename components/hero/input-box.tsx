"use client";

import React, { useState } from "react";

import { Button } from "../ui/button";

import { CustomSelect } from "../custom-select";

import { courses, deadlines } from "@/constants";
import { Input,Textarea } from "@relume_io/relume-ui";

export const InputBox = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");
  const [file,setFile] = useState()
  const [deadline,setDeadline] = useState("")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      "Email": email,
      "Phone No": phone,
      "Course": course,
       "File":file
    });
  };

  return (
    <div className=" col-span-1  hidden md:block">
      <div
        className=" border-neutral-300 border 
      shadow-md w-full  p-3 relative bg-text-blackgrey rounded-md"
      >
        <div className=" relative w-full flex flex-col gap-y-3 ">
          <form action="" onSubmit={handleSubmit} className=" space-y-2">
            <div className=" w-full justify-between flex relative gap-1">
             
              <Input
                placeholder="Anto2@gmail.com"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className=" w-full"
              />
              <Input
                placeholder="+254 67888433"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className=" w-full"
              />
            </div>
            <div className=" w-full justify-between flex relative gap-1">
              <Textarea
                placeholder="Assignment details and description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className=" w-full min-h-[250px]"
              />
              <div
                className=" flex flex-col relative
              items-center gap-y-4  justify-evenly w-full"
              >
                <CustomSelect val={course} setVal={setCourse}options={courses} />
                <CustomSelect val={deadline} setVal={setDeadline}  options={deadlines}/>

      
              </div>
            </div>
            <div className=" w-full relative px-5 flex justify-center items-center">
              <Button
                variant="primary"
                className=" font-semibold text-white text-sm w-full"
                type="submit"
              >
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
