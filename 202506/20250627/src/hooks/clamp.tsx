import { useState } from "react";
import react from 'react';

function isLow(data:number, limit:number):boolean { 
  if(limit == Infinity || limit == -Infinity) return false;  // 제한이 - Infinity ~ Infinity면 의미 없으니까 잡지 않아서 false 
  return data < limit; // 그게 아니면 작은지 아닌지 판별하게 isLow 함수 만듦
}
function isHigh(data:number, limit:number):boolean {
  if(limit == Infinity || limit == -Infinity) return false;
  return data > limit; // 큰지 아닌지 판별하게 isHigh 함수 만듦
}
function isBetween(data:number, min:number, max:number):number { // 두개 함수 합친 함수 boolean이 아니라 :number인 이유는 값을 돌려주기 때문
  if(isLow(data, min)) return min; //isLow면 min
  if(isHigh(data, max)) return max; //isHigh면 max
  return data; // 둘다 아니면 그 값 그대로 돌려줌
}

const useClamp = 
function (defValue:number, min:number = 1, max:number = Infinity):[number, Function] { // 최대 최소 정해줌
  const [ value, valueChanger ] = useState<number>(isBetween(defValue, min, max));
  return [
    value, // 이건 그대로 가져오는데 
    (data:number)=>valueChanger(isBetween(data, min, max)) // 함수는 자동으로 잘려서 들어가게 만들어줌
  ]
}

export { useClamp };