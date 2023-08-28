import { cn } from "@/lib/utils";
import React, { FC, HTMLAttributes } from "react";

interface input extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type: string;
  name: string;
  value: string;
  textarea?: boolean;
}

const Input: FC<input> = ({
  className,
  type,
  name,
  value,
  textarea,
  ...others
}) => {
  return textarea ? (
    <textarea
      className={cn(
        "border border-gray-500 outline-none px-4 py-1 text-gray-900 resize-none w-full",
        className
      )}
      {...others}
      name={name}
      value={value}
    ></textarea>
  ) : (
    <input
      className={cn(
        "border border-gray-500 outline-none px-4 py-1 text-gray-900 w-full",
        className
      )}
      {...others}
      type={type}
      name={name}
      value={value}
    />
  );
};

export default Input;
