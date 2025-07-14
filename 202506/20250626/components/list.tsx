import react from 'react';

interface props {
  datas?:string[]
};

const testComponent:react.FC<props> = (props:props)=>{
  return <react.Fragment>
    <ul>
      {
        props.datas?.map(v=><li>{v}</li>)
      }
    </ul>
  </react.Fragment>
};

export default testComponent;