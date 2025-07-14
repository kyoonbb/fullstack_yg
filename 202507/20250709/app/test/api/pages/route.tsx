import { NextResponse, NextRequest } from "next/server";

export function GET():NextResponse {
  return NextResponse.json(10);
}
export async function POST(req:NextRequest):Promise<NextResponse> {
  const page = await req.json();
  return NextResponse.json(
    Array.from({length:10}).map((_,i)=>i)
    .map((i)=>i + 1 + (page - 1) * 10)
  );
}