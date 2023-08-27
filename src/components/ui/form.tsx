import { cn } from "@/lib/utils";
import React, { FC, HTMLAttributes, ReactNode } from "react";

interface form extends HTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form: FC<form> = ({ children, className, ...others }) => {
  return (
    <form
      className={cn(
        "flex flex-col gap-4 bg-white w-[90%] h-[90%] rounded-md lg:w-1/2 lg:h-1/2 p-4",
        className
      )}
      {...others}
    >
      {children}
    </form>
  );
};

export default Form;
