import React from 'react';
import { Animated, Easing } from 'react-native';

const timingConfig = (duration: number) => ({
  duration,
  easing: Easing.quad,
  useNativeDriver: false,
});

export const useTranslateX = (duration: number = 250) => {
  const translateX = React.useRef(new Animated.Value(1)).current;

  const onTranslateX = (toValue: number) => {
    Animated.timing(translateX, {
      toValue,
      ...timingConfig(duration),
    }).start();
  };

  return { translateX, onTranslateX };
};
