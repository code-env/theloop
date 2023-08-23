import { Metadata } from "next";
import CreateGoal from "../components/form/createform";

export const metadata: Metadata = {
  title: "Goals",
  description: "Goals setting, Daily, Weekly, Monthly",
};

const Goals = async () => {
  return (
    <main>
      <CreateGoal />
    </main>
  );
};

export default Goals;
