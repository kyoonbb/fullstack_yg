import react from 'react';
import Tr from '$/tr';

interface props {
  rows?: number,
  columns?: number
};

const tableComponent:react.FC<props> = (props:props)=>{
  const rows = props.rows || 5;
  const columns = props.columns || 5;

  const trs = Array.from({length:rows}).map((v,i)=><Tr columns={columns}/>)

  return <table>
    <tbody>
      {trs}
    </tbody>
  </table>
};

export default tableComponent;