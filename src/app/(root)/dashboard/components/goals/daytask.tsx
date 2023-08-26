"use client";

import { cn } from "@/lib/utils";
import React, { FC, useState } from "react";

interface DailyTask {
  day: string;
  date: string;
}

const DayTask: FC<DailyTask> = ({ day, date }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <section
      className={cn(
        "flex-1 shadow-primary rounded-10 cursor-pointer p-2 bg-white h-fit",
        isClicked && "h-48"

      )}
      onClick={() => setIsClicked((prev) => !prev)}
    >
      <h1
        className={cn(
          "flex flex-col gap-1 slowmo border-b-0",
          isClicked && "border-b"
        )}
      >
        <span className="text-3xl font-semibold">{day}</span>
        <span className="text-xs">{date}</span>
      </h1>
    </section>
  );
};

export default DayTask;
