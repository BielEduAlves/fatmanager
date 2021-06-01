import React from 'react';
import { } from 'react-native';
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import Routes from './routes';
import './src/services/firebase'
export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })


  if (!fontsLoaded)
    return <AppLoading />

  return (

    <Routes />

  );
}