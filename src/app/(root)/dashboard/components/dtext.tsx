import { cn } from "@/lib/utils";
import React, { FC, HTMLAttributes } from "react";

interface dtextProps extends HTMLAttributes<HTMLHeadingElement> {
  label: string;
}

const Dtext: FC<dtextProps> = ({ label, className, ...others }) => {
  return (
    <h1 className={cn("text-head-sm font-semibold", className)} {...others}>
      {label}
    </h1>
  );
};

export default Dtext;
