import { useContext } from 'react';
import AuthContext from '../store/AuthContext';

function LogoutAction(props) {
  const ctx = useContext(AuthContext);
  console.log('val ===', ctx);
  const logoutTrigger = () => {
    ctx.logout();
  };
  return <button onClick={logoutTrigger}>Logout {ctx.name}</button>;
}
export default LogoutAction;
