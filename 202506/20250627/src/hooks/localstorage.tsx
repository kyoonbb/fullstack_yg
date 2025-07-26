import react, { useState } from 'react';

const useLocalStorage = 
function<Type> (key:string, defValue:Type):[Type, Function]{ // key 에다 저장 // defValue:Type말고도 any나 unknown을 적어도 된다.
  const target = window.localStorage.getItem(key) || JSON.stringify({data:defValue}); // 들어온 데이터 넣던가 내가 만든 기본 데이터 넣던가
  const [value, valueChanger] = useState<string>(target); // useState로 바라봐야하는데 거기에 target을 넣어줌
  return [
    JSON.parse(value).data, // 이걸 이상한 모양을 쪼개서 가져오고
    (data:Type)=>{ // 변경을 하게 하면은
      window.localStorage.setItem(key, JSON.stringify({data:data})); // 키에다가 값을 수정하게 만들어준다 localStorage의 setItem
      valueChanger(JSON.stringify({data:data})); // 값을 수정한 다음에 그 수정한 값을 useState에 집어 넣어서 값이 변경 되도록 만들어 준다.
    }
  ]
};

export { useLocalStorage };