"use client";

import React from "react";
import DayTask from "./daytask";

const PersonalGoal = () => {
  // Create an array of day names.
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

  const currentDayIndex = currentDate.getDay();

  const next7Days = [];

  for (let i = 0; i < 3; i++) {
    // Calculate the index of the next day.
    const nextDayIndex = (currentDayIndex + i) % 7;

    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i);

    // Get the month and day of the next date.
    const month = nextDate.toLocaleString("en-US", { month: "long" });
    const day = nextDate.getDate();

    const formattedDate = `${month} ${day}`;

    const nextDayName = {
      day: daysOfWeek[nextDayIndex],
      formattedDate,
    };
    next7Days.push(nextDayName);
  }

  // Print the names of the next 7 days excluding today.
  //   console.log("Next 7 Days (excluding today):", next7Days);

  return (
    <section className="flex items-center gap-5">
      {next7Days.map(({ day, formattedDate }, index) => (
        <DayTask day={day} key={index} date={formattedDate} />
      ))}
    </section>
  );
};

export default PersonalGoal;
