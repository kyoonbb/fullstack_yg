import { NextRequest, NextResponse } from "next/server";
import { getJWTFromCookies, JWTPayload, refreshToken } from '&/jwt';

export function GET(req:NextRequest):NextResponse {
  const cookieHeader = req.headers.get("cookie");
  const payload:JWTPayload | null = getJWTFromCookies(cookieHeader);
  if(!payload) return NextResponse.json({message:"로그인이 필요합니다."});
  return refreshToken(req, 
    NextResponse.json({message:`${payload.userId}님 로그인을 환영합니다.`})
  );
}