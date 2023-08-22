import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "User dashboard chaeckout your workflow",
};

const Home = () => {
  return (
    <main className="bg-white text-black font-bold">
      <h1>Dashboard</h1>
    </main>
  );
};

export default Home;
