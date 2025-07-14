import react, {useState, useReducer, useEffect} from 'react';
import Button from '$/button'
interface props {
};

const appComponent:react.FC<props> = (props:props)=>{
  // const data:{number:number} = {number:0};
  // const [value, valueChanger] = useState<number>(0);
  // const [obj, objChanger] = useState<{v1:number,v2:number}>({v1:0, v2:0});
  // type dataType = {color:string, size:number};
  // type actionType = {type:string, data:any}; // {type:'color', data:'red'}
  // const dataHandler = function (prev:dataType, action:string | number):dataType {
  //   if(typeof action == 'number') {
  //     return {...prev, size:action};
  //   } else {
  //     if(action == 'color_red') return {...prev, color:'red'};
  //     else return {...prev, color:'black'};
  //   }
  //   return prev;
  // };
  // const [data, dataChanger] = 
  //   useReducer(dataHandler, {color:'black', size:20});

  // type userType = {id:string, pw:string};
  // type userAction = {type:'id' | 'pass', data:any};
  // const userHandler = function (prev:userType, action:userAction):userType {
  //   if(action.type == 'id') return {...prev, id:action.data};
  //   if(action.type == 'pass') return {...prev, pw:action.data};
  //   return prev;
  // }
  // const [user, userChanger] = useReducer(userHandler, {id:'default', pw:'default'});
  const [v, vC] = useState(0);
  const [v2, v2C] = useState(0);
  const [v3, v3C] = useState(v + v2);
  useEffect(()=>{
    v3C(v + v2);
    return ()=>{};
  }, [v, v2]);
  return <react.Fragment>
    <div>{v} / {v2} / {v3}</div>
    <button onClick={()=>vC(v+1)}>버튼</button>
    <button onClick={()=>v2C(v2+1)}>버튼</button>
    {/* <div>
      {user.id} / {user.pw}
    </div>
    <input type='text' onChange={e=>{
      userChanger({type:'id', data:e.target.value})
    }}/>
    <input type='password' onChange={e=>{
      userChanger({type:'pass', data:e.target.value})
    }}/> */}
    {/* <div style={{
      color:data.color, fontSize:`${data.size}px`
    }}>텍스트</div>
    <input type='number' onChange={(e)=>{
      dataChanger(parseInt(e.target.value));
    }} min={15} max={50}/>
    <input  onChange={(e)=>{
      dataChanger(e.target.value);
    }} /> */}
    {/* <div>{obj.v1}</div>
    <Button text="증가" clickEvent={()=>{ objChanger({...obj, v1:obj.v1 + 1}) }}/>
    <Button text="감소" clickEvent={()=>{ objChanger({...obj, v1:obj.v1 - 1}) }}/>
    <div>{obj.v2}</div>
    <Button text="증가" clickEvent={()=>{ objChanger({...obj, v2:obj.v2 + 1}) }}/>
    <Button text="감소" clickEvent={()=>{ objChanger({...obj, v2:obj.v2 - 1}) }}/> */}
    {/* <div>{value}</div>
    <Button text="증가" clickEvent={()=>{ valueChanger(value + 1) }}/>
    <Button text="감소" clickEvent={()=>{ valueChanger(value - 1) }}/> */}
    {/* <div id="data-number">{data.number}</div> */}
    {/* <Button color='red' text='로그인' clickEvent={()=>{
      // valueChanger(value + 5);
      // valueChanger(value + 4);
      // valueChanger(value + 3);
      // valueChanger(value + 2);
      // valueChanger(value + 1);
      // document.querySelector
      // data.number += 1;
      // data.number; // 아직 증가하지 않은 상태
      // console.log(data);
    }}/>
    <Button color='blue'/> */}
  </react.Fragment>
};

export default appComponent;