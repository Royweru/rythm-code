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
            form.reset()
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
    <div className=" col-span-1   ">
     
    </div>
  );
};
