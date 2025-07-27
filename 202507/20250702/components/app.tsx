
// // 예제 1 : !적어주면 우선순위가 바뀐다. 첫번째 hhh 줄
// import react from 'react';
// import '../public/global.css';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{
//   return <react.Fragment> 
//     <div className='bg-red-500 bg-blue-500!'>hhh</div> 
//     <div className='nth-[2]:bg-red-200'>h</div>
//     <div className='nth-[2]:bg-red-200'>h</div>
//     <div className='nth-[2]:bg-red-200'>h</div>
//   </react.Fragment>
// };

// export default appComponent;
// // 예제 1 끝 : 만약 둘다 ! 있으면 의미 없음 근데 대체적으로 많은걸 처리해준다.


// // 예제 2 : 비교적 쉽게 표를 만드는걸 보여주는 예제 원래는 10칸 10칸 만들었는데 10개 만들고 10개는 키로 바꿔서 만드는걸 보여준다
// import react from 'react';
// import '../public/global.css';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{

//   const trs = Array.from({length:10}).map((_,i)=>{
//     const tds = Array.from({length:10}).map((_,j)=>{
//       return <td>{j}</td>
//     });
//     return <tr>{tds}</tr>
//   });

//   return <react.Fragment> 
//     <table>
//       <tbody>{trs}</tbody>
//     </table>
//   </react.Fragment>
// };

// export default appComponent;
// // 예제 2 끝 :


// // 예제 3 : 2번에 추가적으로 짝수줄 빨갛게 홀수줄 빨갛게 만드는걸 보고 싶다. 2번에 이어서 이걸 매우 빠르게 작업 변환할 수 있다는걸 보여준다
// import react from 'react';
// import '../public/global.css';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{

//   const trs = Array.from({length:10}).map((_,i)=>{
//     const tds = Array.from({length:10}).map((_,j)=>{
//       return <td>{j}</td>
//     });
//     if(i % 2 == 1)
//       return <tr className='hover:bg-[rgb(255,0,0)]'>{tds}</tr>
//     else
//       return <tr className='hover:bg-blue-500'>{tds}</tr>
//   });

//   return <react.Fragment> 
//     <table>
//       <tbody>{trs}</tbody>
//     </table>
//   </react.Fragment>
// };

// export default appComponent;
// // 예제 3 끝 :



// // 예제 4 : Layer와 작성하는 Custom 유틸리티 , + apply 예시
// import react from 'react';
// import '../public/global.css';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{

//   const trs = Array.from({length:10}).map((_,i)=>{
//     const tds = Array.from({length:10}).map((_,j)=>{
//       return <td>{j}</td>
//     });
//     if(i % 2 == 1)
//       return <tr className='hover:bg-[rgb(255,0,0)]'>{tds}</tr>
//     else
//       return <tr className='hover:bg-image tab-size-5'>{tds}</tr> // 여기에 5 * 8 로 40 픽셀로 만들어냈다
//   });

//   return <react.Fragment> 
//     <button className='button-ghost'>통일</button> 
//     <button className='button-normal'>통일</button>
//     <table>
//       <tbody>{trs}</tbody>
//     </table>
//   </react.Fragment> // 위에 버튼 두개는 따로 유틸리티 불러왔지만 뿌리는 button으로 같음
// };

// export default appComponent;
// // 예제 4 끝 :


// 예제 5 : 커스텀 Variation 예시
import react from 'react';
import '../public/global.css';

interface props {
};

const appComponent:react.FC<props> = (props:props)=>{

  const trs = Array.from({length:10}).map((_,i)=>{
    const tds = Array.from({length:10}).map((_,j)=>{
      return <td>{j}</td>
    });
    if(i % 2 == 1)
      return <tr className='hover:bg-[rgb(255,0,0)]'>{tds}</tr>
    else
      return <tr className='hover:bg-image tab-size-5'>{tds}</tr> // 여기에 5 * 8 로 40 픽셀로 만들어냈다
  });
// 밑에 dark를 light로 바꾸면 또 다르다
  return <react.Fragment> 
    <div data-theme="dark"> 
      <div className='
      dark:bg-gray-500 
      dark:text-white
      light:bg-white 
      light:text-black
      '>배경</div>
    </div>
    <button className='button-ghost'>통일</button> 
    <button className='button-normal'>통일</button>
    <table>
      <tbody>{trs}</tbody>
    </table>
  </react.Fragment>
};

export default appComponent;
// 예제 5 끝 : 테마에따라 색이 바뀌게 설정 



// import react, { useEffect, useRef, Suspense } from 'react';
// import '../public/global.css';

// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{

//   const trs = Array.from({length:10}).map((_,i)=>{
//     const tds = Array.from({length:10}).map((_,j)=>{
//       return <td>{j}</td>
//     });
//     if(i % 2 == 1)
//       return <tr className='hover:bg-[rgb(255,0,0)]'>{tds}</tr>
//     else
//       return <tr className='hover:bg-image tab-size-5'>{tds}</tr>
//   });

//   return <react.Fragment>
//     <div data-theme="light">
//       <div className='
//       dark:bg-gray-500 
//       dark:text-white
//       light:bg-white 
//       light:text-black
//       '>배경</div>
//     </div>
//     <button className='button-ghost'>통일</button>
//     <button className='button-normal'>통일</button>
//     <div className=''></div>
//     <table>
//       <tbody>{trs}</tbody>
//     </table>
//     {/* <div className='bg-red-500 bg-blue-500!'>hhh</div>
//     <div className='nth-[2]:bg-red-200'>h</div>
//     <div className='nth-[2]:bg-red-200'>h</div>
//     <div className='nth-[2]:bg-red-200'>h</div> */}
//   </react.Fragment>
// };

// export default appComponent;