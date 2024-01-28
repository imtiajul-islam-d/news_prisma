import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let type = searchParams.get("type");
    let result = await prisma.news_list.findMany({
      where: { type: type },
      select: {
        id: true,
        title: true,
        keywords: true,
        short_des: true,
        img1: true,
        img2: true,
        img3: true,
        img4: true,
        updatedAt: true,
        catID: true,
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: [] });
  }
}
