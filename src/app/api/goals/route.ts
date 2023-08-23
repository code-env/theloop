import { Goal } from "@prisma/client";

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

    const { title, description, endingDate } = body;

    const {} = body;
  } catch (error) {}
}
