import { Sun, Bell, User2, Search } from "lucide-react";
import Logo from "@/components/logo";

const Header = () => {
  return (
    <header className="flex w-full h-20 border-b font-proxima sticky top-0 bg-white">
      <div className="items-center px-20 justify-between flex max-w-7xl mx-auto w-full 2xl:px-0">
        <section>
          <Logo />
        </section>
        <section className="flex items-center w-96 border border-primaryDash h-10 overflow-hidden rounded">
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none px-2"
          />
          <button className="h-10 w-14 bg-primaryDash flex items-center justify-center text-white">
            <Search />
          </button>
        </section>
        <section className="flex items-center gap-4">
          <Sun className="cursor-pointer" />
          <Bell className="cursor-pointer" />
          <User2 className="cursor-pointer" />
        </section>
      </div>
    </header>
  );
};

export default Header;
