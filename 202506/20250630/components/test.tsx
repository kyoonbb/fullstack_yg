
// // 비동기 컴포넌트 예시 1 : import 이걸 느리게 불러오게 만드는 테스트
// import react, { useEffect, useRef } from 'react';

// interface props {
// };

// const testComponent:react.FC<props> = (props:props)=>{
//   return <react.Fragment>
//     <div>Test</div>
//   </react.Fragment>
// };

// export default testComponent;
// // 비동기 컴포넌트 예시 1 끝



// 비동기 컴포넌트 예시 2
import react, { useEffect, useRef } from 'react';

interface props {
};

const testComponent:react.FC<props> = (props:props)=>{ //async를 막아버리겟다라고 메세지가 뜸 vite가 자기들 방식을 쓰라함
  // const datas = await fetch('https://www.reddit.com/r/gaming/new.json').then(v=>v.json()); //원래 레딧에서 데이터 끌어와서 함수로 만들었는데 막힌듯
  // const datas:number = await new Promise((resolve)=>setTimeout(()=>resolve(100), 3000));
  return <react.Fragment>
    <div>{3000}</div>
  </react.Fragment>
};

export default testComponent;
// 비동기 컴포넌트 예시 2 끝




