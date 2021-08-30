import React, {createContext, useContext, useState} from 'react';
import {isLogged} from '../services/auth';
import firebase from '../model/firebase';

export const AuthContext = createContext({});

export const AuthProvider = props => {
  const [user, setUser] = useState({
    name: 'Ronan',
    typeUser: 0,
    isLogged: firebase.auth().currentUser ? true : false,
  });

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
