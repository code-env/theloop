import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="bg-primary min-h-screen text-white responsive-px mx-auto">
      <Navbar />
      <Hero />
    </main>
  );
};

export default page;
