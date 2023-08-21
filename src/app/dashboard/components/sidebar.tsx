import HoverKit from "@/components/ui/hoverkit";
import { useSidebarRoutes } from "@/constants";
import { User } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const routes = useSidebarRoutes();
  return (
    <aside className="sidebar border-r flex flex-col justify-between py-20 w-20">
      <nav className="flex flex-col gap-2 items-center">
        {routes.map((route) => (
          <Link
            href={route.path}
            key={route.path}
            className="w-10/12 hover:bg-slate-300 duration-300 h-10 flex items-center justify-center rounded"
          >
            <li className="list-none">
              <route.icon size={30} />
            </li>
          </Link>
        ))}
      </nav>
      <section>
        <User className="cursor-pointer" size={30} />
      </section>
    </aside>
  );
};

export default Sidebar;
