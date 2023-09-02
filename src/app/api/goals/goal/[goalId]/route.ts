import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/db";

interface Params {
  goalId: string;
}

export async function DELETE(req: Request, { params }: { params: Params }) {
  try {
    const { userId }: { userId: string | null } = auth();

    const { goalId } = params;

    const goal = await prismadb.goals.findUnique({
      where: {
        id: goalId,
      },
    });

    if (!goal)
      return NextResponse.json(
        {
          msg: "Goal not found!!",
        },
        {
          status: 404,
        }
      );

    if (goal && goal.userId !== userId) {
      return NextResponse.json({
        msg: "You can only delete your goal",
      });
    }

    // if (userId) {
    const deletedGoal = await prismadb.goals.delete({
      where: {
        id: goal?.id,
      },
    });

    return NextResponse.json({
      msg: "deleted",
      deleted: deletedGoal,
    });

    // const transaction = await prismadb.$transaction([deleteTasks, deletedGoal]);
  } catch (error: any) {
    console.log("ERROR WHILE DELETING POST", error.message);
    return new NextResponse("Internal server error", {
      status: 500,
    });
  }
}
