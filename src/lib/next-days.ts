export const nextdays = () => {
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

  return next7Days;
};
