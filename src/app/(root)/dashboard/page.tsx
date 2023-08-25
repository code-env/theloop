import { Metadata } from "next";
import DHead from "./components/dhead";
import Dprogress from "./components/progress/dprogress";
import RecentCourse from "./components/Courses/recentCourse";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "User dashboard chaeckout your workflow",
};

const Home = () => {
  return (
    <main className="px-4 flex flex-col gap-8">
      <DHead username="Norbert A," />
      <section className="w-full flex flex-col gap-9">
        <Dprogress />
        <RecentCourse />
      </section>
    </main>
  );
};

export default Home;
