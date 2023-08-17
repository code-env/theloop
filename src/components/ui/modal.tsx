import clsx from "clsx";
import React, { FC, HtmlHTMLAttributes, ReactNode } from "react";
import { XSquare } from "lucide-react";

interface modal extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isActive: boolean;
  setActive: (e: boolean) => void;
}

const Modal: FC<modal> = ({
  children,
  isActive,
  setActive,
  className,
  ...others
}) => {
  return (
    <div
      id="modal"
      className={clsx(
        "opacity-0 pointer-events-none top-0 left-0 modal z-[1000] backdrop-blur-lg bg-black/5 w-full h-screen fixed duration-300 transition-all flex items-center justify-center",
        isActive && "opacity-100 pointer-events-auto",
        className
      )}
      {...others}
      onClick={(e) => {
        // this ugly trick is gonna bite in the ass
        // in the future
        // quick fix: please this should be changed later
        if ((e.target as any).id == "modal") setActive(false)}
        }
    >
      <button
        className="absolute top-10 right-10"
        onClick={() => setActive(false)}
      >
        <XSquare />
      </button>

      {children}
    </div>
  );
};

export default Modal;
