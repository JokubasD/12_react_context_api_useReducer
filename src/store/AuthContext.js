import { createContext } from 'react';

const AuthContext = createContext({
  login() {},
  logout() {},
  userEmail: '',
});

AuthContext.displayName = 'AuthContext';

export default AuthContext;
