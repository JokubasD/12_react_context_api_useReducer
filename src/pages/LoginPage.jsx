import LoginForm from '../components/LoginForm';

function LoginPage(props) {
  return (
    <div>
      <h1>Login Page</h1>
      <p>Please Login</p>
      <LoginForm showDebug={props.showDebug}></LoginForm>
    </div>
  );
}
export default LoginPage;
