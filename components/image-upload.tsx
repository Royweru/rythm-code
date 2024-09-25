"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ImagePlus, Trash } from "lucide-react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

interface ImageUploadProps {
  disabled: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="crizzle">
        {({ open }) => {
          const onClick = () => {
            open?.();
          };
          return (
            <Button
              type="button"
              disabled={disabled}
              variant="outline"
              onClick={onClick}
              className=" col-span-1"
            >
              <ImagePlus className="h-4 w-4 mr-2" />
              {value ? (
                <span className=" font-semibold text-shade-red font-gothic text-sm">
                  {value.length} Images uploaded
                </span>
              ) : (
                <span className=" font-semibold text-sm">Upload images</span>
              )}
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
