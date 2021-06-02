import React, { useState, useContext } from 'react';
import { Image } from 'react-native';
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


export function Cadastro() {
  const { signIn, signUp } = useContext(AuthContext);

  const [nome, setNome] = useState('');
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
    setCarregando(true);
    try {
      signUp(email, password)
    } catch (err) {
      console.warn(err)
    } finally {
      setCarregando(false);
    }
  }

  return (
    <>
      <Container >
        <Logo>
          <Image source={logoImg} />
        </Logo>
        <CaixaTextoChamada>
          <TextoChamada>
            Cadastro
          </TextoChamada>
        </CaixaTextoChamada>
        <CaixaLogin>

          <ContainerInputs>

            <Input
              placeholder="Digite seu Nome"
              onChangeText={text => setNome(text)}
              value={nome}
            />

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
    </>
  );
}