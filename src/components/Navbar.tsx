"use client";

import { useHeaderRoutes } from "@/constants";
// import "@/styles/navbar.scss";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const routes = useHeaderRoutes();
  return (
    <header className="h-20 flex items-center sticky top-0">
      <nav className="w-full flex items-center justify-between">
        <Link href="/" className="logo" style={{ display: "flex", justifyContent: "space-between"}}>
          <Image alt="theloop logo" src="/logo.svg" width={60} height={50} /><h1 className="text-3xl relative bottom-2">🚀</h1>
        </Link>
        <ul className="flex items-center gap-2 md:gap-4 xl:gap-8 text-lg">
          {routes.map((route, index) => (
            <li key={index} className="cursor-pointer">
              {route.name}
            </li>
          ))}

          <li className="cursor-pointer border border-aqua p-2 px-8 rounded hover:bg-aqua hover:text-secondary font-semibold duration-300 transition-all">
            Get started
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
