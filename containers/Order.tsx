import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { View, Image, StyleSheet, PanResponder, PanResponderGestureState, GestureResponderEvent } from 'react-native';
import { Card, CardProps } from '../components';
import { Direction } from '../constants';
import { OrderContext } from '../context';

import star1Image from '../assets/order/star1.png';
import star2Image from '../assets/order/star2.png';
import star3Image from '../assets/order/star3.png';

// TODO: add velocityThreshold
const offsetThreshold = 50;

export type OrderProps = {
  data: Omit<CardProps, 'direction'>[];
};

export const Order = ({ data }: OrderProps) => {
  const [visible, setVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>('SWIPE_LEFT');

  const { onSwipe } = useContext(OrderContext);

  const getNextIndex = (index: number) => {
    return index < 0 ? data.length + index : index % data.length;
  };

  const handleSwipeLeft = useCallback(() => {
    setCurrentIndex((currentIndex) => getNextIndex(currentIndex + 1));
    setDirection('SWIPE_LEFT');
  }, []);

  const handleSwipeRight = useCallback(() => {
    setCurrentIndex((currentIndex) => getNextIndex(currentIndex - 1));
    setDirection('SWIPE_RIGHT');
  }, []);

  useEffect(() => {
    setVisible(!visible);
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
    <View>
      <View style={styles.container} {...panResponder.panHandlers}>
        <View style={styles.carousel}>
          {data.map((item, index) => {
            return <Card {...item} visible={currentIndex === index} direction={direction} key={`${item.name}${index}`} />;
          })}
        </View>
        {/* TODO: animate the stars */}
        <Image source={star1Image} style={styles.star1Image} />
        <Image source={star2Image} style={styles.star2Image} />
        <Image source={star3Image} style={styles.star3Image} />
      </View>
    </View>
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
  star1Image: {
    position: 'absolute',
    top: 114,
    left: 209,
    width: 11,
    height: 13,
  },
  star2Image: {
    position: 'absolute',
    top: 141,
    left: 25,
    width: 15,
    height: 17,
  },
  star3Image: {
    position: 'absolute',
    top: 40,
    left: 172,
    width: 25,
    height: 27,
  },
});
