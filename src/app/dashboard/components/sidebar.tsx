"use client";

import HoverKit from "@/components/ui/hoverkit";
import { useSidebarRoutes } from "@/constants";
import clsx from "clsx";
import { User2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const routes = useSidebarRoutes();
  const pathname = usePathname();

  return (
    <aside className="sidebar border-r flex flex-col justify-between py-20 w-20">
      <nav className="flex flex-col gap-1 items-center">
        {routes.map((route) => (
          <Link
            href={route.path}
            key={route.path}
            className={clsx(
              "w-10/12 hover:bg-slate-300 duration-300 h-10 flex items-center justify-center rounded relative group",
              pathname === route.path && "bg-slate-300"
            )}
          >
            <li className="list-none">
              <route.icon size={30} />
              <HoverKit label={route.name} direction="right" />
            </li>
          </Link>
        ))}
      </nav>
      <section className="flex flex-col gap-1 items-center">
        <Link
          href="/dashboard/account"
          className={clsx(
            "w-10/12 hover:bg-slate-300 duration-300 h-10 flex items-center justify-center rounded relative group",
            pathname === "/dashboard/account" && "bg-slate-300"
          )}
        >
          <User2 className="cursor-pointer" size={30} />
        </Link>
      </section>
    </aside>
  );
};

export default Sidebar;
