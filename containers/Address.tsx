import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export const Address = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/address/map.png')} style={{ width: 25, height: 34 }} />
      <Text>Dongcheng District Metro Cultural Building</Text>
      <Image source={require('../assets/address/call.png')} style={{ width: 33, height: 33 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#606060',
    fontSize: 14,
    marginTop: 25,
    marginBottom: 25,
  },
});
