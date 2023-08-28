import { cn } from "@/lib/utils";
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
      className={cn(
        "absolute text-gray-800 w-full group-hover:opacity-100 opacity-0  slowmo",
        className,
        direction === "top" && "",
        direction === "right" &&
          "-right-[125%] top-1/2 transform -translate-y-1/2"
      )}
      {...others}
    >
      <p
        className={cn(
          "bg-slate-300 relative w-fit py-1 z-[1000] px-2 text-xs rounded after:h-full after:w-5 after:bg-slate-300 after:absolute after:-left-[10px] after:-z-10  after:duration-300  after:rotate-45 after:top-0",
          direction === "right" && "pl-1"
        )}
      >
        <span className="">{label}</span>
      </p>
    </div>
  );
};

export default HoverKit;
