import react, { useEffect, useRef, Suspense } from 'react';
import '../public/global.css';
import Button from '$/button';
interface props {
};

const appComponent:react.FC<props> = (props:props)=>{
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
    {/* <Button className='tw:bg-red-500 tw:text-yellow-400 tw:mr-5 tw:px-7 tw:py-4 tw:rounded-md'/>
    <Button className='bg-yellow-400 text-red-500'/> */}
    {/* <div style="background-color:red">
      Hello
    </div> */}
  </react.Fragment>
};

export default appComponent;