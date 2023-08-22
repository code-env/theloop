import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "User dashboard chaeckout your workflow",
};

const Home = () => {
  return (
    <div className="bg-white text-black font-bold">
      <h1>Dashboard</h1>
    </div>
  );
};

export default Home;
