"use client";

import React, { useState } from "react";
import GoalsHeader from "../ghead";
import { goalTypeVariant } from "@/lib/types";
import PersonalGoal from "./PersonalGoal";
import Performance from "./Performance";
import AcceleratorGoal from "./AcceleratorGoal";
// import { useParams } from "next/navigation";

const GoalWrapper = () => {
  const [activeGoalVarint, setActiveGoalVariant] =
    useState<goalTypeVariant>("Personal Goals");

  return (
    <div className="flex flex-col gap-3">
      <GoalsHeader
        activeGoalVarint={activeGoalVarint}
        setActiveGoalVariant={setActiveGoalVariant}
      />
      {activeGoalVarint === "Personal Goals" && <PersonalGoal />}
      {activeGoalVarint === "Accelerator Goals" && <AcceleratorGoal />}
      {activeGoalVarint === "Performance" && <Performance />}
    </div>
  );
};

export default GoalWrapper;
