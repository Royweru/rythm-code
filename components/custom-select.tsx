import React from "react";

interface CustomSelectProps {
  val: string;
  setVal: (val: string) => void;
  options?: string[];
}
export const CustomSelect = ({ val, setVal, options }: CustomSelectProps) => {
  return (
    <select
      value={val}
      onChange={(e) => setVal(e.target.value)}
      className=" px-4 bg-blue-dark1 border  border-white 
    w-full py-1 text-neutral-50 placeholder:text-gray-300 h-12
    text-sm"
    required
    >
      {options &&
        options?.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      {!options && (
        <>
          <option value="thisone">Number 1</option>
          <option value="this2">Number 2</option>
          <option value="this3">Number 3</option>
          <option value="this4">Number 4</option>
        </>
      )}
    </select>
  );
};
