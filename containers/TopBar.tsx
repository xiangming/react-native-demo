import React, { ReactNode } from 'react';
import { View, Image, ViewStyle, StyleSheet } from 'react-native';
import recommendImage from '../assets/menu/recommend.png';
import burgerImage from '../assets/menu/burger.png';
import drinkImage from '../assets/menu/drink.png';
import snackImage from '../assets/menu/snack.png';

export type TopBarProps = {
  children?: ReactNode;
  style?: ViewStyle;
};

export const TopBar = (props: TopBarProps) => {
  return (
    <View style={styles.container}>
      <Image source={recommendImage} style={{ width: 22, height: 32 }} />
      <Image source={burgerImage} style={{ width: 31, height: 32 }} />
      <Image source={drinkImage} style={{ width: 25, height: 35 }} />
      <Image source={snackImage} style={{ width: 34, height: 34 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    height: 86,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FF5D79',
  },
});
