import React, { ReactNode } from "react";
import Header from "./components/header";
import { Theme } from "@radix-ui/themes";
import Sidebar from "./components/sidebar";
import "@radix-ui/themes/styles.css";
import Infos from "./components/infos";

interface dashboard {
  children: ReactNode;
}

const DashboardLayout = ({ children }: dashboard) => {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Header />
          <section className="max-w-7xl mx-auto flex font-proxima">
            <Sidebar />
            <section className="py-4 w-full flex gap-4">
              <section className="flex-1">{children}</section>
              <Infos />
            </section>
          </section>
        </Theme>
      </body>
    </html>
  );
};

export default DashboardLayout;
