import { NextRequest, NextResponse } from "next/server";
import { addJWT, JWTPayload } from '&/jwt';

export async function POST(req:NextRequest):Promise<NextResponse> {
  const form = await req.formData();
  const [id, pw] = [form.get('id'), form.get('pw')];
  if(id == 'abcd' && pw == '1234') {
    const payload:JWTPayload = {
      userId:id
    };
    return addJWT(payload, NextResponse.redirect("http://localhost:3000/"));
  }
  else return NextResponse.redirect("http://localhost:3000/login");
}