import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    const body = await req.json();
  try {

    const {userId} = await auth()
    if(!userId) return new NextResponse("Unauthorized",{status:403})
     
    if (!body.name) return new NextResponse("Name is missing", { status: 400 });

    const res = await db.course.create({
      data: {
        ...body,
      },
    });
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
export async function GET(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  req: Request
) {
    try {
      const res = await db.course.findMany({
        include: {
          assignments: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      return NextResponse.json(res);
    } catch (error) {
      console.log(error);
      return new NextResponse("Server Error", { status: 500 });
    }
  }