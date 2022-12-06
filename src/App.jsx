import { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserOnlyPage from './pages/UserOnlyPage';
import AuthContext from './store/AuthContext';

function App() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('');
  const isUserLoggedIn = !!userEmail;
  const loginHandler = (newLoginObj) => {
    const validEmail = 'James@bond.com';
    if (newLoginObj.email === validEmail) {
      console.log('Login sucess');
      setUserEmail(newLoginObj.email);
      history.push('/user-page');
    } else {
      console.log('Login fail');
    }
  };

  const handleLogout = () => {
    setUserEmail('');
    history.push('/login');
  };
  return (
    <AuthContext.Provider value={555}>
      <div className='App'>
        <Header
          userEmail={userEmail}
          isUserLoggedIn={isUserLoggedIn}
          onLogout={handleLogout}
        ></Header>
        <Switch>
          <Route path='/user-page'>
            <UserOnlyPage onLogout={handleLogout}></UserOnlyPage>
          </Route>
          <Route path='/login'>
            <LoginPage onLogin={loginHandler}></LoginPage>
          </Route>
          <Route path='/' exact>
            <HomePage></HomePage>
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
