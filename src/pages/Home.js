import React, { useEffect, useState, useContext } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ContaineDados,
  ContainerOptions,
} from '../styles/home';
import Header from '../components/Header';
import { CardOptions } from '../components/CardOptions';
import { Load } from '../components/load';

import firebase from 'firebase';
import 'firebase/firestore';
import { AuthContext } from '../contexts/auth';

export function Home() {
  const { user, perfil } = useContext(AuthContext);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const ListenUpdateOptions = (snap) => {
    const data = snap.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    setOptions(data);
    setLoading(false);
  }
  useEffect(() => {
    firebase.firestore().collection('options').orderBy('position', 'asc').onSnapshot(ListenUpdateOptions);
  }, [])

  function handleOptionSelect(option) {
    navigation.navigate(option.key, {});
  }
  if (loading)
    return <Load />
  return (
    <>
      <Container>
        <Header />
        <ContaineDados>
        </ContaineDados>
        <ContainerOptions>
          <FlatList
            data={options}
            keyExtractor={(item) => String(item.key)}
            renderItem={({ item }) => (
              <CardOptions
                data={item}
                onPress={() => handleOptionSelect(item)}
              />
            )}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </ContainerOptions>
      </Container>
    </>
  );
}