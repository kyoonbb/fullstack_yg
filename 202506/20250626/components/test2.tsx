import react, { useMemo } from 'react';

interface props {
  value?:number
};

const testComponent:react.FC<props> = (props:props)=>{
  console.log("World")
  // const result = useMemo(()=>(props.value || 0) + 1, [props.value]);
  const result = (props.value || 0) + 1;
  return <react.Fragment>
    {result} World
  </react.Fragment>
};

export default testComponent;