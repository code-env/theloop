import React, { ReactNode } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

interface dashboard {
  children: ReactNode;
}

const DashboardLayout = ({ children }: dashboard) => {
  return (
    <html>
      <body className="bg-white text-black font-bold">
        <Header />
        <section className="max-w-7xl mx-auto flex">
          <Sidebar />
          <section className="p-4  w-full">{children}</section>
        </section>
      </body>
    </html>
  );
};

export default DashboardLayout;
