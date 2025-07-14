import react, { useEffect, useRef, Suspense } from 'react';
// import global from '../public/global.module.css';
interface props {
  className?:string
};

const buttonComponent:react.FC<props> = (props:props)=>{
  // global.button -> button-EWijfkl23
  return <react.Fragment>
    <button className={props.className}>버튼</button>
    {/* <button className={global.button}>버튼</button> */}
  </react.Fragment>
};

export default buttonComponent;