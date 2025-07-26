import react, { useState } from 'react'; // 모달창을 쉽게 관리하기 위함 그래서 생긴 훅

type disclosure = {
  isOpen:boolean,
  open:Function,
  close:Function
};

const useDisclosure = function (defValue:boolean = false):disclosure {
  const [value, valueChanger] = useState<boolean>(defValue);
  return {
    isOpen:value, 
    open:()=>valueChanger(true), 
    close:()=>valueChanger(false)
  };
};
export { useDisclosure };