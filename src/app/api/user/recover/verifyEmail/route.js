import { NextResponse } from "next/server";
import { SendEmail } from "@/utility/EmailUtility";
import prisma from "@/lib/prisma";
export async function GET(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let email = searchParams.get("email");
    // user count
    const count = await prisma.users.count({ where: { email: email } });
    if (count === 1) {
      // make a code
      let code = Math.floor(100000 + Math.random() * 900000);
      let EmailText = `Your OTP Code is = ${code}`;
      let EmailSubject = "Next News Verification Code";
      // update user otp in database
      let result = await prisma.users.update({
        where: { email: email },
        data: { otp: code.toString() },
      });
      // sending email
      await SendEmail(email, EmailText, EmailSubject);
      // return
      return NextResponse.json({ status: "success", data: result });
    } else {
      return NextResponse.json({ status: "failed", data: "No user found" });
    }
  } catch (error) {
    return NextResponse.json({ status: "failed", data: [] });
  }
}
