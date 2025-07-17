import { NextResponse, NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export interface JWTPayload {
  userId:string;
  iat?:number;
  exp?:number;
};
export function signJWT(payload:Omit<JWTPayload, 'iat' | 'exp'>):string {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: '3h'
  });
}
export function verifyJWT(token:string):JWTPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    return decoded;
  } catch {
    return null;
  }
}

export function getJWTFromCookiesAsString(cookieHeader:string | null):string | null {
  if(!cookieHeader) return null;
  // A=b;C=d;
  const cookies = cookieHeader.split(";").reduce((acc, cookie)=>{
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);
  const cookieName = process.env.JWT_COOKIE_NAME || 'auth';
  const token = cookies[cookieName];
  if(!token) return null;
  return token;
}

export function getJWTFromCookies(cookieHeader:string | null):JWTPayload | null {
  const jwtToken = getJWTFromCookiesAsString(cookieHeader);
  if(!jwtToken) return null;
  return verifyJWT(jwtToken);
}

export function addJWT(payload:JWTPayload, res:NextResponse):NextResponse {
  const cookieName = process.env.JWT_COOKIE_NAME || 'auth';
  const cookieOptions = {
    maxAge: 10800
  };
  res.cookies.set(cookieName, signJWT(payload), cookieOptions);
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