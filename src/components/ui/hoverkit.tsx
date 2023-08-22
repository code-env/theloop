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
    <div
      className={clsx(
        "absolute  text-gray-800 w-full group-hover:opacity-100 duration-300 opacity-0  transition-all",
        className,
        direction === "top" && "",
        direction === "right" && "-right-[125%] top-0"
      )}
      {...others}
    >
      <p
        className={clsx(
          "bg-slate-300 w-fit py-1 z-40 px-2 text-xs rounded after:h-full after:w-5 after:bg-slate-300 after:absolute after:-left-[10px] after:-z-10 after:duration-300  after:rotate-45 after:top-0",
          direction === "right" && ""
        )}
      >
        {label}
      </p>
    </div>
  );
};

export default HoverKit;
