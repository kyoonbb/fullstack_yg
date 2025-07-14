import react from 'react';

interface props {
  columns?: number
};

const tablerowComponent:react.FC<props> = (props:props)=>{
  const columns = props.columns || 5;
  const tds = Array.from({length:columns}).map((v,i)=><td>{i}</td>)
  return <tr>
    {tds}
  </tr>
};

export default tablerowComponent;