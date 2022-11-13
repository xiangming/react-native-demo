import React, { ReactNode } from 'react';
import { Text, View, Image, ViewStyle, StyleSheet } from 'react-native';
import { AddButton, Food, FoodInfo } from '../components';

const data = [
  {
    name: 'FRIES',
    price: 4,
    image1: require('../assets/order/fries1.png'),
    image2: require('../assets/order/fries2.png'),
  },
  {
    name: 'LATTE',
    price: 3,
    image1: require('../assets/order/latte1.png'),
    image2: require('../assets/order/latte1.png'),
  },
  {
    name: 'BURGER',
    price: 6,
    image1: require('../assets/order/burger1.png'),
    image2: require('../assets/order/burger2.png'),
  },
];

import star1Image from '../assets/order/star1.png';
import star2Image from '../assets/order/star2.png';
import star3Image from '../assets/order/star3.png';

export type OrderProps = {
  children?: ReactNode;
  style?: ViewStyle;
};

export const Order = (props: OrderProps) => {
  return (
    <View style={styles.container}>
      <Food />
      <FoodInfo name='LATTE' price={3} />
      <AddButton />
      <Image source={star1Image} style={styles.star1Image} />
      <Image source={star2Image} style={styles.star2Image} />
      <Image source={star3Image} style={styles.star3Image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 280,
  },
  star1Image: {
    position: 'absolute',
    left: '44.53%',
    top: '25.62%',
    width: 11,
    height: 13,
  },
  star2Image: {
    position: 'absolute',
    left: '8.53%',
    top: '40.27%',
    width: 15,
    height: 17,
  },
  star3Image: {
    position: 'absolute',
    left: '40.53%',
    top: '38.67%',
    width: 25,
    height: 27,
  },
});
