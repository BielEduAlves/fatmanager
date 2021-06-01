import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, FlatList, ActivityIndicator } from 'react-native';

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

interface ObjetivosProps {
  key: string;
  title: string;
}

interface ExerciciosListProps {
  id: number;
  name: string;
  kcal: number;
  objetivo: [string];
  like: boolean;
}


export function Exercicios() {
  const [objetivos, setObjetivos] = useState<ObjetivosProps[]>([]);
  const [exercicios, setExercicios] = useState<ExerciciosListProps[]>([]);
  const [filteredExercicios, setFilteredeExercicios] = useState<ExerciciosListProps[]>([]);
  const [objetivosSelected, setObjetivosSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setloadingMore] = useState(true);
  const [loadedAll, setLoadAll] = useState(false);

  function handleObjetivosSelected(objetivo: string) {
    setObjetivosSelected(objetivo);

    if (objetivo == 'all')
      return setFilteredeExercicios(exercicios)

    const filtered = exercicios.filter(exercicio =>
      exercicio.objetivo.includes(objetivo)
    );
    setFilteredeExercicios(filtered);
  }

  async function fetchExercicios() {
    const { data } = await api.get(`exercicio?_sort=name&order=asc&_page=${page}&_limit=8`);


    if (page > 1) {
      setExercicios(oldValue => [...oldValue, ...data]);
      setFilteredeExercicios(oldValue => [...oldValue, ...data]);
    } else {
      setExercicios(data);
      setFilteredeExercicios(data);
      setLoading(false)
    }
    setloadingMore(false);
  }

  function handleFecthMore(distance: number) {
    if (distance < 1)
      return;

    setloadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchExercicios();
  }


  useEffect(() => {
    fetchExercicios();
  }, []);

  useEffect(() => {
    async function fetchObjetivos() {
      const { data } = await api.get('objetivos?_sort=title');
      setObjetivos([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data
      ]);
    }
    fetchObjetivos();
  }, []);

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
              <ExerciciosList data={item} />
            )}

            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.1}
            onEndReached={({ distanceFromEnd }) =>
              handleFecthMore(distanceFromEnd)
            }
            ListFooterComponent={
              loadingMore
                ? <ActivityIndicator color={colors.red_light} />
                : <></>
            }
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

