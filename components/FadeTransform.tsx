import React, { useEffect, useRef } from 'react';
import { ViewStyle } from 'react-native';
import { Animated } from 'react-native';

const DEFAULT_DURATION = 150;

export interface FadeTransformProps {
  visible?: boolean; // 是否可见
  duration?: number; // 动画时长，单位毫秒
  rotate?: boolean; // 是否旋转
  scale?: boolean; // 是否缩放
  useNativeDriver?: boolean; // 是否使用渲染线程
  translateX?: number; // 水平位移
  translateY?: number; // 垂直位移
  style?: ViewStyle;
  children?: React.ReactNode;
}

export const FadeTransform = ({ visible = true, duration = DEFAULT_DURATION, rotate, scale, translateX = 0, translateY = 0, useNativeDriver = true, children, style }: FadeTransformProps) => {
  const opacityValue = useRef(new Animated.Value(visible ? 1 : 0)).current;
  const translateXValue = useRef(new Animated.Value(0)).current;
  const translateYValue = useRef(new Animated.Value(0)).current;

  // opacityValue变化
  useEffect(() => {
    Animated.timing(opacityValue, {
      toValue: visible ? 1 : 0,
      duration: duration,
      useNativeDriver: useNativeDriver,
    }).start();
  }, [visible]);

  // translateXValue变化
  useEffect(() => {
    Animated.timing(translateXValue, {
      toValue: translateX,
      duration: duration,
      useNativeDriver: useNativeDriver,
    }).start();
  }, [translateX]);

  // translateYValue变化
  useEffect(() => {
    Animated.timing(translateYValue, {
      toValue: translateY,
      duration: duration,
      useNativeDriver: useNativeDriver,
    }).start();
  }, [translateY]);

  const transform: any[] = [{ perspective: 1000 }];

  if (translateX) {
    transform.push({ translateX: translateXValue });
  }

  if (translateY) {
    transform.push({ translateY: translateYValue });
  }

  if (scale) {
    transform.push({ scale: opacityValue });
  }

  if (rotate) {
    transform.push({
      // 将数字转化为度数
      rotate: opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      }),
    });
  }

  return <Animated.View style={{ ...style, opacity: opacityValue, transform }}>{children}</Animated.View>;
};
