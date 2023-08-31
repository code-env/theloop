// "user server";

import { auth, currentUser } from "@clerk/nextjs";

import { getNextThreeDays } from "../nextThreedays";
import prismadb from "@/lib/db";
import { toast } from "sonner";

export const getUserGoals = async () => {
  try {
    const user = await currentUser();
    console.log(user);

    const { userId } = auth();

    const nextThreeDays = getNextThreeDays();

    const goals = await prismadb.goals.findMany({
      where: {
        userId: userId ? userId : "",
      },
    });

    const subTasks = await prismadb.goalTask.findMany();

    const results = nextThreeDays.map((day) => {
      const resolvedGoal = goals
        .filter((goal) => goal.date === day)
        .map((goal) => {
          return {
            ...goal,
            tasks: subTasks.filter((task) => task.goalId === goal.id),
          };
        });
      return { day, goal: resolvedGoal };
    });

    return results;
  } catch (error: any) {
    console.log(error.message);

    toast.error("something happened!!");
  }
};
