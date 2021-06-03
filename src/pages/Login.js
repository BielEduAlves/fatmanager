import React, { useState, useContext } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Logo,
  CaixaLogin,
  Input,
  ContainerInputs,
  CaixaTextoChamada,
  TextoChamada,
  ContainerButtons,
  Button,
  ButtonText,
} from '../styles/login';
import logoImg from "../assets/logo.png";

import { AuthContext } from '../contexts/auth';


export default function Login() {
  const { signIn, signUp } = useContext(AuthContext);



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    try {
      signIn(email, password)
    } catch (err) {
      console.warn(err)
    }
  }
  function handleSignUp() {
    try {
      signUp(email, password)
    } catch (err) {
      console.warn(err)
    }
  }
  return (
    <Container >
      <Logo>
        <Image source={logoImg} />
      </Logo>
      <CaixaTextoChamada>
        <TextoChamada>
          Controle o seu peso
        </TextoChamada>
      </CaixaTextoChamada>
      <CaixaLogin>

        <ContainerInputs>
          <Input
            placeholder="Digite seu email"
            onChangeText={text => setEmail(text)}
            value={email}
          />

          <Input
            placeholder="Digite sua senha"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </ContainerInputs>

      </CaixaLogin>



      <ContainerButtons>
        <Button
          invert={true}
          onPress={() => { handleSignUp() }}
        >
          <ButtonText invert={true} >Cadastar</ButtonText>
        </Button>
        <Button
          onPress={() => { handleSignIn() }}
        >
          <ButtonText>Logar</ButtonText>
        </Button>
      </ContainerButtons>
    </Container>

  );
}