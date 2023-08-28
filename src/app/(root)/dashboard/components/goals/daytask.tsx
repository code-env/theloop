"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/inputNew";
import { currentTime } from "@/lib/getTime";
import { cn } from "@/lib/utils";
import { PlusCircle, X } from "lucide-react";
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
        "flex-1 shadow-primary rounded-10 cursor-pointer p-2 bg-white h-[105px] slowmo overflow-hidden contentspace relative",
        isActive && "h-[235px] cursor-default"
      )}
      onClick={onClick}
    >
      <h1
        className={cn(
          "flex flex-col gap-1 slowmo border-b-0",
          isActive && "border-b"
        )}
      >
        <span className="text-3xl font-semibold v-center justify-between">
          {day}
          <span
            className={cn(
              "opacity-0 slowmo  pointer-events-none",
              isActive && "opacity-100 cursor-pointer pointer-events-auto"
            )}
          >
            <X onClick={(e) => e.stopPropagation()} />
          </span>
        </span>
        <span className="text-xs justify-between flex">
          {date}
          <span className={cn("opacity-0 slowmo", isActive && "opacity-100")}>
            {time}
          </span>
        </span>
      </h1>
      <section
        className={cn(
          "v-center text-[#606060] justify-between opacity-100 slowmo relative",
          isActive && "opacity-0 pointer-events-none"
        )}
      >
        <p className="v-center gap-4  text-xl">
          <PlusCircle className="w-6 h-6" /> <span>Add a goal</span>
        </p>
        <p className="text-xs font-semibold">{time}</p>
      </section>
      <section
        className={cn(
          "flex-1 bg-white",
          isActive && "absolute w-full h-full top-[70px] left-0 px-2"
        )}
      >
        <section className="flex flex-col">
          <section>
            <p className="v-center justify-between">
              <span> Add title</span>
              <span className="v-center gap-1">
                <Checkbox />
                No title
              </span>
            </p>
            <Input className="h-[25px] border focus:ring-0" />
          </section>
          <section>
            <p>Add title</p>
            <Input className="h-[25px] border focus:ring-0" />
          </section>
          <Button
            className="v-center gap-2 mt-3 hover:bg-primaryDash hover:text-white slowmo self-end"
            variant="ghost"
          >
            <PlusCircle />
            Add
          </Button>
        </section>
      </section>
    </section>
  );
};

export default DayTask;
