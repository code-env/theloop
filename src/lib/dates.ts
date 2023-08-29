import prismadb from "./db";
// Get today's date in the format "YYYY-MM-DD".
const today = new Date().toISOString().split("T")[0];

// Calculate the next two days.
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const nextDay = tomorrow.toISOString().split("T")[0];

const nextTwoDays = new Date();
nextTwoDays.setDate(nextTwoDays.getDate() + 2);
const dayAfterTomorrow = nextTwoDays.toISOString().split("T")[0];

async function getGoalsForSpecificDays() {
  const goalsForToday = await prismadb.goal.findMany({
    where: {
      date: today,
    },
  });

  const goalsForTomorrow = await prismadb.goal.findMany({
    where: {
      date: nextDay,
    },
  });

  const goalsForDayAfterTomorrow = await prismadb.goal.findMany({
    where: {
      date: dayAfterTomorrow,
    },
  });

  console.log("Goals for Today:", goalsForToday);
  console.log("Goals for Tomorrow:", goalsForTomorrow);
  console.log("Goals for Day After Tomorrow:", goalsForDayAfterTomorrow);
}

getGoalsForSpecificDays()
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(async () => {
    await prismadb.$disconnect();
  });
