"use client";

// import Avatar from "@/components/Avatar";
import HoverKit from "@/components/ui/hoverkit";
import { useSidebarRoutes } from "@/constants";
import { cn } from "@/lib/utils";
import { User2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useState } from "react";

const Sidebar = () => {
  const routes = useSidebarRoutes();
  const pathname = usePathname();

  return (
    <aside className="sidebar border-r flex flex-col justify-between py-20 w-20">
      <nav className="flex flex-col gap-4 items-center">
        {routes.map((route) => (
          <Link
            href={route.path}
            key={route.path}
            className={cn(
              "w-10/12 hover:bg-slate-300 duration-300 h-10 flex items-center justify-center rounded relative group",
              pathname === route.path && "bg-primaryDash"
            )}
          >
            <li className="list-none">
              <route.icon
                size={30}
                color={pathname === route.path ? "white" : "black"}
              />
              <HoverKit label={route.name} direction="right" />
            </li>
          </Link>
        ))}
      </nav>
      <section className="flex flex-col gap-1 items-center">
        <Link
          href="/dashboard/account"
          className={cn(
            "w-10/12 hover:bg-slate-300 duration-300 h-10 flex items-center justify-center rounded relative group",
            pathname === "/dashboard/account" && "bg-slate-300 "
          )}
        >
          <User2 />
          <HoverKit label="Profile" direction="right" />
        </Link>
      </section>
    </aside>
  );
};

export default Sidebar;
