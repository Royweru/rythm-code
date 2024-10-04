import db from "@/lib/db";
import { NextResponse } from "next/server";

// export async function GET(
//     req: Request
// ) {
//   try {
//     const res = await db.course.findMany({
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
export async function PUT(
  req: Request,
  {
    params,
  }: {
    params: {
     courseId: string;
    };
  }
) {
  try {
    const body = await req.json();
    const res = await db.course.update({
      where: {
        id: params.courseId,
      },
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
export async function DELETE(
  req: Request,
  {
    params,
  }: {
    params: {
     courseId: string;
    };
  }
) {
  try {
    const res = await db.course.delete({
      where: {
        id: params.courseId,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
