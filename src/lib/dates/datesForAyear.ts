export function generateDatesArray() {
  const datesArray = [];
  const currentDate = new Date();

  for (let month = 0; month < 12; month++) {
    for (let day = 1; day <= 31; day++) {
      // Check if the date is valid (e.g., February 31 doesn't exist)
      if (
        new Date(currentDate.getFullYear(), month, day).getMonth() === month
      ) {
        const formattedDate = `${
          month + 1
        }/${day}/${currentDate.getFullYear()}`;
        datesArray.push(formattedDate);
      }
    }
  }

  return datesArray;
}

export function formatDate(inputDate: string): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const parts = inputDate.split("/");
  if (parts.length !== 3) {
    throw new Error('Invalid date format. Please use the format "M/D/YYYY".');
  }

  const month = parseInt(parts[0]) - 1; // Adjust for 0-based month
  const day = parseInt(parts[1]);
  const year = parseInt(parts[2]);

  if (isNaN(month) || isNaN(day) || isNaN(year)) {
    throw new Error("Invalid date components.");
  }

  const date = new Date(year, month, day);
  const dayOfWeek = daysOfWeek[date.getDay()];
  const monthName = months[date.getMonth()];
  const formattedDate = `${dayOfWeek}, ${monthName} ${day}`;

  return formattedDate;
}

// Example usage:
