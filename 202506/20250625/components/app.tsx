//훅(Hook) 종류 1.useState 2.useReducer 3.useEffect

import react, {useState, useReducer, useEffect} from 'react';
import Button from '$/button'
interface props {
};

// 위까지 공통

// // 1번 예제
// const appComponent:react.FC<props> = (props:props)=>{
//   return <react.Fragment>
//     <Button color='red' text='로그인' clickEvent={()=>{ // 눌를때마다
//       console.log("클릭 이벤트") // 텍스트 표시!
//     }}/>
//     <Button color='blue'/>
//   </react.Fragment>
// };

// export default appComponent;
// // 1번 예제 끝

// // 2번 예제
// const appComponent:react.FC<props> = (props:props)=>{
//   const data:{number:number} = {number:0}; // 데이터란 변수를 받아와서 
//   return <react.Fragment> // 훅으로 데이터 관리
//     {data.number}
//     <Button color='red' text='로그인' clickEvent={()=>{ // 눌를때마다
//       data.number += 1;
//       console.log(data)  // 1씩 증가하게! 그래서 누를때마다 화면 바뀌게
//     }}/>
//     <Button color='blue'/>
//   </react.Fragment>
// };

// export default appComponent;
// // 2번 예제 끝

// // 3번 예제 <div>{value}</div> 훅[있는 라인]을 배울거임 (주석안됨이슈)
// const appComponent:react.FC<props> = (props:props)=>{
//   // const data:{number:number} = {number:0}; 
//   const [value, valueChanger] = useState<number>(0); // useState 훅
//   return <react.Fragment> 
//     <div>{value}</div>  
//     <Button color='red' text='로그인' clickEvent={()=>{ // 눌를때마다
//       valueChanger(value + 1);
//       valueChanger(value + 2);
//       valueChanger(value + 3);
//       valueChanger(value + 4);// 훅이만든 함수이다보니 값만 변경이 아닌 해당 값이 가상돔에 적용이 되게 하고 그리고 실제돔에 적용이 되게 후처리까지 해준다
//       // 그 다음은 후처리 된 값이 보이기때문에 값이 변경된것처럼 보인다.
//       // 테스트는 valueChanger(value + 1); 만 적용하고 2,3,4 는 지우고 해볼 것
//     }}/> 
//     <Button color='blue'/>
//   </react.Fragment>
// };

// export default appComponent;
// // 3번 예제 끝

// // 4번 예제 훅을 썼을 경우 1차원적인 예제
// const appComponent:react.FC<props> = (props:props)=>{
//   // const data:{number:number} = {number:0}; 
//   const [value, valueChanger] = useState<number>(0); // useState 훅
//   return <react.Fragment> 
//     <div>{value}</div>  
//     <Button text="증가" clickEvent={()=>{ valueChanger(value + 1) }}/>
//     <Button text="감소" clickEvent={()=>{ valueChanger(value - 1) }}/>  
//   </react.Fragment>
// };

// export default appComponent;
// // 4번 예제 끝

// // 5번 예제 : 똑같은 함수를 이름만 다르게 두번 쓸 경우 같은 useState를 두번 썻다정로만 이해
// const appComponent:react.FC<props> = (props:props)=>{
//   const [obj, objChanger] = useState<{v1:number,v2:number}>({v1:0, v2:0});
//   return <react.Fragment>
//     <div>{obj.v1}</div>
//     <Button text="증가" clickEvent={()=>{ objChanger({...obj, v1:obj.v1 + 1}) }}/>
//     <Button text="감소" clickEvent={()=>{ objChanger({...obj, v1:obj.v1 - 1}) }}/>
//     <div>{obj.v2}</div>
//     <Button text="증가" clickEvent={()=>{ objChanger({...obj, v2:obj.v2 + 1}) }}/>
//     <Button text="감소" clickEvent={()=>{ objChanger({...obj, v2:obj.v2 - 1}) }}/>
//   </react.Fragment>
// };

// export default appComponent;
// // 5번 예제 끝 이러고 useState 단점 강사님이 언급함, 변화를 감지하는 방식이 훅을 통해서 감지하기에 훅에 데이터를 묶으면 하나만 훅이 바뀌어도 연관된 데이터가 바뀐다.

// // 6번 예제 : useReducer 첫 예제 글자 크기 바꾸는 예제
// const appComponent:react.FC<props> = (props:props)=>{

//   type dataType = {color:string, size:number};
//   const dataHandler = function (prev:dataType, action:string | number):dataType { // action을 string 아니면 number로 받게하고
//     if(typeof action == 'number') {
//       return {...prev, size:action}; // 액션이 넘버라면 사이즈가 되게
//     } else { // 글자라면
//       if(action == 'color_red') return {...prev, color:'red'}; // 비교처리하게
//     }
//     return prev;
// };
//   const [data, dataChanger] = 
//     useReducer(dataHandler, {color:'black', size:20});
//   return <react.Fragment>
//     <div style={{
//       color:data.color, fontSize:`${data.size}px`
//     }}>텍스트</div>
//     <input type='number' onChange={(e)=>{
//       dataChanger(parseInt(e.target.value));
//     }} min={15} max={50}/> 
//   </react.Fragment> // 최소 15, 최대 50
// };

// export default appComponent;
// // 6번 예제 끝 


// // 7번 예제 : useReducer 아까랑 똑같이 
// const appComponent:react.FC<props> = (props:props)=>{

