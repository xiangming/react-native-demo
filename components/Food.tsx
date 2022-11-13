import React from 'react';
import { Image, View, StyleSheet, ImageSourcePropType } from 'react-native';

export type FoodProps = {
  image1?: ImageSourcePropType;
  image2?: ImageSourcePropType;
};

export const Food = (props: FoodProps) => {
  const { image1, image2 } = props;
  return (
    <View style={styles.container}>
      <Image source={image1} style={styles.image1} />
      <Image source={image2} style={styles.image2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image1: {
    position: 'absolute',
    right: 30,
    bottom: 0,
    width: 100,
    height: 100,
  },
  image2: {
    position: 'absolute',
    right: 30,
    bottom: 0,
    width: 100,
    height: 100,
  },
});
