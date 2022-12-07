import { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotAuthorizedPage from './pages/NotAuthorisedPage';
import UserOnlyPage from './pages/UserOnlyPage';
import AuthContext from './store/AuthContext';
import { sendData } from './helper';

function App() {
  const history = useHistory();

  const [userEmail, setUserEmail] = useState('');

  const [tokenValue, setTokenValue] = useState(
    localStorage.getItem('token123') || ''
  );

  const isUserLoggedIn = !!tokenValue;
  const contextValue = {
    userEmail: userEmail,
    isUserLoggedIn: isUserLoggedIn,
    logout: () => handleLogout(),
    login: (obj) => loginHandler(obj),
  };
  const loginHandler = async (newLoginObj) => {
    const loginResultObj = await sendData(newLoginObj);

    if (loginResultObj.token) {
      // login success
      console.log('login success');
      // redirect
      setUserEmail(newLoginObj.email);
      setTokenValue(loginResultObj.token);
      localStorage.setItem('token123', loginResultObj.token);
      localStorage.setItem('userEmail', newLoginObj.email);
      // 2. issaugoti token state ir localstorage
      history.push('/user-page');
    } else {
      // login fails
      console.log('login fails', loginResultObj.error);
    }
  };

  const handleLogout = () => {
    setUserEmail('');
    history.push('/login');
    localStorage.removeItem('token123');
    localStorage.removeItem('userEmail');
    setTokenValue('');
    setUserEmail('');
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <div className='App'>
        <Header />
        <Switch>
          <Route path={'/user-page'}>
            {isUserLoggedIn ? (
              <UserOnlyPage />
            ) : (
              <Redirect to='/not-authorised' />
            )}
          </Route>
          <Route path={'/not-authorised'}>
            <NotAuthorizedPage />
          </Route>
          <Route path='/login'>
            <LoginPage showDebug />
          </Route>
          <Route path='/' exact>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
