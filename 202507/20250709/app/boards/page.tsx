'use client' // 사용자 pc에서 함 서버에서 fetch하면 요청하면 사용자입장에서 함
import react, { useEffect, useState } from 'react';

export default function page() {
  const [boards, boardsChanger] = useState([]);
  useEffect(()=>{ // 의존성 배열을 비워두고 작성을 해야만 fetch할 수 있는 기반이 마련됨
    const Func = async ()=>{
      const boards = await fetch('/api/boards', {
        method:'post',
        body:JSON.stringify({page:1}) // 보통 request에 body 넣는다 json형태로
      }).then(v=>v.json());
      boardsChanger(boards);
    };
    Func();
  }, []); // 이 배열
  return <div>
    <ol>
      {boards.map(v=><li>{v}</li>)}
    </ol>
  </div>
}