import { headerRoutes } from "@/constants";
import "@/styles/navbar.scss";
import Image from "next/image";

const Navbar = () => {
  const routes = headerRoutes();
  return (
    <header className="navbar__header">
      <nav>
        <div className="logo">
          <Image alt="theloop logo" src="/logo.svg" width={100} height={50} />
        </div>
        <ul>
          {routes.map((route, index) => (
            <li key={index}>{route.name}</li>
          ))}

          <li className="getStarted">Get started</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
