import React, { ReactNode } from "react";
import Header from "./components/header";
import { Theme } from "@radix-ui/themes";
import Sidebar from "./components/sidebar";
import "@radix-ui/themes/styles.css";

interface dashboard {
  children: ReactNode;
}

const DashboardLayout = ({ children }: dashboard) => {
  return (
    <html>
      <body>
        <Theme>
          <Header />
          <section className="max-w-7xl mx-auto flex">
            <Sidebar />
            <section className="p-4  w-full">{children}</section>
          </section>
        </Theme>
      </body>
    </html>
  );
};

export default DashboardLayout;
