import react from 'react';

interface props {
  title?:string,
  content?:string,
  isOpen?:boolean,
  onClickBack?:Function
}

const modalComponent:react.FC<props> = (props:props)=>{
  return <react.Fragment>
    <div className='modal-back' onClick={(e)=>{
      if(e.currentTarget !== e.target) return;
      if(props.onClickBack) props.onClickBack();
    }}
    style={{
      display: props.isOpen ? 'block' : 'none',
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