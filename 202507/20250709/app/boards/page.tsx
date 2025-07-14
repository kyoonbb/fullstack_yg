'use client'
import react, { useEffect, useState } from 'react';

export default function page() {
  const [boards, boardsChanger] = useState([]);
  useEffect(()=>{
    const Func = async ()=>{
      const boards = await fetch('/api/boards', {
        method:'post',
        body:JSON.stringify({page:1})
      }).then(v=>v.json());
      boardsChanger(boards);
    };
    Func();
  }, []);
  return <div>
    <ol>
      {boards.map(v=><li>{v}</li>)}
    </ol>
  </div>
}