import { Metadata } from "next";
import CreateGoal from "../components/form/createform";
import GoalsHeader from "../components/ghead";

export const metadata: Metadata = {
  title: "Goals",
  description: "Goals setting, Daily, Weekly, Monthly",
};

const Goals = async () => {
  return (
    <main>
      <GoalsHeader />
    </main>
  );
};

export default Goals;
