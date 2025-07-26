import react, { useState } from 'react';

const usePlusOne = function (defValue:number = 0):[number, Function]{ // 기본값 0 자료형도 따로 지정 ->[number, Function]
  const [value, valueChanger] = useState<number>(defValue + 1); // 바뀐값에 무조건 1이 더해져서 나오게 하는 훅
  return [value, (data:number)=>valueChanger(data + 1)]; //데이터를 받아오면 밸류체인저에 +1하도록 함
}

export { usePlusOne };