import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export const TopBar = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/menu/recommend.png')} style={{ width: 22, height: 32 }} />
      <Image source={require('../assets/menu/burger.png')} style={{ width: 31, height: 32 }} />
      <Image source={require('../assets/menu/drink.png')} style={{ width: 25, height: 35 }} />
      <Image source={require('../assets/menu/snack.png')} style={{ width: 34, height: 34 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 86,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FF5D79',
  },
});
