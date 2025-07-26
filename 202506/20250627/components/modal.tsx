import react from 'react';

interface props {
  title?:string,
  content?:string,
  isOpen?:boolean,
  onClickBack?:Function
}

const modalComponent:react.FC<props> = (props:props)=>{
  return <react.Fragment>
    <div className='modal-back' onClick={(e)=>{ // 클릭 시
      if(e.currentTarget !== e.target) return; // 배경쪽을 눌렀을 때 구분
      if(props.onClickBack) props.onClickBack(); // 배경쪽을 눌렀을 대 온클릭 백 함수 뒤로가기 해줌
    }}
    style={{
      display: props.isOpen ? 'block' : 'none', // none이 들어가면 모달창 안뜸, 이 줄 자체를 주석처리하고 실행해봐라 그럼 될거다
      backgroundColor:'rgba(0,0,0,0.32)',
      position:'fixed',
      top:0,
      left:0,
      width:'100vw',
      height:'100vh'
    }}>
      <div className='modal' style={{
        backgroundColor:'white',
        border:'1px solid black',
        borderRadius:'12px',
        width:'300px',
        // height:'220px',
        position:'absolute',
        left:'50%',top:'50%',transform:'translate(-50%, -50%)'
      }}>
        {props.title && <div style={{
          textAlign:'center', fontSize:'20px'
        }}>{props.title}</div>}
        {props.content && <div style={{
          textAlign:'center', fontSize:'16px'
        }}>{props.content}</div>}
      </div>
    </div>
  </react.Fragment>
}

export default modalComponent;