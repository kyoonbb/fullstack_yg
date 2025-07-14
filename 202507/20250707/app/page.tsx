import react from 'react';
import Link from 'next/link';

export default function app_page(){
  return <div>
    기본경로
    <Link href={'/mypage'}>마이페이지</Link>
    <Link href={'/mypage/root'}>루트페이지</Link>
    {/* <a href='/mypage'>마이페이지</a> */}
  </div>
}