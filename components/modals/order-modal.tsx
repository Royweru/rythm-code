import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Input,
  Textarea,
  DialogClose,
  Select,
} from "@relume_io/relume-ui";
import { BiLogoGoogle } from "react-icons/bi";
import { useOrderModal } from "@/hooks/use-order-modal";
import { Button } from "../ui/button";
import { CustomSelect } from "../custom-select";
import { courses, deadlines } from "@/constants";
export const OrderModal = () => {
  const [open, setOpen] = useOrderModal();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [deadline, setDeadline] = useState("");

  const [description, setDescription] = useState("");
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogOverlay className="bg-black/60" />
        <DialogContent className="w-full max-w-md bg-white p-5">
          <DialogHeader>
            <DialogTitle className=" font-semibold text-3xl font-gothic  text-blue-dark3">
              Make your order
            </DialogTitle>
            <DialogDescription className=" text-sm font-light  text-gray-700">
              Make sure you give as much details as possible
            </DialogDescription>
          </DialogHeader>
          <div className=" w-full p-2 ">
            <form className="flex-col flex space-y-2 relative">
              <Input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="me@gmail.com"
                className=" font-semibold tracking-wide"
              />
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Phone number e.g +254 8839 20003"
                className=" font-semibold tracking-wide"
              />
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Dive into details about the specific assignment.."
                className=" font-semibold tracking-wide min-h-[80px] "
              />
              <CustomSelect val={course} setVal={setCourse} options={courses} />
              <CustomSelect
                val={course}
                setVal={setCourse}
                options={deadlines}
              />
              <DialogFooter className=" w-full justify-end items-center mt-3">
                <div className="  flex gap-x-2">
                  <DialogClose>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    variant="primary"
                    className=" font-semibold tracking-wide"
                  >
                    SUBMIT
                  </Button>
                </div>
              </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
