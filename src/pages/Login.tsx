import React, { useState, useContext } from 'react';
import { Image } from 'react-native';
import {

  Container,
  Logo,
  CaixaLogin,
  TextInput,
  ForgotPassword,
  TextForgotPassword,
  ContainerInputs,
  CaixaTextoChamada,
  TextoChamada,
  ContainerButtons,
  Button,
  ButtonText,
} from '../styles/login2';
import logoImg from "../assets/logo.png";

import { useAuth } from '../contexts/auth';


const Login: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);


  function handleSign() {
    signIn();
    console.log("teste");
  }

  return (
    <>
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
            <TextInput
              placeholder="Digite seu email"
              onChangeText={text => setEmail(text)}
            />

            <TextInput
              placeholder="Digite sua senha"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
          </ContainerInputs>

        </CaixaLogin>



        <ContainerButtons>
          <Button >
            <ButtonText >Cadastar</ButtonText>
          </Button>
          <Button onPress={handleSign}>
            <ButtonText>Logar</ButtonText>
          </Button>
        </ContainerButtons>
      </Container>
    </>
  );
}

export default Login;