import react from 'react'; // 리액트 문법 활성화 코드
import client, {Container} from 'react-dom/client'; // CSR 동작 구조

import App from '$/app';
import Table from '$/table'

let container:any = document.getElementById("rootDiv"); // 실제 연결될 대상 tag 검색
let root = client.createRoot(container); // 연결될 대상 tag를 react 에서 사용할 태그로 변환

root.render( // 실제 react태그를 연결될 대상 태그에 렌더링
    <div className='apple fruit'>
        <Table rows={3} columns={3}/>
        <Table rows={3}/>
        <Table rows={10} columns={10}/>
    {
        // Hello
        // <App name='홍길동'/>
        // <App name='임꺽정'/>
    }
    </div>
);