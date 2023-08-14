import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="bg-gradient min-h-screen text-white responsive-px">
      <Navbar />
      <Hero />
    </main>
  );
};

export default page;
