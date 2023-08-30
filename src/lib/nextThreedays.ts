export function getNextThreeDays() {
  const today = new Date();
  const days = [];

  for (let i = 0; i < 3; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);

    const month = nextDay.getMonth() + 1; // Months are 0-based, so add 1
    const day = nextDay.getDate();
    const year = nextDay.getFullYear();

    const formattedDate = `${month}/${day}/${year}`;
    days.push(formattedDate);
  }

  return days;
}
