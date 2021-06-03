import React, { useState, useContext } from 'react';
import { Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, } from 'react-native';
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
  ContainerCadastroFoto,
  ButtonFoto,
  ButtonFotoText,
  ContainerFoto
} from '../styles/login';

import logoImg from "../assets/logo.png";

import { AuthContext } from '../contexts/auth';

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


export default function Perfil() {
  const { user, signUp, createProfile } = useContext(AuthContext);
  const [nome, setNome] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [sexo, setSexo] = useState('');


  const handleCreateProfile = () => {
    try {
      firebase.firestore().collection('perfil').add({
        user_id: user.uid,
        nome: nome,
        altura: altura,
        pesagem: {
          peso: peso,
          criado_em: firebase.firestore.FieldValue.serverTimestamp()
        },
        sexo: sexo,
        criado_em: firebase.firestore.FieldValue.serverTimestamp(),
      })
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >

      <Container>
        <Logo>
          <Image source={logoImg} />
        </Logo>
        <CaixaTextoChamada>
          <TextoChamada>
            Preencha os campos
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
              placeholder="Digite sua Altura"
              onChangeText={text => setAltura(text)}
              value={altura}
            />
            <Input
              placeholder="Digite seu peso"
              onChangeText={text => setPeso(text)}
              value={peso}
            />
            <Input
              placeholder="Digite seu sexo"
              onChangeText={text => setSexo(text)}
              value={sexo}
            />

          </ContainerInputs>


        </CaixaLogin>


        <ContainerButtons>
          <Button
            invert={false}
            onPress={() => { handleCreateProfile() }}
          >
            <ButtonText invert={false} >Cadastar</ButtonText>
          </Button>
        </ContainerButtons>
      </Container>

    </KeyboardAvoidingView>
  );
}