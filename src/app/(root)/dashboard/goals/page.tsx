import { Metadata } from "next";
import GoalWrapper from "../components/goals/wrapper";
import { auth } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Goals",
  description: "Goals setting, Daily, Weekly, Monthly",
};

const Goals = async () => {
  const { userId } = auth();

  return (
    <main className="px-4 flex flex-col gap-8">
      <GoalWrapper userId={userId ? userId : ""} />
    </main>
  );
};

export default Goals;
