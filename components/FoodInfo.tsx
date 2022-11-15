import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, Animated, Easing } from 'react-native';

const duration = 500;

export type FoodInfoProps = {
  visible?: boolean; // 用来控制动画
  name?: string;
  price?: number;
};

export const FoodInfo = (props: FoodInfoProps) => {
  const { visible, name, price } = props;

  const translateY = useRef(new Animated.Value(-50)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  // 向下进入
  const enterAnimation = () => {
    Animated.parallel([
      // Animated.delay(duration),
      Animated.timing(translateY, {
        toValue: 0,
        easing: Easing.quad,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        easing: Easing.quad,
        duration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // 向下退出
  const leaveAnimation = () => {
    Animated.parallel([
      // Animated.delay(250),
      Animated.timing(translateY, {
        toValue: 50,
        easing: Easing.quad,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        easing: Easing.quad,
        duration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (visible) {
      translateY.setValue(-50);
      enterAnimation();
    } else {
      translateY.setValue(0);
      leaveAnimation();
    }
  }, [visible]);

  const animatedStyles = [
    styles.info,
    {
      opacity,
      transform: [
        {
          translateY,
        },
      ],
    },
  ];

  return (
    <Animated.View style={animatedStyles}>
      {name ? <Text style={styles.name}>{name}</Text> : null}
      {price ? <Text style={styles.price}>{price}$</Text> : null}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  info: {
    position: 'absolute',
    right: 40,
    top: 70,
  },
  name: {
    fontSize: 32,
    fontWeight: '600',
    color: '#EB5C77',
    textAlign: 'right',
  },
  price: {
    fontSize: 24,
    fontWeight: '300',
    color: '#EB5C77',
    textAlign: 'right',
  },
});
