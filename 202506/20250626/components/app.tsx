
// // 1번 예시
// // 너무나도 당연히 상위 렌더링시 하위가 렌더링 되다보니 성능이 나빠질 수 밖에 없다 : A -> B -> C -> D -> E 밑에있는거까지 바꿔버림 왜냐 같이 렌더링 해야하니까

// import react, from 'react';
// import Test from '$/test'; // 테스트 불러오기

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{ // <Test/> 는 테스트 가져오기
//   return <react.Fragment>
//     <Test/> 
//   </react.Fragment>
// };

// export default appComponent;

// // 1번 예시 끝


// // 2번 예시
// // useState로 페이지 갱신해봄 : 하위 컴포넌트 계속 렌더링 하니까 상위가 실행하면 하위도 실행하는게 기본 원칙 어쩔 수 없는 당연한 일

// import react, { useState } from 'react';
// import Test from '$/test';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{ // <Test/> 는 테스트 가져오기
//   const [value, valueChanger] = useState<number>(0)
//   return <react.Fragment>
//     {value}<br/>
//     <Test/><br/>
//     <button onClick={()=>valueChanger(value + 1)}>증가</button>
//   </react.Fragment>
// };

// export default appComponent;

// // 2번 예시 끝


// // 3번 예시
// // test2 작성하고 불러오고 테스트해보기

// import react, { useState } from 'react';
// import Test from '$/test';
// import Test2 from '$/test2';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{ // <Test/> 는 테스트 가져오기
//   const [value, valueChanger] = useState<number>(0)
//   return <react.Fragment>
//     {value}<br/>
//     <Test/><br/>
//     <Test2 value={value}/><br/>
//     <button onClick={()=>valueChanger(value + 1)}>증가</button>
//   </react.Fragment>
// };

// export default appComponent;

// // 3번 예시 끝


// // 4번 예시 
// // useMemo 렌더링 테스트 : 불필요한 렌더링 제거 Hello는 한번만 출력 어차피 안바뀔 내용이라면 고정된 값을 이용해서 리소스를 적게 만들고 빠르게 처리하게 있게 만든다

// import react, { useState, useMemo } from 'react';
// import Test from '$/test';
// import Test2 from '$/test2';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{ // <Test/> 는 테스트 가져오기
//   const [value, valueChanger] = useState<number>(0)
//   const tag = useMemo(()=><Test/>, []);
//   return <react.Fragment>
//     {value}<br/>
//     {tag}<br/>
//     <Test2 value={value}/><br/>
//     <button onClick={()=>valueChanger(value + 1)}>증가</button>
//   </react.Fragment>
// };

// export default appComponent;

// // 4번 예시 끝


// // 5번 예시 : 테스트 시 test2.tsx 30번 라인 const result = useMemo(()=>(props.value || 0) + 1, []); 활성화시키고 31번 비활성화 const result = useMemo(()=>(props.value || 0) + 1, [props.value]);
// // useMemo 렌더링 테스트 : 불필요한 렌더링 제거 Hello는 한번만 출력 어차피 안바뀔 내용이라면 고정된 값을 이용해서 리소스를 적게 만들고 빠르게 처리하게 있게 만든다 필요한 순간에만 특정태그 바뀌게

// import react, { useState, useMemo } from 'react';
// import Test from '$/test';
// import Test2 from '$/test2';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{ // <Test/> 는 테스트 가져오기
//   const [value, valueChanger] = useState<number>(0)
//   const [value2, value2Changer] = useState<number>(0)
//   const tag = useMemo(()=><Test/>, []);
//   const tag2 = useMemo(()=><Test2 value={value}/>, [value]);
//   return <react.Fragment>
//     {value} / {value2}<br/>
//     {tag}<br/>
//     {tag2}<br/>
//     <button onClick={()=>valueChanger(value + 1)}>증가</button>
//     <button onClick={()=>value2Changer(value2 + 1)}>증가</button>
//   </react.Fragment>
// };

// export default appComponent;

// // 5번 예시 끝


// // 6번 예시 : useCallback 추가!
// // 함수 변경되지 않도록 하는 게 메모제이션 기능의 특징이라 한다. 

// import react, { useState, useMemo, useCallback } from 'react';
// import Test from '$/test';
// import Test2 from '$/test2';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{ // <Test/> 는 테스트 가져오기
//   const [value, valueChanger] = useState<number>(0)
//   const [value2, value2Changer] = useState<number>(0)
//   const tag = useMemo(()=><Test/>, []);
//   const tag2 = useMemo(()=><Test2 value={value}/>, [value]);
//   const handler = useCallback(()=>valueChanger(value + 1), [value]); 
//   const handler2 = useCallback(()=>value2Changer(value2 + 1), [value2]);
//   return <react.Fragment>
//     {value} / {value2}<br/>
//     {tag}<br/>
//     {tag2}<br/>
//     <button onClick={handler}>증가</button>
//     <button onClick={handler2}>증가</button>
//   </react.Fragment>
// };

// export default appComponent;

// // 6번 예시 끝


// todolist 예시 : 현강 및 녹강에서 강사님이 실시간으로 같이 만듦
// 

import react, { useState, useMemo, useCallback } from 'react';
import Todolist from '$/todolist';


interface props {
};

const appComponent:react.FC<props> = (props:props)=>{
  return <react.Fragment>
    <Todolist/>
  </react.Fragment>
};

export default appComponent;

// todolist 예시 끝