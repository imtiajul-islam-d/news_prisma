import { NextResponse } from "next/server";
import { CreateToken } from "@/utility/JWTTokenHelper";
import prisma from "@/lib/prisma";

export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    // finding user
    const result = await prisma.users.findUnique({ where: reqBody });

    if (result.length === 0) {
      return NextResponse.json({
        status: "failed",
        message: "User does not exist!",
      });
    } else {
      // issue token
      let token = await CreateToken(result["email"], result["id"]);
      // issue cookie
      let expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);
      let cookieString = `token=${token};expires=${expireDuration.toUTCString()};path=/`;
      return NextResponse.json(
        { status: "successful", data: token },
        { status: 200, headers: { "set-cookie": cookieString } }
      );
    }
  } catch (error) {
    return NextResponse.json({ status: "failed", data: error.toString() });
  }
}
