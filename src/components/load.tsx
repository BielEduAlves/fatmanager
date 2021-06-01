import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

import LoadAnimation1 from '../assets/load.json';
import LoadAnimation2 from '../assets/load2.json';
import LoadAnimation3 from '../assets/load3.json';

export function Load() {

  return (
    <View style={styles.container}>
      <LottieView
        source={LoadAnimation1}
        autoPlay
        loop
        style={styles.animation}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  animation: {
    backgroundColor: 'transparent',
    width: 200,
    height: 200,
  }
});