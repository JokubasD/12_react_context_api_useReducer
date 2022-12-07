import { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import LoginPage from './LoginPage';

function NotAuthorizedPage(props) {
  const [showClicked, setShowClicked] = useState(false);
  return (
    <div>
      <h1>For logged in user only</h1>
      {showClicked ? (
        <LoginForm />
      ) : (
        <button onClick={() => setShowClicked(true)}>Show login form</button>
      )}
    </div>
  );
}
export default NotAuthorizedPage;
