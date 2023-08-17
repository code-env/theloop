"use client";

import { useHeaderRoutes } from "@/constants";
import "@/styles/navbar.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../components/logo";

const Navbar = () => {
  const routes = useHeaderRoutes();

  const [isActive, setIsActive] = useState(false);
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

          <li className="cursor-pointer border border-secondary p-2 px-8 rounded hover:bg-secondary hover:text-primary font-semibold duration-300 transition-all">
            Get started
          </li>

          <div className=""></div>
          <div className="max-sm:block hidden h-10 w-10 bg-red-300 rounded  flex-col justify-between">
            <span className="h-1 w-10 bg-black"></span>
            <span className="h-1 w-10 bg-black"></span>
            <span className="h-1 w-10 bg-black"></span>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
