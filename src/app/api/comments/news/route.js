import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let postID = parseInt(searchParams.get("postID"));
    const result = await prisma.comments.findMany({
      where: { postID: postID },
      include: {
        users: { select: { firstName: true, lastName: true } },
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: [] });
  }
}
