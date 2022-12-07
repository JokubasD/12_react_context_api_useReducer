import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import AuthContext from '../store/AuthContext';

function Header(props) {
  const ctx = useContext(AuthContext);
  const isUserLoggedIn = ctx.isUserLoggedIn;
  const userEmail = ctx.userEmail;
  return (
    <header className='main-header'>
      <nav>
        <NavLink className='nav-link' to='/' exact>
          Home
        </NavLink>
        {isUserLoggedIn && (
          <NavLink className='nav-link' to='/user-page'>
            Users Page
          </NavLink>
        )}
        {!isUserLoggedIn && (
          <NavLink className='nav-link' to='/login'>
            Login
          </NavLink>
        )}
        {isUserLoggedIn && (
          <p style={{ marginBottom: 0 }} className='nav-link'>
            {userEmail}
          </p>
        )}
        {isUserLoggedIn && (
          <Link className='nav-link' to={'/login'}>
            <span>Logout</span>
          </Link>
        )}
      </nav>
    </header>
  );
}
export default Header;
