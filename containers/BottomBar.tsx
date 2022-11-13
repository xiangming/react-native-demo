import React, { ReactNode } from 'react';
import { Text, View, ViewStyle, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export type BottomBarProps = {
  total?: number;
  children?: ReactNode;
  style?: ViewStyle;
};

export const BottomBar = (props: BottomBarProps) => {
  const { total = 0 } = props;
  return (
    <View style={styles.bottomBar}>
      <View style={styles.container}>
        <Text style={styles.total}>{total}$</Text>
        {/* <LinearGradient style={styles.button} colors={['#FD003C', '#FF5D79']} locations={[-0.11, 1.05]} start={[1, 0]} end={[-1, 0]}> */}
        <View style={styles.button}>
          <Text style={styles.buttonText}>Pay</Text>
        </View>
        {/* </LinearGradient> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#fff',
  },
  container: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  total: {
    fontSize: 43,
    marginLeft: 20,
    color: '#4f4f4f',
  },
  button: {
    flexBasis: '40%',
    width: 143,
    height: 65,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5D79',
  },
  buttonText: {
    fontSize: 32,
    fontWeight: '600',
    // lineHeight: 16,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },
});
