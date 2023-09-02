import React, { FC, useState } from "react";
import { Goal } from "@/lib/types";
import { useOutsideClick } from "@/lib/useClickOutside";
import SelectedGoal from "./selectedGoal";
interface GoalProps {
  goalTask: Goal;
  initialGoals: Goal[];
}

const Goal: FC<GoalProps> = ({ goalTask, initialGoals }) => {
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>();

  const ref = useOutsideClick(() => {
    setSelectedGoal(null);
  });
  if (selectedGoal) {
    return (
      <section className="fixed top-0 left-0 w-full h-full bg-black/20   z-[999] flex items-center justify-center">
        <SelectedGoal
          selected={selectedGoal}
          setSelectedGoal={setSelectedGoal}
          initialGoals={initialGoals}
        />
      </section>
    );
  }
  return (
    <div
      className="bg-white shadow-primary rounded-10 cursor-pointer p-2"
      onClick={() => setSelectedGoal(goalTask)}
    >
      <p>{goalTask.title}</p>
      <ul>
        {goalTask.tasks.map(({ task }, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Goal;
