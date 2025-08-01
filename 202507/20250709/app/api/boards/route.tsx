import { NextRequest, NextResponse } from "next/server"; // 데이터는 처음에는 없다가 fetch 받아오기에 시차가 생겨서 계속 새로고침하면 깜박인다. 참고이미지 4 참조

export async function POST(req:NextRequest):Promise<NextResponse> {
  const data = await req.json()
  return NextResponse.json(['게시글1', '게시글2', '게시글3', data]);
}