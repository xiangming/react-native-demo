import React from 'react';
import { Animated, Easing } from 'react-native';

export const useFade = (duration: number = 250, delay: number = 250) => {
  const opacity = React.useRef(new Animated.Value(1)).current;

  const onFade = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 0,
        easing: Easing.quad,
        duration,
        useNativeDriver: true,
      }),
      Animated.delay(delay),
      Animated.timing(opacity, {
        toValue: 1,
        easing: Easing.quad,
        duration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return { opacity, onFade };
};
