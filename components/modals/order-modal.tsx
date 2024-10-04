import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import * as z from "zod";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";

import { useOrderModal } from "@/hooks/use-order-modal";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon } from "lucide-react";
import { AssignmentSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
} from "../ui/form";
import ImageUpload from "../image-upload";
import { ScrollArea } from "../ui/scroll-area";
export const OrderModal = () => {
  const { isOpen, data, onClose } = useOrderModal();
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
  const handleSubmit = (vals: z.infer<typeof AssignmentSchema>) => {
    onClose();
    console.log(vals);
    form.reset();
  };
  const isSubmitting = form.formState.isSubmitting;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-md bg-white p-5">
        <DialogHeader>
          <DialogTitle className=" font-semibold text-3xl font-gothic  text-blue-dark3">
            Make your order
          </DialogTitle>
          <DialogDescription className=" text-sm font-light  text-gray-700">
            Make sure you give as much details as possible
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className=" h-[400px] p-3">
          <div className=" w-full p-1  relative">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className=" space-y-2"
              >
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
                          placeholder="Enter your phone number e.g +254 759 355366"
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
                        {data.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
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
                          placeholder="Assignment details and description..."
                          className=" w-full min-h-[250px]"
                          {...field}
                        />
                      </FormControl>
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
                        Enter the deadline for your assignment if there is no
                        deadline leave it blank
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem className=" w-full">
                      <FormLabel className=" font-bold text-sm text-shade-purple">
                        Upload screenshots
                      </FormLabel>
                      <FormDescription className=" text-sm font-light text-gray-400">
                        If you need to upload files only screenshot images are
                        accepted , you can send your files on our email
                      </FormDescription>
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
                    </FormItem>
                  )}
                />

                <div className=" mt-3 w-full ">
                  <DialogFooter className=" w-full px-12">
                    <Button
                      variant="secondary"
                      className=" w-full font-semibold text-text-blackgrey"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </DialogFooter>
                </div>
              </form>
            </Form>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
