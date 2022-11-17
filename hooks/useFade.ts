import React from 'react';
import { Animated, Easing } from 'react-native';

const timingConfig = (duration: number) => ({
  duration,
  easing: Easing.quad,
  useNativeDriver: false,
});

export const useFade = (duration: number = 250, delay: number = 250) => {
  const opacity = React.useRef(new Animated.Value(1)).current;

  const onFade = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 0,
        ...timingConfig(duration),
      }),
      Animated.delay(delay),
      Animated.timing(opacity, {
        toValue: 1,
        ...timingConfig(duration),
      }),
    ]).start();
  };

  return { opacity, onFade };
};
