function LogoutAction(props) {
  const logoutTrigger = () => {
    props.onLogout();
  };
  return <button onClick={logoutTrigger}>Logout</button>;
}
export default LogoutAction;
