import react, { useState, useEffect } from 'react';

const useDebounce = 
function<Type> (defValue:Type, debounce:number = 300):[Type, Function] {
  const [ value, valueChanger ] = useState<Type>(defValue);
  const [ outValue, outValueChanger ] = useState<Type>(defValue);
  useEffect(()=>{
    const timeoutID:{id:null | NodeJS.Timeout} = {id:null};
    if(timeoutID.id) clearTimeout(timeoutID.id);
    timeoutID.id = setTimeout(()=>outValueChanger(value), debounce);
    return ()=>{
      if(timeoutID.id) clearTimeout(timeoutID.id);
    }
  }, [value]);
  return [outValue, valueChanger];
}

export { useDebounce };

