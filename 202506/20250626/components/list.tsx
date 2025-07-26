// todolist를 이용할 수 있게 list 만듦 todolist 실습과정
import react from 'react';

interface props {
  datas?:string[]
};

const testComponent:react.FC<props> = (props:props)=>{ // list 아이템으로 뽑아두도록 구조를 짬
  return <react.Fragment>
    <ul>
      {
        props.datas?.map(v=><li>{v}</li>)
      }
    </ul>
  </react.Fragment>
};

export default testComponent;