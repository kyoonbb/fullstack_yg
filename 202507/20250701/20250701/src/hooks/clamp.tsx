import { useState } from "react";
import react from 'react';

function isLow(data:number, limit:number):boolean {
  if(limit == Infinity || limit == -Infinity) return false;
  return data < limit;
}
function isHigh(data:number, limit:number):boolean {
  if(limit == Infinity || limit == -Infinity) return false;
  return data > limit;
}
function isBetween(data:number, min:number, max:number):number {
  if(isLow(data, min)) return min;
  if(isHigh(data, max)) return max;
  return data;
}

const useClamp = 
function (defValue:number, min:number = 1, max:number = Infinity):[number, Function] {
  const [ value, valueChanger ] = useState<number>(isBetween(defValue, min, max));
  return [
    value,
    (data:number)=>valueChanger(isBetween(data, min, max))
  ]
}

export { useClamp };