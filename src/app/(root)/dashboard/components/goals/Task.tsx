"use client";

import { DayData } from "@/lib/types";
import React, { FC } from "react";
import Goal from "./goal";

interface TaskProps {
  task: DayData;
}

const Task: FC<TaskProps> = ({ task }) => {
  return (
    <section className="flex-1 contentspace">
      {task.goal.map((goal, index) => (
        <Goal goalTask={goal} key={index} />
      ))}
    </section>
  );
};

export default Task;
