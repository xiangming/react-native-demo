import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FoodImage, FoodImageProps } from './FoodImage';
import { FoodInfo, FoodInfoProps } from './FoodInfo';

export type FoodProps = FoodImageProps & FoodInfoProps;

export const Food = (props: FoodProps) => {
  const { name, price, direction, image1, image2, visible } = props;

  return (
    <View style={styles.item}>
      <FoodImage visible={visible} direction={direction} image1={image1} image2={image2} />
      <FoodInfo visible={visible} name={name} price={price} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 290,
  },
});
