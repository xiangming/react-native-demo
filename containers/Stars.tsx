/**
 * inspired by https://github.com/facebook/react-native/blob/main/packages/rn-tester/js/examples/Animated/ComposingExample.js
 */
import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing, Image } from 'react-native';
import { FoodsContext } from '../context';

const timingConfig = () => ({
  easing: Easing.cubic,
  duration: 750,
  useNativeDriver: false,
});

const data = [
  {
    name: 'small',
    image: require('../assets/order/star1.png'),
    width: 11,
    height: 13,
    positions: [
      {
        top: 141,
        left: 25,
      },
      {
        top: 114,
        left: 209,
      },
      {
        top: 41,
        left: 172,
      },
    ],
  },
  {
    name: 'middle',
    image: require('../assets/order/star2.png'),
    width: 15,
    height: 17,
    positions: [
      {
        top: 88,
        left: 167,
      },
      {
        top: 207,
        left: 32,
      },
      {
        top: 194,
        left: 152,
      },
    ],
  },
  {
    name: 'large',
    image: require('../assets/order/star3.png'),
    width: 25,
    height: 27,
    positions: [
      {
        top: 230,
        left: 167,
      },
      {
        top: 62,
        left: 39,
      },
      {
        top: 190,
        left: 25,
      },
    ],
  },
];

export const Stars = () => {
  const { currentIndex } = useContext(FoodsContext);

  const starIndexes = React.useMemo(() => data.map((item, index) => index), []);
  const topPositions = React.useRef(starIndexes.map(() => new Animated.Value(0))).current;
  const leftPositions = React.useRef(starIndexes.map(() => new Animated.Value(0))).current;

  const topAnimation = topPositions.map((value, index) =>
    Animated.timing(value, {
      toValue: data[currentIndex].positions[index].top,
      ...timingConfig(),
    }),
  );

  const leftAnimation = leftPositions.map((value, index) =>
    Animated.timing(value, {
      toValue: data[currentIndex].positions[index].left,
      ...timingConfig(),
    }),
  );

  const animation = Animated.parallel([...topAnimation, ...leftAnimation]);

  useEffect(() => {
    animation.start();
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      {data.map(({ name, image, width, height }, index) => (
        <Animated.View
          style={[
            {
              position: 'absolute',
              top: topPositions[index],
              left: leftPositions[index],
            },
          ]}
          key={`${name}${index}`}
        >
          <Image source={image} style={{ width, height }} />
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: 290,
  },
});
