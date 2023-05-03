import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [loader, setLoader] = useState(true)
  const [user, setUser] = useState(null);
  // register
  const handleRegister = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in
  const handleSignIn = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // useEffect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // sign out
  const logOut = () => {
    return signOut(auth);
  };
  // providers

  const providers = {
    user,
    handleRegister,
    handleSignIn,
    logOut,
    loader
  };

  return (
    <AuthContext.Provider value={providers}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
