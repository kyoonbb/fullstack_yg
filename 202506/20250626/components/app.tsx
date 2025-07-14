import react, { useState, useMemo, useCallback } from 'react';
// import Test from '$/test';
// import Test2 from '$/test2';
import TodoList from '$/todolist';

interface props {
};

const appComponent:react.FC<props> = (props:props)=>{
  return <react.Fragment>
    <TodoList/>
  </react.Fragment>
  // const [value, valueChanger] = useState<number>(0)
  // const [value2, value2Changer] = useState<number>(0)
  // const tag = useMemo(()=><Test/>, []);
  // const tag2 = useMemo(()=><Test2 value={value}/>, [value]);
  // const handler = useCallback(()=>valueChanger(value + 1), [value]);
  // const handler2 = useCallback(()=>value2Changer(value2 + 1), [value2]);
  // return <react.Fragment>
  //   {value} / {value2}<br/>
  //   {tag}<br/>
  //   {tag2}<br/>
  //   {/* <Test/><br/> */}
  //   {/* <Test2 value={value}/><br/> */}
  //   <button onClick={handler}>증가</button>
  //   <button onClick={handler2}>증가</button>
  // </react.Fragment>
};

export default appComponent;