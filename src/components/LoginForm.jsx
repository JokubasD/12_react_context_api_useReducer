import { useState } from 'react';

function LoginForm(props) {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  function formHandler(e) {
    e.preventDefault();
    const loginObj = {
      email: emailValue,
      password: passwordValue,
    };
    setEmailValue('');
    setPasswordValue('');
    console.log('loginObj ===', loginObj);
    props.onLogin(loginObj);
  }

  return (
    <div>
      <h2>Login here</h2>
      <form onSubmit={formHandler} className='card'>
        <input
          value={emailValue}
          type='text'
          placeholder='email'
          onChange={(e) => setEmailValue(e.target.value)}
        ></input>
        <input
          value={passwordValue}
          type='password'
          placeholder='password'
          onChange={(e) => setPasswordValue(e.target.value)}
        ></input>
        <button type='submit'>Login</button>
      </form>
      <hr />
      <h3>Debug values</h3>
      <p>
        email: {emailValue}
        password: {passwordValue}
      </p>
    </div>
  );
}
export default LoginForm;
