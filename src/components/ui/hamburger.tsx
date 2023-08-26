import React, { FC } from "react";
import clsx from "clsx";

interface hamburgerProps {
  isActive: boolean;
  onClick: () => void;
}

const Hamburger: FC<hamburgerProps> = ({ isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "md:hidden relative h-10 w-10 rounded flex flex-col justify-between items-end cursor-pointer z-50 rotate-0 slowmo",
        isActive && "rotate-180 h-5"
      )}
    >
      <div
        className={clsx(
          "h-1 slowmo w-1/2 bg-white rounded",
          isActive && "w-10"
        )}
      ></div>
      <div
        className={clsx(
          "h-1 slowmo w-[80%] bg-white rounded",
          isActive && "w-10 opacity-0"
        )}
      ></div>
      <div
        className={clsx("h-1 slowmo w-10 bg-white rounded", isActive && "")}
      ></div>
    </div>
  );
};

export default Hamburger;
