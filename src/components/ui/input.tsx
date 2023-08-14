import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";

interface input extends HTMLAttributes<HTMLInputElement> {}

const Input: FC<input> = ({ className, ...others }) => {
  return <input {...others} className={clsx("", className)} />;
};

export default Input;
