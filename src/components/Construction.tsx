import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

import Constructor from '../assets/construction.json';

export function Construction() {

  return (
    <View style={styles.container}>
      <LottieView
        source={Constructor}
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