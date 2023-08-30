export const convertDateString = (inputDate: string) => {
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

  const parts = inputDate.split(" ");

  if (parts.length === 3) {
    const monthIndex = months.indexOf(parts[1]);
    const day = parseInt(parts[2], 10);
    const year = new Date().getFullYear(); // Assuming current year

    if (monthIndex >= 0 && day >= 1 && day <= 31) {
      const formattedDate = `${monthIndex + 1}/${day}/${year}`;
      return formattedDate;
    }
  }

  return null; // Invalid input
};
