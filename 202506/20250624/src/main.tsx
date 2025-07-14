import react from 'react';
import client, {Container} from 'react-dom/client';

import App from '$/app';
import Table from '$/table'

let container:any = document.getElementById("rootDiv");
let root = client.createRoot(container);

root.render(
  <div className='apple fruit'>
    <Table rows={3} columns={3}/>
    <Table rows={3}/>
    <Table rows={10} columns={10}/>
    {/* Hello
    <App name='홍길동'/>
    <App name='임꺽정'/> */}
  </div>
);