//   type dataType = {color:string, size:number};
//   const dataHandler = function (prev:dataType, action:string | number):dataType { // action을 string 아니면 number로 받게하고
//     if(typeof action == 'number') {
//       return {...prev, size:action}; // 액션이 넘버라면 사이즈가 되게
//     } else { // 글자라면
//       if(action == 'color_red') return {...prev, color:'red'}; // 색깔 비교처리하게
//       else return {...prev, color:'black'}; // 아무것도 없으면
//     }
//     return prev;
// };
//   const [data, dataChanger] = 
//     useReducer(dataHandler, {color:'black', size:20});
//   return <react.Fragment>
//     <div style={{
//       color:data.color, fontSize:`${data.size}px`
//     }}>텍스트</div>
//     <input type='number' onChange={(e)=>{
//       dataChanger(parseInt(e.target.value));
//     }} min={15} max={50}/>
//     <input onChange={(e)=>{
//       dataChanger(e.target.value);
//     }}/>
//   </react.Fragment>
// };

// export default appComponent;
// // 7번 예제 끝 : 사용방법이 좀 난해하다고 언급하셨지만 직관적이다라는 장점이 있음


// // 8번 예제 : useReducer 훅의 적절한 예시를 강사님이 만들어주셨다 마찬가지로 흐름만 이해 , 연관성 있는 데이터를 묶어서 관리할 때 , 유기적으로 관리할 때 쓰는 예시
// const appComponent:react.FC<props> = (props:props)=>{

//   type userType = {id:string, pw:string};
//   type userAction = {type:'id' | 'pass', data:any}; // id거나 pass거나
//   const userHandler = function (prev:userType, action:userAction):userType {
//     if(action.type == 'id') return {...prev, id:action.data};
//     if(action.type == 'pass') return {...prev, pw:action.data};
//     return prev;  
//   }
//   const [user, userChanger] = useReducer(userHandler, {id:'default', pw:'default'});

//   return <react.Fragment>
//     <div>
//       {user.id} / {user.pw}
//     </div>
//     <input type='text' onChange={e=>{
//       userChanger({type:'id', data:e.target.value})
//     }}/>
//     <input type='password' onChange={e=>{
//       userChanger({type:'pass', data:e.target.value})
//     }}/>

//   </react.Fragment>
// };

// export default appComponent;
// // 8번 예제 끝 : 문제가 될만한 상황은 값의 변화의 단계를 설정할 수가 없다


// // 9번 예제 : v1을 아무리 눌러도 v2는 안바뀐다는 흐름
// const appComponent:react.FC<props> = (props:props)=>{

//   const [v, vC] = useState(0);
//   const [v2, v2C] = useState(v + 1);

//   return <react.Fragment>
//     <div>{v} / {v2}</div>
//     <button onClick={()=>vC(v+1)}>버튼</button>
//   </react.Fragment>
// };

// export default appComponent;
// // 9번 예제 끝 : 이걸 해결하기 위한 밑밥


// // 10번 예제 : a가 바뀔 때 b가 바뀌도록 연결되게 하는것이 useEffect의 기능을 보여주는 예제, 전과 비교하면 이해 쉬움
// const appComponent:react.FC<props> = (props:props)=>{

//   const [v, vC] = useState(0);
//   const [v2, v2C] = useState(v + 1);
//   useEffect(()=>{ // 이 함수를 추가하면
//     v2C(v + 1); // v가 변동될때마다 항상 1 큰 값이 들어오고
//   }, [v]); // 리턴된다.
//   return <react.Fragment>
//     <div>{v} / {v2}</div>
//     <button onClick={()=>vC(v+1)}>버튼</button>
//   </react.Fragment>
// };

// export default appComponent;
// // 10번 예제 끝 : 


// // 11번 예제 : 개체 하나 더 추가해서 이해하기 쉬운 예시
// const appComponent:react.FC<props> = (props:props)=>{

//   const [v, vC] = useState(0);
//   const [v2, v2C] = useState(v + 1);
//   const [v3, v3C] = useState(v + 2);
//   useEffect(()=>{ // 이 함수를 추가하면
//     v2C(v + 1); // v가 변동될때마다 항상 1 큰 값이 들어오고
//     v3C(v + 2); // 마찬가지로 2 큰 값이 들어오고
//   }, [v]); // 리턴된다.
//   return <react.Fragment>
//     <div>{v} / {v2} / {v3}</div>
//     <button onClick={()=>vC(v+1)}>버튼</button>
//   </react.Fragment>
// };

// export default appComponent;
// // 11번 예제 끝 : 


// 12번 예제 : 응용 예시 2분할 관리
const appComponent:react.FC<props> = (props:props)=>{

  const [v, vC] = useState(0); // v를 눌러도 v3가 바뀌고
  const [v2, v2C] = useState(0); // v2를 눌러도 v3가 바뀌게
  const [v3, v3C] = useState(v + v2); //로직을 짬
  useEffect(()=>{ 
    v3C(v + v2); 
  }, [v, v2]); 
  return <react.Fragment>
    <div>{v} / {v2} / {v3}</div>
    <button onClick={()=>vC(v+1)}>버튼</button>
    <button onClick={()=>v2C(v2+1)}>버튼</button>
  </react.Fragment>
};

export default appComponent;
// 12번 예제 끝 :