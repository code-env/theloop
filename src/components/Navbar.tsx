"use client";

import { useHeaderRoutes } from "@/constants";
import "@/styles/navbar.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../components/logo";
import Hamburger from "./ui/hamburger";

const Navbar = () => {
  const routes = useHeaderRoutes();

  const [isActive, setIsActive] = useState(false);

  const handleStateChange = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <header className="h-20 flex items-center sticky top-0">
      <nav className="w-full flex items-center justify-between">
        <Logo />
        <ul className="flex items-center gap-2 md:gap-4 xl:gap-8 text-lg">
          {routes.map((route, index) => (
            <li key={index} className="cursor-pointer max-sm:hidden">
              {route.name}
            </li>
          ))}

          <li className="cursor-pointer border border-secondary py-2 px-8 rounded hover:bg-secondary hover:text-primary font-semibold duration-300 transition-all max-sm:py-1">
            Get started
          </li>

          <div className=""></div>
          <Hamburger isActive={isActive} onClick={handleStateChange} />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
