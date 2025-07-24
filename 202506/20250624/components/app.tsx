import react from 'react';
    // 리액트의 문법을 활성화하기위한 기능 무조건 기본으로 붙임!

interface props {};
    // 함수형으로 만들기 때문에 받아오는 매개변수의 형태를 미리 정의해두는 자료형
const appComponent:react.FC<props> = 
    // react의 Function Component 방식을 이용할 것이고 <props>는 매개변수로 props의 형태를 받아올것이다
    (props:props)=>{
    // 함수의 매개변수로 props 형태의 변수들을 가져온다
    // 일반적인 함수의 매개변수는 (1,2,3) => ({1,2,3})
    
    return <div>
        second hello
        복잡한 내용<br/>
        복잡한 내용<br/>
        </div>
        // 리액트 문법대로 작성하고 번역할 문장
        // 실제로 만들어진 HTML 태그 내용
        
    };

export default appComponent;
    // 만들어진 React.FC 내용을 외부에서 사용할 수 있도록 내보내는 기능