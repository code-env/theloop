"use client";

import React, { FC, useState } from "react";
import { goalTypeVariant } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface goalHeadProps {
  activeGoalVarint: string;
  setActiveGoalVariant: (type: goalTypeVariant) => void;
}

const GoalsHeader: FC<goalHeadProps> = ({
  activeGoalVarint,
  setActiveGoalVariant,
}) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay(); // returns a number from 0 -6

  const next7Days = []; // Initialize an array to store the names of the next 7 days excluding today.

  // Loop through the next 7 days, excluding today.
  for (let i = 1; i <= 7; i++) {
    const nextDayIndex = (currentDayIndex + i) % 7; // Calculate the index of the next day.

    const nextDayName = daysOfWeek[nextDayIndex]; // Get the name of the next day and push it to the array.
    next7Days.push(nextDayName);
  }

  // Print the names of the next 7 days excluding today.
  // console.log("Current Day:", daysOfWeek[currentDayIndex]);
  // console.log("Next 7 Days (excluding today):", next7Days);

  const gt = ["Personal Goals", "Accelerator Goals", "Performance"];

  const handleClick = (variantType: string) => {
    setActiveGoalVariant(variantType as goalTypeVariant);
  };

  return (
    <section className="p-1 bg-slate-300 rounded-md flex gap-2">
      {gt.map((type) => (
        <Button
          key={type}
          variant="default"
          className={`flex-1 ${
            type === activeGoalVarint
              ? "bg-white text-primary font-semibold text-base hover:text-p"
              : "bg-transparent text-p"
          }`}
          onClick={() => handleClick(type)}
        >
          {type}
        </Button>
      ))}
    </section>
  );
};

export default GoalsHeader;
