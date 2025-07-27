
// // 예제 1
// import react from 'react';
// import global from '../public/global.module.css'; // css 불러오는 것 타입이 있어야 불러오기에 types/global.d.ts 폴더를 만들어서 조치
// interface props {
// };

// const buttonComponent:react.FC<props> = (props:props)=>{
//   // global.button -> button-EWijfkl23
//   return <react.Fragment>
//     <button className={global.button}>버튼</button>
//   </react.Fragment>
// };

// export default buttonComponent;
// // 예제 1 끝 


// 예제 2
import react from 'react';
interface props {
  className?:string
};

const buttonComponent:react.FC<props> = (props:props)=>{
  return <react.Fragment>
    <button className={props.className}>버튼</button>
  </react.Fragment>
};

export default buttonComponent;
// 예제 2 끝
