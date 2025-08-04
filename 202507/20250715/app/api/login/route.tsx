import { NextRequest, NextResponse } from "next/server";
import { addJWT, JWTPayload } from '&/jwt';

export async function POST(req:NextRequest):Promise<NextResponse> {
  const form = await req.formData();
  const [id, pw] = [form.get('id'), form.get('pw')];
  if(id == 'abcd' && pw == '1234') { // 지정된 값 입력하면 기본경로로 감 아닐경우 계속 새로고침됨
    const payload:JWTPayload = {
      userId:id
    };
    return addJWT(payload, NextResponse.redirect("http://localhost:3000/"));
  }
  else return NextResponse.redirect("http://localhost:3000/login");
}