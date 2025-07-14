import react, { useEffect, useState } from 'react';

// import { usePlusOne } from '@/hooks/plusone';
// import { useSessionStorage } from '@/hooks';
import { useDisclosure, useClamp, useDebounce } from '@/hooks';

import Modal from '$/modal';

interface props {
};

const appComponent:react.FC<props> = (props:props)=>{
  // const [value, valueChanger] = useClamp(1, 1, 500);
  // const { isOpen, open, close } = useDisclosure(false);
  // const [value, valueChanger] = usePlusOne(0);
  // const [value, valueChanger] = useSessionStorage<number>('Visited', 0);
  // useEffect(()=>valueChanger(value + 1),[]);
  const [ value, valueChanger ] = useDebounce<string>('', 400);
  const [ datas ,datasChanger ] = useState([]);
  useEffect(()=>{
    fetch(
      `https://ac.search.naver.com/nx/ac?q=${value}&con=0&frm=nv&ans=2&r_format=json&r_enc=UTF-8&r_unicode=0&t_koreng=1&run=2&rev=4&q_enc=UTF-8&st=100&ackey=9qmewtqm`
    ).then(v=>v.json()).then((data)=>datasChanger(data.items))
  }, [value]);
  return <react.Fragment>
    <input onChange={e=>valueChanger(e.target.value)}/>
    <div>{value}</div>
    <ul>
      {
        datas.map(data=><li>{data[0]}</li>)
      }
    </ul>
    {/* <div>{value}</div>
    <button onClick={()=>valueChanger(value * 2)}>숫자 증가</button> */}
    {/* <button onClick={()=>open()}>모달창</button>
    <Modal title='제목' content='본문' isOpen={isOpen} onClickBack={close}/> */}
    {/* 현재 웹페이지에 접속한 횟수 : {value} <br/> */}
    {/* {value}<br/>
    <button onClick={()=>valueChanger(value * 2)}>증가</button> */}
  </react.Fragment>
};

export default appComponent;