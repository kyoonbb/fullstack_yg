import react from 'react';

export default function page() {
  return <div>
    <form action='/api/signup' method='get'>
      <fieldset style={{fontFamily:'consolas'}}>
        <legend>회원가입</legend>
        <label htmlFor='id'>ID : </label><input name='id' id='id'/><br/>
        <label htmlFor='pw'>PW : </label><input name='pw' id='pw' type='password'/>
        <button type='submit'>회원가입</button>
      </fieldset>
    </form>
  </div>
}