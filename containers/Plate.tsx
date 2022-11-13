import React, { ReactNode } from 'react';
import { View, Image, ViewStyle, StyleSheet } from 'react-native';
import plateImage from '../assets/plate/plate.png';
import friesImage from '../assets/plate/fries.png';
import latteImage from '../assets/plate/latte.png';
import burgerImage from '../assets/plate/burger.png';

export type PlateProps = {
  children?: ReactNode;
  style?: ViewStyle;
};

export const Plate = (props: PlateProps) => {
  return (
    <View style={styles.container}>
      <Image source={plateImage} style={styles.plateImage} />
      <Image source={latteImage} style={[styles.foodImage, styles.latteImage, styles.firstImage]} />
      <Image source={burgerImage} style={[styles.foodImage, styles.burgerImage, styles.secondImage]} />
      <Image source={friesImage} style={[styles.foodImage, styles.friesImage, styles.thirdImage]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodImage: {
    position: 'absolute',
  },
  plateImage: { width: 276, height: 121 },
  friesImage: { width: 99, height: 99 },
  latteImage: { width: 128, height: 128 },
  burgerImage: { width: 150, height: 150 },
  firstImage: {
    transform: [
      {
        translateX: 0,
      },
      {
        translateY: -70,
      },
    ],
  },
  secondImage: {
    transform: [
      {
        translateX: -60,
      },
      {
        translateY: 0,
      },
    ],
  },
  thirdImage: {
    transform: [
      {
        translateX: 30,
      },
      {
        translateY: -20,
      },
    ],
  },
});
