import React, { FC } from "react";
import { Goal } from "@/lib/types";
interface GoalProps {
  goalTask: Goal;
}

const Goal: FC<GoalProps> = ({ goalTask }) => {
  return (
    <div className="bg-white shadow-primary rounded-10 cursor-pointer p-2">
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
