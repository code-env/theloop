import React from "react";

const GoalsHeader = () => {
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
  console.log("Current Day:", daysOfWeek[currentDayIndex]);
  console.log("Next 7 Days (excluding today):", next7Days);

  return <div>GoalsHeader</div>;
};

export default GoalsHeader;
