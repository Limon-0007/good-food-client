import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProviders = ({children}) => {
  const [user, setUser] = useState(null)
  // register
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // sign in
  const handleSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  // sign out
  const handleSignOut = () => {
   return signOut(auth)
  }
  // providers

  const providers = {
  user,
  handleRegister,
  handleSignIn,
  handleSignOut
  }

  return (
  <AuthContext.Provider value={providers}>
    {children}
  </AuthContext.Provider>
  );
};

export default AuthProviders;