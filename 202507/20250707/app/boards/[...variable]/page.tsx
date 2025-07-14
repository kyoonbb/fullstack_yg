import react from 'react';

interface props {
  params:{
    variable:string[]
  }
}

export default function app_board_variable_page(props:props){
  return <div>
    {props.params.variable.map(v=><div>{v}</div>)}
  </div>
}