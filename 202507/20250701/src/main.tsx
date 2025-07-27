import react from 'react';
import client from 'react-dom/client';

import App from '$/app';

let container:any = document.getElementById("rootDiv");
let root = client.createRoot(container);

root.render(
  <App/>
);