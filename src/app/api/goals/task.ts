import prismadb from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // const { userId } = auth();

    // if (!userId) {
    //   return new NextResponse("Unauthorized", {
    //     status: 401,
    //   });
    // }

    // const { description, goalId, title } = body;
    // await prismadb.goalTask.create({
    //   data: {
    //     // description,
    //     goalId,
    //     // completed: false,

    //     title,
    //   },
    // });

    return NextResponse.json({
      msg: "Success",
    });
  } catch {
    return new NextResponse("Failed to created task");
  }
}
