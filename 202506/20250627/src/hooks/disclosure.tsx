import react, { useState } from 'react';

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