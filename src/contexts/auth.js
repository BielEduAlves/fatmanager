import React, { createContext, useState, useEffect } from 'react';

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [perfil, setPerfil] = useState(null);

  const listenAuth = (useState) => {
    setUserId(useState.uid);
    setUser(useState)
  }

  const criarPerfil = (perfilData) => {
    const data = perfilData.docs.map((doc) => {
      return {
        uid: doc.data().user_id,
        nome: doc.data().nome,
        altura: doc.data().altura,
        Peso: doc.data().pesagem.peso,
        sexo: doc.data().sexo,
        criado_em: doc.data().nome,
        imc: (Number(doc.data().pesagem.peso) / (Number(doc.data().altura) + Number(doc.data().altura))).toFixed(2)
      }
    })
    data == '' ? setPerfil() : setPerfil(data.reduce(function (item) { }));
  }
  useEffect(() => {
    firebase.firestore().collection('perfil').where('user_id', '==', userId).onSnapshot(criarPerfil)
  }, [])

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(listenAuth)
  }, [])
  const signUp = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(resp => {
      })
      .catch(err => {
        console.warn(err)
      })
  }
  const signIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(resp => {
        console.warn(resp)
      })
      .catch(err => {
        console.warn(err)
      })
  }
  const signOut = () => {
    firebase.auth().signOut()
      .then(resp => {
        console.log('Deslogado com sucesso')
      })
      .catch(err => {
        console.warn(err)
      })
  }
  return (
    <AuthContext.Provider value={{ user, perfil, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
export { AuthContext, AuthProvider }