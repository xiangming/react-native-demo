import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export type FoodInfoProps = {
  name?: string;
  price?: number;
};

export const FoodInfo = (props: FoodInfoProps) => {
  const { name, price } = props;
  return (
    <View style={styles.info}>
      {name ? <Text style={styles.name}>{name}</Text> : null}
      {price ? <Text style={styles.price}>{price}$</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    position: 'absolute',
    right: 48,
    top: 70,
    textAlign: 'right',
  },
  name: {
    fontSize: 32,
    fontWeight: '600',
    color: '#EB5C77',
  },
  price: {
    fontSize: 24,
    fontWeight: '400',
    color: '#EB5C77',
  },
});
