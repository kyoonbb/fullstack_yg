import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest):Promise<NextResponse> {
  const data = await req.json()
  return NextResponse.json(['게시글1', '게시글2', '게시글3', data]);
}