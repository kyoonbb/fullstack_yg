'use client'
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import react, { useEffect, useState } from 'react';

export default function page() {
  const [pages, pagesChanger] = useState(0);
  const [boards, boardsChanger] = useState([]);
  const params = useSearchParams();
  const realPage:any = params.get('page') || 1;
  useEffect(()=>{
    fetch('/test/api/pages', {method:'get'})
      .then(v=>v.json())
      .then(pagesChanger)
  }, []);
  useEffect(()=>{
    if(pages > 0) {
      fetch('/test/api/pages', {method:'post', body:JSON.stringify(realPage)})
        .then(v=>v.json())
        .then(boardsChanger)
    }
  }, [realPage]);
  return <react.Fragment>
    {
      boards.map((i)=><div>
        <Link href={`/test/board/${i}`}>{i}</Link>
      </div>)
    }
    {
      Array
        .from({length:pages})
        .map((_,i)=>i)
        .filter((i,_)=>(i + 1 - 5) <= realPage && realPage <= (i + 1 + 5))
        .map((i,_)=>
          <Link href={`/test/boards?page=${i+1}`}>{i + 1}</Link>
        )
    }
  </react.Fragment>
}