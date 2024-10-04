"use client";
import * as z from "zod";
import React, {  useEffect } from "react";
import axios from 'axios'
import { Button } from "../ui/button";

import { Calendar } from "@/components/ui/calendar";

import { format } from "date-fns";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import { zodResolver } from "@hookform/resolvers/zod";
import { AssignmentSchema } from "@/schemas";
import {
  Form,
  FormField,
  FormControl,
  FormLabel,
  FormDescription,
  FormItem,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "../ui/select";
import ImageUpload from "../image-upload";
import { Course } from "@prisma/client";
import { toast } from "sonner";

export const InputBox = ({
  courses
}:{
  courses:Course[]
}) => {
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
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong")
    }
  };

  useEffect(() => {
    console.log(form.formState.errors); // Inspect validation errors in real-time
  }, [form.formState.errors]);

  const isSubmitting = form.formState.isSubmitting;

  return (
    <div className=" col-span-1  hidden md:block">
      <div
        className=" border-neutral-300   border-dashed
      shadow-large w-full  p-3 relative bg-text-blackgrey border-2"
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className=" space-y-2"
          >
            <div className=" w-full grid grid-cols-2 gap-2">
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
                        placeholder="Enter your phone no. "
                        className=" col-span-1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className=" w-full flex-col flex gap-y-2">
              <div className=" grid grid-cols-2 gap-1">
                <FormField
                  control={form.control}
                  name="courseId"
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                      disabled={isSubmitting}
                      
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            defaultValue={field.value}
                            placeholder="Select a language"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {courses.map((course)=>(
                          <SelectItem value={course.id} key={course.id}>
                           {course.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Write your question/assignment details e.g How do you reverse a string? "
                          className=" w-full min-h-[250px]"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem className=" w-full">
                      <FormLabel className=" font-bold text-sm text-shade-purple">
                        Upload screenshots
                      </FormLabel>
                    
                      <FormControl>
                        <ImageUpload
                          value={field.value.map((image) => image.url)}
                          disabled={isSubmitting}
                          onChange={(url) =>
                            field.onChange([...field.value, { url }])
                          }
                          onRemove={(url) =>
                            field.onChange([
                              ...field.value.filter(
                                (current) => current.url !== url
                              ),
                            ])
                          }
                        />
                      </FormControl>

                      <FormMessage />
                      <FormDescription className=" text-sm font-light text-gray-400">
                        If you need to upload files only screenshot images are
                        allowed, you can send your files through our email
                      </FormDescription>
                    </FormItem>
                  )}
                />
              
                  <FormField
                  control={form.control}
                  name="deadline"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className=" font-bold text-sm text-shade-purple">
                        Deadline
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                              disabled={isSubmitting}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date >
                                new Date(
                                  new Date().setDate(new Date().getDate() + 30)
                                ) || date < new Date()
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription className=" text-sm font-light text-gray-400">
                        Enter the deadline for your assignment if none leave it blank
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className=" w-full px-12  mt-3 flex justify-center items-center">
              <Button
                variant="secondary"
                className=" font-semibold text-black
                text-sm w-full"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
