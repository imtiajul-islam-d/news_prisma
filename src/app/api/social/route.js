import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET(req, res) {
  try {
    const result = await prisma.socials.findMany();
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: [] });
  }
}
