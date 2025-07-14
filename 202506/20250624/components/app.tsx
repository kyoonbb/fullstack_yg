import react from 'react';

interface props {
  name?:string,
  className?:string
};

const appComponent:react.FC<props> = (props:props)=>{
  const CustomTag:react.FC<props> = ()=>{
    return <div>커스텀 태그</div>
  }

  return <react.Fragment>
    <CustomTag/>
    {props.name}
    Second Hello
    복잡한 내용<br/>
    복잡한 내용<br/>
    복잡한 내용<br/>
    복잡한 내용<br/>
  </react.Fragment>
};

export default appComponent;