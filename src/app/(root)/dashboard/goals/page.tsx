import { Metadata } from "next";
import GoalWrapper from "../components/goals/wrapper";

export const metadata: Metadata = {
  title: "Goals",
  description: "Goals setting, Daily, Weekly, Monthly",
};

const Goals = async () => {
  return (
    <main className="px-4 flex flex-col gap-8">
      <GoalWrapper />
    </main>
  );
};

export default Goals;
