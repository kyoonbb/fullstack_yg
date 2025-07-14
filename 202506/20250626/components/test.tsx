import react from 'react';

interface props {
};

const testComponent:react.FC<props> = (props:props)=>{
  console.log("Hello")
  return <react.Fragment>
    Hello
  </react.Fragment>
};

export default testComponent;