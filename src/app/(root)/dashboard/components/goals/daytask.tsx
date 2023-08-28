"use client";

import { currentTime } from "@/lib/getTime";
import { cn } from "@/lib/utils";
import { PlusCircle } from "lucide-react";
import React, { FC, useState } from "react";

interface DailyTask {
  day: string;
  date: string;
  isActive: boolean;
  onClick: () => void;
}

const DayTask: FC<DailyTask> = ({ day, date, onClick, isActive }) => {
  const time = currentTime();
  return (
    <section
      className={cn(
        "flex-1 shadow-primary rounded-10 cursor-pointer p-2 bg-white h-[105px] slowmo overflow-hidden contentspace",
        isActive && "h-48"
      )}
      onClick={onClick}
    >
      <h1
        className={cn(
          "flex flex-col gap-1 slowmo border-b-0",
          isActive && "border-b"
        )}
      >
        <span className="text-3xl font-semibold">{day}</span>
        <span className="text-xs justify-between flex">
          {date}
          <span className={cn("opacity-0 slowmo", isActive && "opacity-100")}>
            {" "}
            {time}
          </span>
        </span>
      </h1>
      <section
        className={cn(
          "v-center text-[#606060] justify-between opacity-100 slowmo",
          isActive && "opacity-0 pointer-events-none"
        )}
      >
        <p className="v-center gap-4  text-xl">
          <PlusCircle className="w-6 h-6" /> <span>Add a goal</span>
        </p>
        <p className="text-xs font-semibold">{time}</p>
      </section>
    </section>
  );
};

export default DayTask;
