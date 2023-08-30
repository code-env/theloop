"use client";

import React, { useState } from "react";
import DayTask from "./daytask";
import { nextdays as next3Days } from "@/lib/next-days";
import Tasks from "./Tasks";

const PersonalGoal = () => {
  const [activeUserIndex, setActiveUserIndex] = useState<number | null>(null);
  const nextdays = next3Days();

  const handleUserClick = (index: number) => {
    if (index !== activeUserIndex) {
      setActiveUserIndex(index);
    }
    // setActiveUserIndex(index === activeUserIndex ? null : index);
  };

  return (
    <section className="contentspace">
      <section className="flex items-start gap-5">
        {nextdays.map(({ day, formattedDate }, index) => (
          <DayTask
            day={day}
            key={index}
            date={formattedDate}
            isActive={index === activeUserIndex}
            onClick={() => handleUserClick(index)}
          />
        ))}
      </section>
      {/* <Tasks /> */}
    </section>
  );
};

export default PersonalGoal;
