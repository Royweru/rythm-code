"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ImagePlus } from "lucide-react";

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <div>
      <CldUploadWidget onUpload={onUpload} 
      uploadPreset="rythmcode"
      
      >
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
