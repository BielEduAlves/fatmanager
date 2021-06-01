import React from 'react';
import { Image, } from 'react-native';

import {
  ContaineHeader,
  OlaText,
  NameText,
  ContainerFoto,
} from '../styles/header';

import iconCam from "../assets/iconCam.png";

export const Header = () => {
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
    </ContaineHeader>
  );
}