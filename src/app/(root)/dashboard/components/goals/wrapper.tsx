"use client";

import React, { FC, useState } from "react";
import GoalsHeader from "./ghead";
import { goalTypeVariant } from "@/lib/types";
import PersonalGoal from "./PersonalGoal";
import Performance from "./Performance";
import AcceleratorGoal from "./AcceleratorGoal";

interface GoalWrapperProps {
  userId: string;
}

const GoalWrapper: FC<GoalWrapperProps> = ({ userId }) => {
  const [activeGoalVarint, setActiveGoalVariant] =
    useState<goalTypeVariant>("Personal Goals");

  return (
    <div className="flex flex-col gap-3 max-w-[846.656px] mx-auto min-w-[846.656px] personal py-4">
      <GoalsHeader
        activeGoalVarint={activeGoalVarint}
        setActiveGoalVariant={setActiveGoalVariant}
      />
      {activeGoalVarint === "Personal Goals" && (
        <PersonalGoal userId={userId} />
        // <span>personal goal</span>
      )}
      {activeGoalVarint === "Accelerator Goals" && <AcceleratorGoal />}
      {activeGoalVarint === "Performance" && <Performance />}
    </div>
  );
};

export default GoalWrapper;
