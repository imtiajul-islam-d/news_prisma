import { NextResponse } from "next/server";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";
export async function GET(req, res) {
  try {
    let headerList = headers();
    let id = parseInt(headerList.get("id"));
    const result = await prisma.comments.findMany({
      where: { userID: id },
      include: {
        news_list: { select: { title: true } },
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: error });
  }
}
export async function POST(req, res) {
  try {
    let headerList = headers();
    let id = parseInt(headerList.get("id"));
    let reqBody = await req.json();
    reqBody.userID = id;
    const result = await prisma.comments.create({
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: error });
  }
}
export async function DELETE(req, res) {
  try {
    let headerList = headers();
    let user_id = parseInt(headerList.get("id"));
    let reqBody = await req.json();
    let comment_id = parseInt(reqBody["id"]);
    const result = await prisma.comments.deleteMany({
      where: {
        AND: [{ userID: user_id }, { id: comment_id }],
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: error });
  }
}
