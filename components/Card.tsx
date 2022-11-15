import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Food, FoodProps } from './Food';
import { FoodInfo, FoodInfoProps } from './FoodInfo';

export type CardProps = FoodProps & FoodInfoProps;

export const Card = (props: CardProps) => {
  const { name, price, direction, image1, image2, visible } = props;

  return (
    <View style={styles.card}>
      <Food visible={visible} direction={direction} image1={image1} image2={image2} />
      <FoodInfo visible={visible} name={name} price={price} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 290,
  },
});
