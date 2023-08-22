import React, { ReactNode } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { ClerkProvider } from "@clerk/nextjs";

interface dashboard {
  children: ReactNode;
}

const DashboardLayout = ({ children }: dashboard) => {
  return (
    <ClerkProvider>
      <html>
        <body className="bg-white text-black font-bold">
          <Header />
          <section className="max-w-7xl mx-auto flex">
            <Sidebar />
            <section className="p-4  w-full">{children}</section>
          </section>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default DashboardLayout;
