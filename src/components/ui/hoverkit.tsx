import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

interface hoverkitProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  direction: "top" | "right" | "bottom" | "left";
}

const HoverKit: FC<hoverkitProps> = ({
  label,
  direction,
  className,
  ...others
}) => {
  return (
    <span
      className={clsx("absolute w-fit bg-gray-300 text-gray-800", className)}
      {...others}
    >
      {label}
    </span>
  );
};

export default HoverKit;
