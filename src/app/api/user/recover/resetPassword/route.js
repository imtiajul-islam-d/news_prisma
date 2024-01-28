import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function PUT(req, res) {
  try {
    const reqBody = await req.json();
    const count = await prisma.users.count({
      where: { email: reqBody["email"], otp: reqBody["otp"] },
    });
    if (count > 0) {
      await prisma.users.update({
        where: { email: reqBody["email"] },
        data: {
          otp: "0",
          password: reqBody["password"],
        },
      });
      return NextResponse.json({
        status: "success",
        data: "Password Reset Success",
      });
    } else {
      return NextResponse.json({
        status: "failed",
        data: "Password Reset failed",
      });
    }
  } catch (error) {}
}
