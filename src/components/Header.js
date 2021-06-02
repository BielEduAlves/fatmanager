import React, { useContext } from 'react';
import { Image, } from 'react-native';

import {
  ContaineHeader,
  OlaText,
  NameText,
  ContainerFoto,
  ButtonLogout,
  ButtonLogoutText
} from '../styles/header';

import iconCam from "../assets/iconCam.png";
import { AuthContext } from '../contexts/auth';

export default function Header() {
  const { user, signOut } = useContext(AuthContext);


  return (
    <ContaineHeader>
      <OlaText>
        Olá,
      </OlaText>
      <NameText>
        Gabriel
      </NameText>
      <ContainerFoto>
        <Image source={iconCam} />
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