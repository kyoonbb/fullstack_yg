import react, { useEffect, useRef, Suspense } from 'react';

// import Boards from '$/boards';

interface props {
};

const Lazy = react.lazy(()=>import('$/boards'));

// const Lazy = react.lazy(async ()=>{
//   const data:any = await import('$/test');
//   return new Promise((resolve)=>setTimeout(()=>resolve(data), 5000));
// });

const appComponent:react.FC<props> = (props:props)=>{
  // const ref = useRef<any>(null);
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     if(ref?.current?.textContent) ref.current.textContent = '받아온 데이터';
  //   }, 2000);
  // }, []);
  return <react.Fragment>
    <Suspense fallback='Loading...'>
      <Lazy/>
    </Suspense>
    {/* Hello
    <Suspense fallback={<div>Loading...</div>}>
      <Lazy/>
    </Suspense> */}
    {/* <div ref={ref}>Loading...</div> */}
  </react.Fragment>
};

export default appComponent;