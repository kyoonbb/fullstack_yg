import react, { useState } from 'react';

const useSessionStorage = 
function<Type> (key:string, defValue:Type):[Type, Function]{
  const target = window.sessionStorage.getItem(key) || JSON.stringify({data:defValue});
  const [value, valueChanger] = useState<string>(target);
  return [
    JSON.parse(value).data,
    (data:Type)=>{
      window.sessionStorage.setItem(key, JSON.stringify({data:data}));
      valueChanger(JSON.stringify({data:data}));
    }
  ]
};

export { useSessionStorage };