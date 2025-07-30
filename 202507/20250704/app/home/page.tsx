'use client' // 실시간 경로변경 예제를 보고 싶다면 이걸 주석처리하고 해야한다 안그러면 에러난다
import react from 'react';

export const metadata = {
  title:'홈 화면'
}

export default async function app_home_page(){
  await new Promise(resolve=>setTimeout(resolve,5000)); // 5초동안 대기하게
  return <div>
    홈경로
  </div>
}