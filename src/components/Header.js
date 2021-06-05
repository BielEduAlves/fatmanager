import React, { useContext, useState } from 'react';
import { Image, } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

import {
  ContaineHeader,
  OlaText,
  NameText,
  ContainerFoto,
  ButtonLogout,
  ButtonLogoutText,
  Avatar,
} from '../styles/header';

import colors from '../styles/colors';
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
        try {
          firebase.firestore().collection('perfil').doc(perfil.docId).update({
            'avatar': downloadURL,
          })
            .then(() => {
              console.log('User updated!');
            });

        } catch (err) {
          console.warn(err)
        }
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
        {perfil.avatar ?
          <Avatar source={{ uri: perfil.avatar }} />
          :
          <Image source={iconCam} />
        }

      </ContainerFoto>
      <ButtonLogout
        onPress={() => { signOut() }}
      >
        <ButtonLogoutText>Sair</ButtonLogoutText>
        <FontAwesome5 name="sign-out-alt" size={15} color={colors.red2} />
      </ButtonLogout>
    </ContaineHeader>
  );
}