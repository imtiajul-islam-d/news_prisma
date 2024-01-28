import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    const result = await prisma.subscribers.create({
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: error });
  }
}
