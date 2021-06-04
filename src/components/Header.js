import React, { useContext, useState } from 'react';
import { Image, } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase';
import 'firebase/storage';

import {
  ContaineHeader,
  OlaText,
  NameText,
  ContainerFoto,
  ButtonLogout,
  ButtonLogoutText,
  Avatar,
} from '../styles/header';

import iconCam from "../assets/iconCam.png";
import { AuthContext } from '../contexts/auth';


export default function Header() {
  const { perfil, signOut } = useContext(AuthContext);
  const [imagem, setImagem] = useState(null);

  const uploadImagem = async (uri) => {
    const imagelocal = await fetch(uri)
    const blob = await imagelocal.blob()
    const filename = new Date().getTime()

    let ref = firebase.storage().ref().child('avatar/' + perfil.uid + '/' + filename)

    ref.put(blob).then(function (image) {
      image.ref.getDownloadURL().then(function (downloadURL) {

        firestore().collection('perfil').doc(perfil.user_id).update({
          'avatar': downloadURL,
        })
          .then(() => {
            console.log('User updated!');
          });



        setImagem(downloadURL)




        setImagem(downloadURL)



      })
    })
  }


  const escolherImagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      uploadImagem(result.uri);
    }
  }
  console.log(imagem);
  return (
    <ContaineHeader>
      <OlaText>
        Olá,
      </OlaText>
      <NameText>
        {perfil.nome}
      </NameText>
      <ContainerFoto
        onPress={() => { escolherImagem() }}
      >
        {imagem ?
          <Avatar source={{ uri: imagem }} />
          :
          <Image source={iconCam} />
        }

      </ContainerFoto>
      <ButtonLogout
        onPress={() => { signOut() }}
      >
        <ButtonLogoutText>
          Sair
        </ButtonLogoutText>
      </ButtonLogout>
    </ContaineHeader>
  );
}