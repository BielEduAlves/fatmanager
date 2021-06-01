import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ContaineDados,
  ContainerOptions,
} from '../styles/home';
import { Header } from '../components/Header';
import { CardOptions } from '../components/CardOptions';
import { Load } from '../components/load';
import api from '../services/api';
interface OptionsProps {
  key: string;
  name: string;
  photo: string;
}
export function Home() {
  const [options, setOptions] = useState<OptionsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    async function fetchOptions() {
      const { data } = await api.get('options');
      setOptions(data);
      setLoading(false)
    }
    fetchOptions();
  }, [])
  function handleOptionSelect(option: OptionsProps) {
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

