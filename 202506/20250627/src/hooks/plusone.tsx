import react, { useState } from 'react';

const usePlusOne = function (defValue:number = 0):[number, Function]{
  const [value, valueChanger] = useState<number>(defValue + 1);
  return [value, (data:number)=>valueChanger(data + 1)];
}

export { usePlusOne };