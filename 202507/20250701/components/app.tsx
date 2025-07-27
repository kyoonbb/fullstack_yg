
// // 예제 1 : Module CSS 방식 global.module.css에 있는거 불러오기 & button.tsx 1 예제
// import react from 'react';
// import Button from '$/button';
// import buttonComponent from '$/button';
// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{
//   return <react.Fragment>
//     <Button/>
//     <Button/>
//   </react.Fragment>
// };

// export default appComponent;
// // 예제 1 끝


// // 예제 2 : utility방식 button.tsx 2 예제 & button.tsx 2 예제
// import react from 'react';
// import '../public/global.css'; // utility 방식 한번만 불러오면 끝남
// import Button from '$/button';
// import buttonComponent from '$/button';
// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{ // className로 조립해서 꾸며주기 가능 그때그때 필요한거만 적으면 됨
//   return <react.Fragment>
//     <Button className='bg-red txt-yellow'/>
//     <Button className='bg-yellow txt-red'/>
//   </react.Fragment>
// };

// export default appComponent;
// // 예제 2 끝


// // 예제 3 : utility Tailwind 방식 vscode 익스텐션 두개 깔아주고, npm install tailwindcss @tailwindcss/postcss 명령어 입력해서 먼저 깔아줘야 함 (수업내용이나 캡처 이미지 참고)
// import react from 'react';
// import '../public/global.css'; 
// import Button from '$/button';
// interface props {
// };

// const appComponent:react.FC<props> = (props:props)=>{ // className로 조립해서 꾸며주기 가능 그때그때 필요한거만 적으면 됨
//   return <react.Fragment>
//     <Button className='bg-red-500 text-yellow-400 mr-5 px-7 py-4 rounded-md'/>
//     <Button className='bg-yellow-400 text-red-500'/>
//   </react.Fragment>
// };

// export default appComponent;
// // 예제 3 끝


// 예제 4 : 강사님이 보여주는 로또 예제 : 얼마나 효율적이고 빠른지 보여주신다 하신다.
import react from 'react';
import '../public/global.css'; 
import Button from '$/button';
interface props {
};

const appComponent:react.FC<props> = (props:props)=>{ // className로 조립해서 꾸며주기 가능 그때그때 필요한거만 적으면 됨
  return <react.Fragment>
    <div className='bg-red-500 block m-auto w-3xl'>
      <div className='mx-auto w-sm text-2xl font-semibold text-center my-3'>로또번호 추출기</div>
    </div>
    <div className='w-3xl mx-auto leading-10 text-sm'>
      <div>
        로또번호 추출기 입니다. 번호 추출 버튼을 누르면 로또번호가 생성됩니다.
      </div>
      <div>
        랜덤추출에서 제외하고 싶은 번호들은 체크박스에 체크하면 해당 번호들이 제외되어 선정 됩니다.
      </div>
      <div>
        어떤 분은 이걸로 3등에 당첨되었다고 하시는데.. 이걸로 번호 찍으신 분들 대박을 기원합니다.
      </div>
      <div>
        제외할 숫자 :
      </div>      
    </div>
  </react.Fragment>
};

export default appComponent;
// 예제 4 끝 : 디자인을 바로바로 확인하면서 만들기에 실력과 상관없이 빨리 만들(완성 할) 수 있음



