import react, { MouseEventHandler } from 'react';

interface props {
  text?:string,
  color?:string,
  clickEvent?:MouseEventHandler
};

const buttonComponent:react.FC<props> = (props:props)=>{
  const text:string = props.text || '버튼';
  return <button style={{
    backgroundColor:props.color
  }} onClick={props.clickEvent}>
    {text}
  </button>
};

export default buttonComponent;

//이건 강사님 예제로 만든거임 중요한건 아님 흐름이 중요