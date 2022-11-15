import React, { ReactNode, useContext, useEffect } from 'react';
import { Text, View, ViewStyle, StyleSheet, Animated, Easing } from 'react-native';
import { OrderContext } from '../context';
import { useFade } from '../hooks';

export type BottomBarProps = {
  children?: ReactNode;
  style?: ViewStyle;
};

export const BottomBar = (props: BottomBarProps) => {
  const { total } = useContext(OrderContext);
  const { opacity, onFade } = useFade(100);

  // total变化时触发动画
  useEffect(() => {
    // opacity.setValue(0);
    onFade();
  }, [total]);

  const animatedStyles = [
    {
      opacity: opacity,
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
    // width: '100%',
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
