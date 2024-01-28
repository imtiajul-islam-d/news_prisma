import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET(req, res) {
  try {
    let result = await prisma.categories.findMany({
      select: { id: true, name: true },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: [] });
  }
}
