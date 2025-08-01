
// // 예제 1 : NextRequest 첫번째 예제
// import { NextResponse, NextRequest } from 'next/server';

// interface props {
//   params: {
//     variable:string
//   }
// }

// export function GET(req:NextRequest, props:props):NextResponse {
//   const datas = Array.from({length:20}).map((_,i)=>i);

//   return NextResponse.json({datas, variable:props.params.variable},
//   {status:200});
// }
// // 예제 1 끝 : 참고 이미지 8 참조





// 예제 2 : 확장 예제
import { NextResponse, NextRequest } from 'next/server';

interface props {
  params: {
    variable:string
  }
}

export function GET(req:NextRequest, props:props):NextResponse {
  try {
    const variable = parseInt(props.params.variable);
    if(Number.isNaN(variable)) throw new Error('error'); // 넘버가 NaN이면 에러나게 
    const datas = 
      Array
        .from({length:variable})
        .map((_,i)=>i);
    return NextResponse.json(datas, {status:200});
  } catch {
    return NextResponse.json({
      message:`'${props.params.variable}' is not a number!` // 이건 숫자가 아니라고 오류나게 보여줌
    }, {status:500});
  }
}
// 예제 2 끝 :