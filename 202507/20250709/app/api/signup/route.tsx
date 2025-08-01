import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest):Promise<NextResponse> { // async로 바꿔야한다 동기로 되면 너무 느려진다.
  const [id, pw] = [
    req.nextUrl.searchParams.get('id'),
    req.nextUrl.searchParams.get('pw')
  ]
  if(id == 'root') // 이거 root 아이디 입력 시
    return NextResponse.json({message:'이미 존재하는 아이디'}, {status:501}); // 이미 존재하는 아이디로 출력
  return NextResponse.json({message:'회원가입 성공'});
}


export async function POST(req:NextRequest):Promise<NextResponse> { // async는 여기도 동일get방식이 막혔다 ?!
  const data = await req.formData();
  const [id, pw] = [
    data.get('id'),
    data.get('pw')
  ]
  if(id == 'root')
    return NextResponse.json({message:'이미 존재하는 아이디'}, {status:501});
  return NextResponse.json({message:'회원가입 성공'});
  // const data = req.formData();
  // return NextResponse.json(data, {status:200});
}