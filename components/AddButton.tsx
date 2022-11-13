import React from 'react';
import { Image, StyleSheet } from 'react-native';
import addImage from '../assets/order/add.png';

export type AddButtonProps = {
  name?: string;
  price?: string;
};

export const AddButton = (props: AddButtonProps) => {
  return <Image source={addImage} style={styles.addImage} />;
};

const styles = StyleSheet.create({
  addImage: {
    position: 'absolute',
    right: 30,
    bottom: 0,
    width: 100,
    height: 100,
  },
});
