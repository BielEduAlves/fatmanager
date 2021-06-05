import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, FlatList, ActivityIndicator } from 'react-native';

import firebase from 'firebase';
import 'firebase/firestore';

import {
  Container,
  ContainerTop,
  ContainerTopImage,
  ImageTop,
  ContainerOptions,
  TextTop,
  TitleTextTop,
  ReminderContainer,
  ReminderImage,
  ReminderImageContainer,
  ReminderText,
  ContainerButtons,
  Button,
  ButtonText,
  ObjetivoList

} from '../styles/Exercicios';

import { ExerciciosList } from '../components/ExerciciosList';
import { ObjetivoButtons } from '../components/ObjetivoButtons';
import { Load } from '../components/load';

import iconExercicio from "../assets/iconExercicio.png";
import iconAlong from "../assets/iconAlong.png";
import api from '../services/api';

import colors from '../styles/colors';
import { color } from 'react-native-reanimated';


export function Exercicios() {
  const [objetivos, setObjetivos] = useState([]);
  const [exercicios, setExercicios] = useState([]);
  const [filteredExercicios, setFilteredeExercicios] = useState([]);
  const [objetivosSelected, setObjetivosSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setloadingMore] = useState(true);
  const [loadedAll, setLoadAll] = useState(false);

  function handleObjetivosSelected(objetivo) {
    setObjetivosSelected(objetivo);
    if (objetivo == 'all')
      return setFilteredeExercicios(exercicios)

    const filtered = exercicios.filter(exercicio =>
      exercicio.objetivo.includes(objetivo)
    );
    setFilteredeExercicios(filtered);
  }

  function handleChangeExercicios(exerciocio) {
    // console.log(exerciocio);

    /*if (objetivo == 'all')
      return setFilteredeExercicios(exercicios)

    const filtered = exercicios.filter(exercicio =>
      exercicio.objetivo.includes(objetivo)
    );
    setFilteredeExercicios(filtered);
    */
  }

  const fetchExercicios = (snap) => {
    const data = snap.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    setExercicios(data);
    setLoading(false);
  }
  useEffect(() => {
    firebase.firestore().collection('exercicios').orderBy('id', 'asc').onSnapshot(fetchExercicios);
  }, [])

  const fetchObjetivos = (snap) => {
    const data = snap.docs.map((doc) => {
      return {
        ...doc.data()
      }
    })
    setObjetivos([
      {
        key: 'all',
        title: 'Todos',
      },
      ...data
    ]);

    setLoading(false);
  }
  useEffect(() => {
    firebase.firestore().collection('objetivo').onSnapshot(fetchObjetivos);
  }, [])



  if (loading)
    return <Load />
  return (
    <>
      <Container>
        <ContainerTop>
          <ContainerTopImage>
            <ImageTop source={iconExercicio} />
          </ContainerTopImage>
          <TitleTextTop>
            Exercícios
          </TitleTextTop>
          <TextTop>
            Qual exercício faremos agora?
          </TextTop>
          <ReminderContainer>
            <ReminderImageContainer>
              <ReminderImage source={iconAlong} />
            </ReminderImageContainer>
            <ReminderText>
              Não esqueça dos 15 minutos de aquecimento
            </ReminderText>
          </ReminderContainer>
        </ContainerTop>

        <ObjetivoList>
          <FlatList
            data={objetivos}
            keyExtractor={(item) => String(item.key)}
            renderItem={({ item }) => (
              <ObjetivoButtons
                title={item.title}
                active={item.key === objetivosSelected}
                onPress={() => handleObjetivosSelected(item.key)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </ObjetivoList>

        <ContainerOptions>
          <FlatList
            data={filteredExercicios}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <ExerciciosList data={item}
                onPress={() => handleChangeExercicios(item)}
                active={item.key === objetivosSelected}
              />
            )}
            showsVerticalScrollIndicator={false}
          />

        </ContainerOptions>

        <ContainerButtons>
          <Button>
            <ButtonText>
              Iniciar
            </ButtonText>
          </Button>
        </ContainerButtons>


      </Container>
    </>
  );
}

