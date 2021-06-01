import React, { createContext, useContext, useState, useEffect } from "react";
import firebase from 'firebase';
import 'firebase/auth';


interface AuthContextData {
  signed: boolean;
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC = ({ children }) => {

  async function signIn() {
    firebase.auth().createUserWithEmailAndPassword(user.name, user.password)
      .then(resp => {
        console.warn(resp)
      })
      .catch(err => {
        console.warn(err)
      })
  }


  return (
    <AuthContext.Provider value={{ signed: false, token: '', user: {} }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;