import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";

interface input extends HTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  value: string;
}

const Input: FC<input> = ({ className, type, name, value, ...others }) => {
  return (
    <input
      className={clsx(
        "border border-gray-500 outline-none px-4 py-1 text-gray-900",
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
