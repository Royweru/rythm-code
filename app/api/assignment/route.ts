import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
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
    const { userId } = await auth();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const body = await req.json();
    const { description, phone, email, courseId, images } = await body;
    if (images.length === 0 || !images)
      return new NextResponse("Images are required");
    if (!courseId) return new NextResponse("Course id is required ");
    if (!email) return new NextResponse("Email is required ");
    if (!description) return new NextResponse("Description is required ");
    if (!phone) return new NextResponse("Phone number is required ");

    const res = await db.assignment.create({
      data: {
        phone,
        email,
        description,
        courseId,
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
