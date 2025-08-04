import { NextResponse, NextRequest } from 'next/server'; // 쿠키를 담게 하는 기능을 만들어준다.
import jwt from 'jsonwebtoken'; // 이게 있어야 토큰을 잘 가져온다

const JWT_SECRET = process.env.JWT_SECRET || 'secret'; // 변수로 받고 넣어준다

export interface JWTPayload {
  userId:string; // 말그대로 아이디
  iat?:number; // 만료기한 이름이 다를 수 있으니 두개 씀
  exp?:number; // 보통은 이거씀 위와 동일
};
export function signJWT(payload:Omit<JWTPayload, 'iat' | 'exp'>):string { //sign:서명 우리가 가지고 있는 정보를 서명하겠다, Omit 둘 중 하나만 있을 예정 타입스크리트에 있는거임
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: '3h' // 우리가 명시한거와 별개로 JWT 자체가 만료기간 체크
  });
}
export function verifyJWT(token:string):JWTPayload | null { //verify: 인증  
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    return decoded;
  } catch {
    return null; 
  }
}

export function getJWTFromCookiesAsString(cookieHeader:string | null):string | null { // 만들어낸 jwt쿠키에 토큰을 담고 꺼내와야 한다
  if(!cookieHeader) return null;
  // A=b;C=d; 이런모양 쿠키가 많다.
  const cookies = cookieHeader.split(";").reduce((acc, cookie)=>{
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);
  const cookieName = process.env.JWT_COOKIE_NAME || 'auth'; // 안 적었을 때 대비 'auth'
  const token = cookies[cookieName];
  if(!token) return null;
  return token;
}

export function getJWTFromCookies(cookieHeader:string | null):JWTPayload | null { // 검증여부 확인 함수 제작
  const jwtToken = getJWTFromCookiesAsString(cookieHeader);
  if(!jwtToken) return null;
  return verifyJWT(jwtToken); //담겨있는 쿠키를 보는것
}

export function addJWT(payload:JWTPayload, res:NextResponse):NextResponse {
  const cookieName = process.env.JWT_COOKIE_NAME || 'auth';
  const cookieOptions = {
    maxAge: 10800
  };
  res.cookies.set(cookieName, signJWT(payload), cookieOptions); // 알아서 쿠키를 세팅
  return res;
}

export function isTokenExpiringSoon(token:JWTPayload):boolean {
  const expiryTime = token.exp;
  if(!expiryTime) return true;
  const now = Math.floor(Date.now() / 1000);
  const timeUntilExpiry = expiryTime - now;
  return timeUntilExpiry <= 3600;
}

export function refreshToken(req:NextRequest, res:NextResponse):NextResponse {
  try {
    const cookieHeader = req.headers.get("cookie");
    const payload:JWTPayload|null = getJWTFromCookies(cookieHeader);
    if(payload && isTokenExpiringSoon(payload)) {
      addJWT({
        userId:payload.userId
      }, res);
    }
  } finally {
    return res;
  }
}