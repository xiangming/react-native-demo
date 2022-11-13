import React, { ReactNode } from 'react';
import { Text, View, Image, ViewStyle, StyleSheet } from 'react-native';
import mapImage from '../assets/address/map.png';
import callImage from '../assets/address/call.png';

export type AddressProps = {
  children?: ReactNode;
  style?: ViewStyle;
};

export const Address = (props: AddressProps) => {
  return (
    <View style={styles.container}>
      <Image source={mapImage} style={{ width: 25, height: 34 }} />
      <Text>
        Dongcheng District Metro Cultural Building
      </Text>
      <Image source={callImage} style={{ width: 33, height: 33 }} />
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
