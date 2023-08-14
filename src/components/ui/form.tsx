import clsx from "clsx";
import React, { FC, HTMLAttributes, ReactNode } from "react";

interface form extends HTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form: FC<form> = ({ children, className, ...others }) => {
  return (
    <form className={clsx("flex flex-col gap-4", className)} {...others}>
      Form
    </form>
  );
};

export default Form;
