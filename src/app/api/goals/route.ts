// import { Goal } from "@prisma/client";

import prismadb from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { userId }: { userId: string | null } = auth();

    if (!userId)
      return new NextResponse("Unauthorized", {
        status: 401,
      });

    const { title, name, date, time } = body;

    if (!title || !name) {
      return new NextResponse("These fields are requuired", {
        status: 401,
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
