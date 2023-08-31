import { generateDatesArray } from "@/lib/dates/datesForAyear";
import prismadb from "@/lib/db";
import { getNextThreeDays } from "@/lib/nextThreedays";
import { NextResponse } from "next/server";

interface Params {
  userId: string;
}

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const { userId } = params;

    const goals = await prismadb.goals.findMany({
      where: {
        userId,
      },
    });

    const days = generateDatesArray();

    const subTasks = await prismadb.goalTask.findMany();

    const results = days.map((day) => {
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

    // if (goals) {
    //   const goalsPerDay = nextThreeDays.map((day) => {
    //     return goals.map((goal) => {
    //       const foundGoal = goal.date.includes(day);
    //       if (foundGoal) {
    //         // Find subtasks with matching goalId
    //         const matchingSubTasks = subTasks.filter(
    //           (task) => task.goalId === goal.id
    //         );
    //         return {
    //           ...goal,
    //           subtasks: matchingSubTasks,
    //         };
    //       }
    //       return goal;
    //     });
    //   });

    return NextResponse.json(results);
    // }
  } catch (error: any) {
    console.log("ERROR WHILE POST", error.message);
    return new NextResponse("Internal server error", {
      status: 500,
    });
  }
}

// import prismadb from "@/lib/db";
// import { getNextThreeDays } from "@/lib/nextThreedays";
// import { NextResponse } from "next/server";

// interface Params {
//   userId: string;
// }

// export async function GET(req: Request, { params }: { params: Params }) {
//   try {
//     const { userId } = params;

//     const nextThreeDays = getNextThreeDays();

//     const goals = await prismadb.goals.findMany({
//       where: {
//         userId,
//       },
//     });

//     const subTasks = await prismadb.goalTask.findMany();

//     if (goals) {
//       const goalsPerDay = nextThreeDays.map((day) => {
//         return goals.map((goal) => {
//           const foundGoal = goal.date.includes(day);
//           if (foundGoal) {
//             // Find subtasks with matching goalId
//             const matchingSubTasks = subTasks.filter(
//               (task) => task.goalId === goal.id
//             );
//             return {
//               ...goal,
//               subtasks: matchingSubTasks,
//             };
//           }
//           return goal;
//         });
//       });

//       return NextResponse.json(goalsPerDay);
//     }
//   } catch (error: any) {
//     console.log("ERROR WHILE POST", error.message);
//     return new NextResponse("Internal server error", {
//       status: 500,
//     });
//   }
// }
