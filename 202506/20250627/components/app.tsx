// // 커스텀 훅 plusone 예시
// import react, { useState } from 'react';

// import { usePlusOne } from '@/hooks/plusone';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{
//   const [value, valueChanger] = usePlusOne(0);
//   return <react.Fragment>
//     {value}<br/>
//     <button onClick={()=>valueChanger(value * 2)}>증가</button>
//   </react.Fragment>
// };

// export default appComponent;

// // 커스텀 훅 plusone 예시 끝 : 짝수가 아마 절대 안나올거다 이유는 우리가 마지막에 +1 하는 훅을 넣었기 때문이다


// // 커스텀 훅 localstorage 예시
// import react, { useEffect } from 'react';

// import { useLocalStorage } from '@/hooks'; // index 첫 활용 예시 : 폴더째로 연결하기 위함

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{
//   const [value, valueChanger] = useLocalStorage<number>('Visited', 0);
//   useEffect(()=>valueChanger(value + 1),[]); // 한번만 불리는 이펙트
//   return <react.Fragment>
//     현재 웹페이지에 접속한 횟수 : {value} <br/>
//   </react.Fragment>
// };

// export default appComponent;

// // 커스텀 훅 localstorage 예시 끝 : 이미지 첨부해둠


// // 커스텀 훅 SessionStorage 예시 : localstorage와 다르게 껏다키면 없어짐 세션 초기화
// import react, { useEffect } from 'react';

// import { useSessionStorage } from '@/hooks'; // index 첫 활용 예시 : 폴더째로 연결하기 위함

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{
//   const [value, valueChanger] = useSessionStorage<number>('Visited', 0);
//   useEffect(()=>valueChanger(value + 1),[]); // 한번만 불리는 이펙트
//   return <react.Fragment>
//     현재 웹페이지에 접속한 횟수 : {value} <br/>
//   </react.Fragment>
// };

// export default appComponent;

// // 커스텀 훅 SessionStorage예시 끝 : localstorage와 너무 유사해 이미지 따로 없음


// // 커스텀 훅 modal창 예시 : modal창 17번 라인 -> display: props.isOpen ? 'block' : 'none', 줄 전체 주석처리 하면 변화 감지 가능
// import react, { useEffect } from 'react';

// import Modal from '$/modal';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{
//   return <react.Fragment>
//     <Modal title='제목' content='본문'/>
//   </react.Fragment>
// };

// export default appComponent;

// // 커스텀 훅 modal창 예시 끝 : 모달창에 긴건 html, css 가 주이니 크게 신경 안써도 된다.


// // 커스텀 훅 disclosure창 예시 : 아까 그 안나오는 걸 띄우기 위함
// import react, { useEffect, useState } from 'react';

// import { useDisclosure } from '@/hooks';

// import Modal from '$/modal';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{
//   const [value, valueChanger] = useState<number>(0);
//   const { isOpen, open, close } = useDisclosure(false);
//   return <react.Fragment>
//     <div>{value}</div>
//     <button onClick={()=>valueChanger(value + 1)}>숫자 증가</button>
//     <button onClick={()=>open()}>모달</button>
//     <Modal title='제목' content='본문' isOpen={isOpen} onClickBack={close}/> 
//   </react.Fragment>
// };

// export default appComponent;

// // 커스텀 훅 disclosure창 예시 끝 : 창이 여러군데 있으니 잘 보고 복습하자


// // 커스텀 훅 clamp창 예시 : 숫자제한 훅
// import react, { useEffect, useState } from 'react';

// import { useDisclosure, useClamp } from '@/hooks';

// import Modal from '$/modal';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{
//   const [value, valueChanger] = useClamp(1, 1, 500);
//   return <react.Fragment>
//     <div>{value}</div>
//     <button onClick={()=>valueChanger(value * 2)}>숫자 증가</button>

//   </react.Fragment>
// };

// export default appComponent;

// // 커스텀 훅 clamp창 예시 끝 :


// // 커스텀 훅 debounce창 예시 : debounce 쓰려면 input 태그 알아야한다
// import react, { useEffect, useState } from 'react';

// import { useDisclosure, useClamp, useDebounce } from '@/hooks';

// import Modal from '$/modal';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{
//   const [value, valueChanger] = useDebounce<string>('', 400); // 400 은 0.4초뒤에 뜸
//   return <react.Fragment>
//     <input onChange={e=>valueChanger(e.target.value)}/>
//     <div>{value}</div>
//   </react.Fragment>
// };

// export default appComponent;

// // 커스텀 훅 debounce창 예시 끝 :


// // 커스텀 훅 debounce창 naver 예시 : 멈췃을 때 값을 네이버에 검색
// import react, { useEffect, useState } from 'react';

// import { useDisclosure, useClamp, useDebounce } from '@/hooks';

// import Modal from '$/modal';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{
//   const [value, valueChanger] = useDebounce<string>('', 400);
//     useEffect(()=>{
//       fetch(
//         `https://ac.search.naver.com/nx/ac?q=${value}&con=0&frm=nv&ans=2&r_format=json&r_enc=UTF-8&r_unicode=0&t_koreng=1&run=2&rev=4&q_enc=UTF-8&st=100&ackey=9qmewtqm`
//     ).then(v=>v.json()).then((data)=>datasChanger(data.items)) // json형태로 받아오고 items에서 꺼내오게 만들기
//   }, [value]);
//   return <react.Fragment>
//     <input onChange={e=>valueChanger(e.target.value)}/>
//     <div>{value}</div>
//     <ul>
//       {
//         datas.map(data=><li>{data[0]}</li>)
//       }
//     </ul>
//   </react.Fragment>
// };

// export default appComponent;

// // 커스텀 훅 debounce창 naver 예시 끝 : 네이버가 막아놧다 함 재미로 보는거 실습은 불가



// import react, { useEffect, useState } from 'react';

// // import { usePlusOne } from '@/hooks/plusone';
// // import { useSessionStorage } from '@/hooks';
// import { useDisclosure, useClamp, useDebounce } from '@/hooks';

// import Modal from '$/modal';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{
//   // const [value, valueChanger] = useClamp(1, 1, 500);
//   // const { isOpen, open, close } = useDisclosure(false);
//   // const [value, valueChanger] = usePlusOne(0);
//   // const [value, valueChanger] = useSessionStorage<number>('Visited', 0);
//   // useEffect(()=>valueChanger(value + 1),[]);
//   const [ value, valueChanger ] = useDebounce<string>('', 400);
//   const [ datas ,datasChanger ] = useState([]);
//   useEffect(()=>{
//     fetch(
//       `https://ac.search.naver.com/nx/ac?q=${value}&con=0&frm=nv&ans=2&r_format=json&r_enc=UTF-8&r_unicode=0&t_koreng=1&run=2&rev=4&q_enc=UTF-8&st=100&ackey=9qmewtqm`
//     ).then(v=>v.json()).then((data)=>datasChanger(data.items))
//   }, [value]);
//   return <react.Fragment>
//     <input onChange={e=>valueChanger(e.target.value)}/>
//     <div>{value}</div>
//     <ul>
//       {
//         datas.map(data=><li>{data[0]}</li>)
//       }
//     </ul>
//     {/* <div>{value}</div>
//     <button onClick={()=>valueChanger(value * 2)}>숫자 증가</button> */}
//     {/* <button onClick={()=>open()}>모달창</button>
//     <Modal title='제목' content='본문' isOpen={isOpen} onClickBack={close}/> */}
//     {/* 현재 웹페이지에 접속한 횟수 : {value} <br/> */}
//     {/* {value}<br/>
//     <button onClick={()=>valueChanger(value * 2)}>증가</button> */}
//   </react.Fragment>
// };

// export default appComponent;