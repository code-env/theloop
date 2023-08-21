import { useSidebarRoutes } from "@/constants";
import Link from "next/link";

const Sidebar = () => {
  const routes = useSidebarRoutes();
  return (
    <aside className="h-screen border-r flex flex-col justify-between py-20 w-20">
      <nav className="flex flex-col gap-1">
        {routes.map((route) => (
          <Link href={route.path} key={route.path}>
            <li className="flex ">
              <route.icon />
              <span className="sr-only">{route.name}</span>
            </li>
          </Link>
        ))}
      </nav>
      <section></section>
    </aside>
  );
};

export default Sidebar;
