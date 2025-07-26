
// // 1번 예제
// import react, { useEffect, useRef, Suspense, lazy } from 'react';

// interface props {
// };

// const appComponent:react.FC<props> = async (props:props)=>{
//   const boards:any = await import('@/dummy/boards');
//   return <react.Fragment>
//     <ol>
//       <li>
//         <span>제목</span>
//         <span>작성자</span>
//         <span>작성일</span>
//       </li>
//       {boards.dummy}
//     </ol>
//   </react.Fragment>
// };

// export default appComponent;
// // 1번 예제 끝


// 2번 예제
import react, { useEffect, useRef, Suspense, lazy } from 'react';

interface props {
};

const appComponent:react.FC<props> = async (props:props)=>{
  const boards:any = await import('@/dummy/boards');
  const boards_obj = JSON.parse(boards.dummy);
  return <react.Fragment>
    <ol>
      <li>
        <span>제목</span>
        <span>작성자</span>
        <span>작성일</span>
      </li>
      {
        boards_obj.map((v:any)=><li>
          <span>{v.title}</span>
          <span>{v.user}</span>
          <span>{v.write}</span>
        </li>)
      }
    </ol>
  </react.Fragment>
};

export default appComponent;
// 2번 예제 끝
