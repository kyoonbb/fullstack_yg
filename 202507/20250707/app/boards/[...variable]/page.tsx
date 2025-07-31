import react from 'react';

interface props {
  params:{
    variable:string[] // 여러개를 받아올거라 string이 아니라 string 배열로 받아온다
  }
}

export default function app_board_variable_page(props:props){
  return <div>
    {props.params.variable.map(v=><div>{v}</div>)}
  </div>
}