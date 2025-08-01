// // 예제 1 : 백엔드 첫 app/api 예제 NextJS에 걸맞게 쓰기위해서 해당 객체의 확장판인 NextResponse를 이용하여 객체로 반환

// import { NextResponse } from 'next/server';

// export function GET():NextResponse {
//   const datas = Array.from({length:20}).map((_,i)=>i);

//   return NextResponse.json(datas); // 우리가 만든 데이터의 형태를 json의 형태로 문자열로 반환하겠다는 백엔드 기능이 만들어짐
// }
// // 예제 1 끝 : 응답형 데이터로 가공한 다음 리턴을 해줘야함


// // 예제 2 : 오류가 났을 때 보여주는 예제 그렇게 안하면 오류나서 서버 계속 기다리다가 터진다.

// import { NextResponse } from 'next/server';

// export function GET():NextResponse {
//   const datas = Array.from({length:20}).map((_,i)=>i);

//   // return NextResponse.json(datas); // 2번 예제 테스트 하려면 일부러 오류를 내야한다. 여기선 기존 리턴값을 없앴다.
//   return NextResponse.json({message:'오류 발생'}, {status:500}); // 응답을 하는 것이다. 
// }
// // 예제 2 끝 : NextResponse 의 .json(보낼정보, 옵션) 설명이기도 하다


// // 예제 3 : NextResponse 의 .redirect(URL, 옵션) 설명

// import { NextResponse } from 'next/server';

// export function GET():NextResponse {
//   const datas = Array.from({length:20}).map((_,i)=>i);

//   return NextResponse.redirect('https://www.naver.com');
// }
// // 예제 3 끝 : http://localhost:3000/api/board 입력하면 바로 네이버로 이동한다. 이동을 보여줘야하기에 캡처를 못하여 참고사진은 없다. 물론 우리가 경로가 저래서 그런거다.


// 예제 4 : 내일 배울거 NextRequest 정석적인 방법

import { NextResponse, NextRequest } from 'next/server';

interface props {
  params: {
    variable:string // variable 안에 넣었을 경우이다. 그래서 이 시점 강사님이 복사하여 이 route.tsx 파일을 /app/api/boards/variable 안에 넣었다.
  }
}


export function GET(req:NextRequest, props:props):NextResponse {
  const datas = Array.from({length:20}).map((_,i)=>i);

  return NextResponse.json(datas, {status:200});
}

// 예제 4 끝 : 이제 /app/api/boards/variable 폴더 안에 route.tsx에 예제 1번으로 이동하여 봐라


// // 오리지널
// import { NextResponse, NextRequest } from 'next/server';

// interface props {
//   params: {
//     variable:string
//   }
// }


// export function GET(req:NextRequest, props:props):NextResponse {
//   const datas = Array.from({length:20}).map((_,i)=>i);

//   return NextResponse.json(datas, {status:200});
//   // NextResponse.next({});
//   // return NextResponse.redirect('https://www.naver.com', {
//   //   status:200,headers:{}
//   // });
//   // return NextResponse.json(datas);
//   // return NextResponse.json({message:'오류 발생'}, {status:500});
//   // NextResponse.
// }