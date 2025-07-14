import react from 'react';

interface props {
  params:{
    variable:string[]
  }
}

export default function app_board_variable_page(props:props){
  const variable = props.params.variable || [];
  return <div>
    {variable.map(v=><div>{v}</div>)}
  </div>
}