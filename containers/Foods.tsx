import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, PanResponder, PanResponderGestureState, GestureResponderEvent } from 'react-native';
import { Food } from '../components';
import { Direction } from '../constants';
import { FoodsContext } from '../context';
import { getNextIndex } from '../utils';
import { Plate } from './Plate';
import { Divider } from './Divider';
import { Stars } from './Stars';

// TODO: add velocityThreshold
const offsetThreshold = 50;

const data = [
  {
    name: 'FRIES',
    price: 4,
    image1: require('../assets/order/fries1.png'),
    image2: require('../assets/order/fries2.png'),
    image: require('../assets/plate/fries.png'),
    width: 99,
    height: 99,
  },
  {
    name: 'LATTE',
    price: 3,
    image1: require('../assets/order/latte1.png'),
    image2: require('../assets/order/latte2.png'),
    image: require('../assets/plate/latte.png'),
    width: 128,
    height: 128,
  },
  {
    name: 'BURGER',
    price: 6,
    image1: require('../assets/order/burger1.png'),
    image2: require('../assets/order/burger2.png'),
    image: require('../assets/plate/burger.png'),
    width: 150,
    height: 150,
  },
];

export const Foods = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>('SWIPE_LEFT');

  const { onSwipe } = useContext(FoodsContext);

  const handleSwipeLeft = useCallback(() => {
    setCurrentIndex((currentIndex) => getNextIndex(currentIndex + 1, data.length));
    setDirection('SWIPE_LEFT');
  }, []);

  const handleSwipeRight = useCallback(() => {
    setCurrentIndex((currentIndex) => getNextIndex(currentIndex - 1, data.length));
    setDirection('SWIPE_RIGHT');
  }, []);

  useEffect(() => {
    onSwipe?.(currentIndex);
  }, [currentIndex]);

  const responderEnd = (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
    const { dx } = gestureState;

    if (Math.abs(dx) > offsetThreshold) {
      dx > 0 ? handleSwipeRight() : handleSwipeLeft();
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderRelease: responderEnd,
    }),
  ).current;

  return (
    <>
      <View style={styles.container} {...panResponder.panHandlers}>
        <View style={styles.carousel}>
          {data.map((item, index) => {
            return <Food {...item} visible={currentIndex === index} direction={direction} key={`${item.name}${index}`} />;
          })}
        </View>
        <Stars />
      </View>
      <Divider />
      <Plate data={data} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 290,
  },
  carousel: {
    height: 290,
    flexDirection: 'row',
    overflow: 'hidden',
  },
});
