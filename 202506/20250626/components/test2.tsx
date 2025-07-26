
// // test2 예제 1
// import react from 'react';

// interface props { // props에서 값을 받아오게 지정
//   value?:number
// };

// const testComponent:react.FC<props> = (props:props)=>{
//   console.log("World")
//   const result = (props.value || 0) + 1;
//   return <react.Fragment>
//     {result} World
//   </react.Fragment>
// };

// export default testComponent;
// // test2 예제 1 끝


// test2 예제 2 : useMemo : 고정된 값을 만들 수 있다
import react, { useMemo } from 'react'; // useMemo props에서 받아온 1 value를 기록해두겠어?

interface props { // props에서 값을 받아오게 지정
  value?:number
};

const testComponent:react.FC<props> = (props:props)=>{ 
  console.log("World")
  const result = useMemo(()=>(props.value || 0) + 1, []); // 이걸 실행하면 위만 바뀌고 밑은 안바뀜 둘 중 하나는 주석처리해서 테스트 해봐
  // const result = useMemo(()=>(props.value || 0) + 1, [props.value]); // 이걸 실행하면 바뀔 때 함께바뀜
  return <react.Fragment>
    {result} World
  </react.Fragment>
};

export default testComponent;
// test2 예제 2 끝 : useMemo를 이용하면 고정된 값을 이용할 수 있다