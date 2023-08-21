import React, { ReactNode } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

interface dashboard {
  children: ReactNode;
}

const DashboardLayout = ({ children }: dashboard) => {
  return (
    <main className="bg-white text-black font-bold">
      <Header />
      <section className="max-w-7xl mx-auto flex">
        <Sidebar />
        <section className="">{children}</section>
      </section>
    </main>
  );
};

export default DashboardLayout;
