import react, { useState } from 'react';

const useLocalStorage = 
function<Type> (key:string, defValue:Type):[Type, Function]{
  const target = window.localStorage.getItem(key) || JSON.stringify({data:defValue});
  const [value, valueChanger] = useState<string>(target);
  return [
    JSON.parse(value).data,
    (data:Type)=>{
      window.localStorage.setItem(key, JSON.stringify({data:data}));
      valueChanger(JSON.stringify({data:data}));
    }
  ]
};

export { useLocalStorage };