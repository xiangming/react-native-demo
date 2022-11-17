import React, { useEffect, useRef } from 'react';
import { Image, StyleSheet, ImageSourcePropType, Animated, Easing, Dimensions } from 'react-native';
import { Direction } from '../constants';

const timingConfig = () => ({
  easing: Easing.cubic,
  duration: 750,
  useNativeDriver: false,
});

const { width } = Dimensions.get('window');

const OFFSET = width;

export type FoodImageProps = {
  direction: Direction;
  image1: ImageSourcePropType;
  image2: ImageSourcePropType;
  visible?: boolean; // true为进入，false则为离开
};

export const FoodImage = (props: FoodImageProps) => {
  const { direction, image1, image2, visible } = props;

  // food左右移动动画
  const translateX = useRef(new Animated.Value(0)).current;

  // food上移动画
  const translateY = useRef(new Animated.Value(0)).current;

  // 进入动画
  const enterAnimation = () => {
    translateX.setValue(direction === 'SWIPE_LEFT' ? OFFSET : -OFFSET);
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: 0,
        ...timingConfig(),
      }),
      Animated.timing(translateY, {
        toValue: -30,
        ...timingConfig(),
      }),
    ]).start();
  };

  // 离开动画
  const leaveAnimation = () => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: direction === 'SWIPE_LEFT' ? -OFFSET : OFFSET,
        ...timingConfig(),
      }),
      Animated.timing(translateY, {
        toValue: 30,
        ...timingConfig(),
      }),
    ]).start();
  };

  // 根据visible切换动画
  useEffect(() => {
    if (visible) {
      enterAnimation();
    } else {
      leaveAnimation();
    }
  }, [visible]);

  // 初次渲染执行动画
  useEffect(() => {
    if (visible) {
      enterAnimation();
    }
  }, []);

  return (
    <Animated.View
      style={[
        styles.food,
        {
          transform: [{ translateX }],
        },
      ]}
    >
      <Image source={image2} style={styles.image2} />
      <Animated.View
        style={{
          transform: [{ translateY }],
        }}
      >
        <Image source={image1} style={styles.image1} />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  food: {
    width: 240,
    height: 290,
  },
  image1: {
    position: 'absolute',
    top: 30,
    left: 10,
    width: 200,
    height: 200,
  },
  image2: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 250,
    height: 250,
  },
});
