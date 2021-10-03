import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;

  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const logout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
