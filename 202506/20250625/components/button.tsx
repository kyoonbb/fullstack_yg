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