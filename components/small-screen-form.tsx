"use client"
import React from "react";
import * as  z from 'zod'
import axios from "axios";
import { toast } from "sonner";
import {
    Form,
    FormControl,
    FormField,
    FormMessage,
    FormItem
}from "@/components/ui/form"

  import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { AssignmentSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";
export const SmallScreenForm = () => {
    const form = useForm<z.infer<typeof AssignmentSchema>>({
        resolver: zodResolver(AssignmentSchema),
        defaultValues: {
          courseId: "",
          images: [],
          description: "",
          email: "",
          phone: "",
          deadline: null,
          answer: "",
        },
      });
      const handleSubmit = async(vals: z.infer<typeof AssignmentSchema>) => {
        try {
          const res = await axios.post('/api/assignment',vals)
            console.log(res)
            toast.success('Assigment received successfully')
            form.reset()
        } catch (error) {
          console.error(error)
          toast.error("Something went wrong")
        }
      };
      const isSubmitting = form.formState.isSubmitting;
  return (
    <>
      <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(handleSubmit)}>
        <div className=" p-8 md:p-16 grid grid-cols-2 gap-3">
        <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          className="col-span-1"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                     <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter your phone number e.g +254 759 355366"
                          className="col-span-1"
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                     <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                       <Textarea
                          placeholder="Enter your phone number e.g +254 759 355366"
                          className="col-span-1 min-h-[200px]"
                          disabled={isSubmitting}
                          {...field}
                       />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
        </div>
          <div className=" w-full flex items-center justify-center">
        <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] w-[300px]">
          <a href="/create">
            <span className=" font-semibold text-md font-gothic  text-shade-purple">
              Make an order
            </span>
          </a>
        </button>
      </div>
          </form>

      </Form>
     
    </>
  );
};
