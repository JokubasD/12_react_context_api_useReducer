import LogoutAction from '../components/LogoutAction';

function UserOnlyPage(props) {
  return (
    <div>
      <h1>UserOnly Page</h1>
      <p>Welcome Bob</p>
      <LogoutAction onLogout={props.onLogout}></LogoutAction>
    </div>
  );
}
export default UserOnlyPage;
