import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Home = async () => {
  const user = await currentUser();

  if (user) return redirect("/dashboard");

  return (
    <main className="bg-primary min-h-screen text-white responsive-px mx-auto">
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;
