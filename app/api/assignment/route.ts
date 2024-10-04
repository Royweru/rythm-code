import db from "@/lib/db";
import { NextResponse } from "next/server";

// export async function GET(
//     req: Request
// ) {
//   try {
//     const res = await db.assignment.findMany({
//       include: {
//         course: true,
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//     return NextResponse.json(res);
//   } catch (error) {
//     console.log(error);
//     return new NextResponse("Server Error", { status: 500 });
//   }
// }
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const res = await db.assignment.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
