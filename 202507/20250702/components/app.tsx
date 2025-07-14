import react, { useEffect, useRef, Suspense } from 'react';
import '../public/global.css';

interface props {
};

const appComponent:react.FC<props> = (props:props)=>{

  const trs = Array.from({length:10}).map((_,i)=>{
    const tds = Array.from({length:10}).map((_,j)=>{
      return <td>{j}</td>
    });
    if(i % 2 == 1)
      return <tr className='hover:bg-[rgb(255,0,0)]'>{tds}</tr>
    else
      return <tr className='hover:bg-image tab-size-5'>{tds}</tr>
  });

  return <react.Fragment>
    <div data-theme="light">
      <div className='
      dark:bg-gray-500 
      dark:text-white
      light:bg-white 
      light:text-black
      '>배경</div>
    </div>
    <button className='button-ghost'>통일</button>
    <button className='button-normal'>통일</button>
    <div className=''></div>
    <table>
      <tbody>{trs}</tbody>
    </table>
    {/* <div className='bg-red-500 bg-blue-500!'>hhh</div>
    <div className='nth-[2]:bg-red-200'>h</div>
    <div className='nth-[2]:bg-red-200'>h</div>
    <div className='nth-[2]:bg-red-200'>h</div> */}
  </react.Fragment>
};

export default appComponent;