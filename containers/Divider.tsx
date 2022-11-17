import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Divider = () => {
  return <View style={styles.divider}></View>;
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    borderTopWidth: 3,
    borderStyle: 'solid',
    borderColor: '#F2F1F1',
    marginBottom: 80,
  },
});
