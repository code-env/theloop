import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
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
