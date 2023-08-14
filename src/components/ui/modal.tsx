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
      className={clsx(
        "fixed top-0 left-0 pointer-events-auto h-screen w-screen bg-red-500/10 backdrop-blur transition duration-300",
        !isActive && "hidden pointer-events-none",
        className
      )}
      {...others}
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
