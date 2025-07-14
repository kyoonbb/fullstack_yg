import react, { useState, useReducer, useMemo, useCallback, useRef } from 'react';

import List from '$/list'

interface props {
};

type actionType = {type:'insert'|'delete', data:string}

const testComponent:react.FC<props> = (props:props)=>{
  const [text,textC] = useState<string>('');
  const [todos, todosC] = useReducer((prev:string[], action:actionType)=>{
    if(action.type == 'insert') return [...prev, action.data];
    else if(action.type == 'delete') return [...prev.filter((v)=>v!=action.data)];
    return prev;
  }, []);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputHandler = useCallback((e:any)=>textC(e.target.value), []);
  const buttonHandler = useCallback(()=>{
    // const input = document.querySelector("input");
    const input = inputRef.current;
    if(input) input.value = '';
    todosC({'type':'insert', 'data': text})
  }, [text]);
  const listCache = useMemo(()=><List datas={todos}/>, [todos]);
  return <react.Fragment>
    <input ref={inputRef} onChange={inputHandler}/>
    <button onClick={buttonHandler}>등록</button>
    {listCache}
  </react.Fragment>
};

export default testComponent;