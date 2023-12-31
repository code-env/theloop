import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { username, email, phone } = body;

    if (!username || !email || !phone) {
      return new NextResponse("This field is required", {
        status: 500,
      });
    }

    await prismadb.waitList.create({
      data: {
        username,
        email,
        phone
      },
    });

    return NextResponse.json({
      msg: "everything okay",
    });
  } catch (error: any) {
    console.log("ERROR WHILE CREATING NEW POST", error.message);
    return new NextResponse("internal server error!!", {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    const waitList = await prismadb.waitList.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(waitList, { status: 200 });
  } catch (error: any) {
    console.log("ERROR WHILE GET ALL POST", error.message);
    return new NextResponse("internal server error!!", {
      status: 500,
    });
  }
}
