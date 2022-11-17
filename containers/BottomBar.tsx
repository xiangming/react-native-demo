import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { FoodsContext } from '../context';
import { useFade } from '../hooks';

export const BottomBar = () => {
  const { total } = useContext(FoodsContext);
  const { opacity, onFade } = useFade(100);

  useEffect(() => {
    onFade();
  }, [total]);

  const animatedStyles = [
    {
      opacity,
    },
  ];

  return (
    <View style={styles.bottomBar}>
      <View style={styles.container}>
        <Text>
          <Animated.View style={animatedStyles}>
            <Text style={styles.text}>{total}</Text>
          </Animated.View>
          <Text style={styles.currency}>$</Text>
        </Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Pay</Text>
        </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 43,
    color: '#4f4f4f',
    width: 70,
    marginRight: 5,
    textAlign: 'right',
  },
  currency: {
    fontSize: 43,
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
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },
});
