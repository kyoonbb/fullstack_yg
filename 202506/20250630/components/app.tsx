
// // 예제 1 : 동적 예시 첫번째 (강사님이 안 따라하지 된다고 했지만 녹강이니까 그냥 함)
// import react, { useEffect, useRef } from 'react';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{
//   const ref = useRef<any>(null);
//   useEffect(()=>{
//     setTimeout(()=>{
//       if(ref?.current?.textContent) ref.current.textContent = '받아온 데이터';
//     }, 2000); // ref 메세지 띄운 후 2초뒤에 ref.current.textContent 인 '받아온 데이터' 출력
//   }, []);
//   return <react.Fragment>
//     <div ref={ref}>Loading...</div>
//   </react.Fragment>
// };

// export default appComponent;
// // 예제 1 끝 : 비동기처럼 우회하는 동기 -> 잡기술임 이 코드 근본은 동기 컴포넌트임


// // 예제 2 : import()를 활용해서 로딩하는것을 보여주는 비동기 컴포넌트 예제, test1번 예제보고 테스트하기
// import react, { useEffect, useRef } from 'react';

// interface props {
// };

// // import('$/test') // 그렇다고 Promise타입만 있다고 비동기가 동작하지 않는다 lazy로 리턴값을 받아야한다. 아래처럼 말이다.
// const Lazy = react.lazy(()=>import('$/test'));


// const appComponent:react.FC<props> = (props:props)=>{
//   return <react.Fragment>
//     <Lazy/> 
//   </react.Fragment> // 위에 Lazy 태그를 적어주면 적용되는걸 볼 수 있다.
// };

// export default appComponent;
// // 예제 2 끝 : 


// // 예제 2-2 : import()를 활용해서 로딩하는것을 보여주는 비동기 컴포넌트 예제, test2번 예제보고 테스트하기
// import react, { useEffect, useRef } from 'react';

// interface props {
// };

// const Lazy = react.lazy(async()=>import('$/test')); // async를 여기다 추가한다. test 2번으로 테스트 해보자

// const appComponent:react.FC<props> = (props:props)=>{
//   return <react.Fragment>
//     <Lazy/> 
//   </react.Fragment>
// };

// export default appComponent;
// // 예제 2-2 끝 : 


// // 예제 2-3 : import()를 활용해서 로딩하는것을 보여주는 비동기 컴포넌트 예제
// import react, { useEffect, useRef } from 'react';

// interface props {
// };

// const Lazy = react.lazy(async ()=>{ // 이 뭉탱이 테스트 : 강사님이 이건 되나하고 테스트 한거
//   const data:any = await import('$/test');
//   return new Promise((resolve)=>setTimeout(()=>resolve(data), 3000)); // 3초뒤 띄우기
// });

// const appComponent:react.FC<props> = (props:props)=>{
//   return <react.Fragment>
//     Hello
//     <Lazy/> 
//   </react.Fragment>
// };

// export default appComponent;
// // 예제 2-3 끝 : 하지만 Lazy는 로딩 될때까지 아무것도 안보여주는게 문제라고 한다. 해당 페이지만 로딩이 되야하는데 페이지 통째로 로딩이 걸려버리니


// // 예제 3 : Suspense를 활용해서 보완하는걸 보여주는 예제
// import react, { useEffect, useRef, Suspense } from 'react';

// interface props {
// };

// const Lazy = react.lazy(async ()=>{ // 이 뭉탱이 테스트 : 강사님이 이건 되나하고 테스트 한거
//   const data:any = await import('$/test');
//   return new Promise((resolve)=>setTimeout(()=>resolve(data), 3000)); // 3초뒤 띄우기
// });

// const appComponent:react.FC<props> = (props:props)=>{
//   return <react.Fragment>
//     Hello
//     <Suspense fallback={<div>Loading...</div>}> 
//       <Lazy/>
//     </Suspense> 
//   </react.Fragment> // 뼈대(fallback)를 먼저 보여주고 로딩 끝나면 대체되어서 실제 데이터를 보여준다.
// };

// export default appComponent;
// // 예제 3 끝 :


// // 예제 4 : Suspense를 활용해서 보완하는걸 보여주는 예제
// import react, { useEffect, useRef, Suspense } from 'react';

// interface props {
// };

// const Lazy = react.lazy(async ()=>{ // 이 뭉탱이 테스트 : 강사님이 이건 되나하고 테스트 한거
//   const data:any = await import('$/test');
//   return new Promise((resolve)=>setTimeout(()=>resolve(data), 3000)); // 3초뒤 띄우기
// });

// const appComponent:react.FC<props> = (props:props)=>{
//   return <react.Fragment>
//     Hello
//     <Suspense fallback={<div>Loading...</div>}> 
//       <Lazy/>
//     </Suspense> 
//   </react.Fragment> // 뼈대(fallback)를 먼저 보여주고 로딩 끝나면 대체되어서 실제 데이터를 보여준다.
// };

// export default appComponent;
// // 예제 4 끝 :


// 예제 5 : 종합 예제 1번 - components 내의 boards.tsx 파일 1,2 번 두가지 예제 테스트
import react, { useEffect, useRef, Suspense } from 'react';

interface props {
};

const Lazy = react.lazy(()=>import('$/boards'));

const appComponent:react.FC<props> = (props:props)=>{
  return <react.Fragment>
    <Suspense fallback='Loading...'> 
      <Lazy/>
    </Suspense> 
  </react.Fragment>
};

export default appComponent;
// 예제 5 끝 :




// 레퍼런스 모음
// import react, { useEffect, useRef, Suspense } from 'react';

// // import Boards from '$/boards';

// interface props {
// };

// const Lazy = react.lazy(()=>import('$/boards'));

// // const Lazy = react.lazy(async ()=>{
// //   const data:any = await import('$/test');
// //   return new Promise((resolve)=>setTimeout(()=>resolve(data), 5000));
// // });

// const appComponent:react.FC<props> = (props:props)=>{
//   // const ref = useRef<any>(null);
//   // useEffect(()=>{
//   //   setTimeout(()=>{
//   //     if(ref?.current?.textContent) ref.current.textContent = '받아온 데이터';
//   //   }, 2000);
//   // }, []);
//   return <react.Fragment>
//     <Suspense fallback='Loading...'>
//       <Lazy/>
//     </Suspense>
//     {/* Hello
//     <Suspense fallback={<div>Loading...</div>}>
//       <Lazy/>
//     </Suspense> */}
//     {/* <div ref={ref}>Loading...</div> */}
//   </react.Fragment>
// };

// export default appComponent;





