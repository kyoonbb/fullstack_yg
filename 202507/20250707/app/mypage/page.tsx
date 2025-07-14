import react from 'react';
import Link from 'next/link';

interface props {
}

export default function app_mypage_page(){
  return <div>
    MyPage
    <Link href={'/mypage'}>마이페이지</Link>
    <Link href={'/mypage/root'}>루트페이지</Link>
  </div>
}