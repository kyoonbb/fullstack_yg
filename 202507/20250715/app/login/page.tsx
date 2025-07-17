import react from 'react';

export default function login_page(){
  return <div>
    <form action="/api/login" method="post">
      <input name="id"/> <br/>
      <input name="pw" type="password"/> <br/>
      <button type='submit'>로그인</button>
    </form>
  </div>
}