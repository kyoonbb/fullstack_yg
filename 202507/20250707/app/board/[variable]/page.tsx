import react from 'react';

interface props { // 요 명칭이 변수 이름이 된다.
  params:{ // 오브젝트형을 받게 됨
    variable:string
  }
}

export default function app_board_variable_page(props:props){ // 그 값을 넣음
  return <div> 
    {props.params.variable} 
  </div>
}