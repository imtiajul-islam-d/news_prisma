import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    const count = await prisma.users.count({ where: reqBody });
    if (count === 1) {
      return NextResponse.json({ status: "success", data: "Valid OTP Code" });
    } else {
      return NextResponse.json({ status: "failed", data: "Invalid OTP Code" });
    }
  } catch (error) {
    return NextResponse.json({ status: "failed", data: [] });
  }
}
