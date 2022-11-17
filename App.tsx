import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Foods, BottomBar, TopBar, Address } from './containers';
import { FoodsProvider } from './provider';

export default function App() {
  return (
    <FoodsProvider>
      <SafeAreaView style={styles.container}>
        <TopBar />
        <Foods />
        <Address />
        <BottomBar />
      </SafeAreaView>
    </FoodsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#FFEDED',
    // TODO: gradient backgroundColor
  },
});
