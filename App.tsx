import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderExemple from "./src/header/Header"

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderExemple />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
