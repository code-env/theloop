import React, { FC } from "react";
import clsx from "clsx";

interface hamburgerProps {
  isActive: boolean;
  onClick: () => void;
}

const Hamburger: FC<hamburgerProps> = ({ isActive, onClick }) => {
  console.log(isActive);

  return (
    <div
      onClick={onClick}
      className="md:hidden h-10 w-10 rounded flex flex-col justify-between items-end cursor-pointer"
    >
      <div
        className={clsx(
          "h-1 transition-all duration-300 w-1/2 bg-white rounded",
          isActive && "w-10"
        )}
      ></div>
      <div
        className={clsx(
          "h-1 transition-all duration-300 w-[80%] bg-white rounded"
        )}
      ></div>
      <div
        className={clsx(
          "h-1 transition-all duration-300 w-10 bg-white rounded"
        )}
      ></div>
    </div>
  );
};

export default Hamburger;
