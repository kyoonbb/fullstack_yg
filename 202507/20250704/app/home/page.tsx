'use client'
import react from 'react';

export const metadata = {
  title:'홈 화면'
}

export default async function app_home_page(){
  await new Promise(resolve=>setTimeout(resolve,5000));
  return <div>
    홈경로
  </div>
}