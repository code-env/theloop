import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";

interface input extends HTMLAttributes<HTMLInputElement> {
    type: string
}

const Input: FC<input> = ({ className,type, ...others }) => {
  return (
    <input
      className={clsx(
        "border border-gray-500 outline-none px-4 py-1 text-gray-900",
        className
      )}
      {...others}
      type={type}
    />
  );
};

export default Input;
