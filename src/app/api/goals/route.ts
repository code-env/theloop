// import { Goal } from "@prisma/client";

import prismadb from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { userId } = auth();

    if (!userId)
      return new NextResponse("Nigga you're unauthorized", {
        status: 401,
      });

    const { title, description, endingDate, goalType, community } = body;

    if (!title || !description || !endingDate || !goalType) {
      return new NextResponse("This fields are required", {
        status: 500,
      });
    }

    const newGoal = {
      title,
      description,
      endingDate,
      goalType,
      userId,
      completionMessage: "",
    };

    if (goalType === "Community") {
      await prismadb.goal.create({
        data: { ...newGoal, community },
      });
    } else {
      await prismadb.goal.create({
        data: { ...newGoal },
      });
    }

    return NextResponse.json({
      msg: "Created succesfully",
    });
  } catch (error: any) {
    console.log("ERROR WHILE CREATING POST", error.message);
    return new NextResponse("Internal server error", {
      status: 500,
    });
  }
}
