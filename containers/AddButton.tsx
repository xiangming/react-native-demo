import React, { useContext, useEffect, useRef } from 'react';
import { Animated, Image, StatusBar, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { CardProps, ShoppingCartView, ShoppingCartAnimation } from '../components';
import { OrderContext } from '../context';
import { useFade } from '../hooks';
import { Plate } from './Plate';

import addImage from '../assets/order/add.png';
import latteImage from '../assets/plate/latte.png';

export type AddButtonProps = {
  data: Omit<CardProps, 'direction'>[];
};

export const AddButton = (props: AddButtonProps) => {
  const { data } = props;

  const { onAdd, currentIndex } = useContext(OrderContext);

  const { price } = data[currentIndex || 0];

  const { opacity, onFade } = useFade();

  // no dependencies to make it animate
  useEffect(() => {
    onFade();
  }, [price]);

  const animatedStyles = [
    styles.container,
    {
      opacity,
    },
  ];

  const startView = useRef(null);
  const endView = useRef(null);

  const addToPlate = () => {
    ShoppingCartAnimation(<Image source={latteImage} style={styles.latteImage} />, {
      startView: startView.current!,
      endView: endView.current!,
      topFix: StatusBar.currentHeight || 0,
      rightFix: 0,
      startScale: 0.5,
      endScale: 1,
      duration: 500,
      callback: () => {
        console.log('success');
        // TODO: 餐盘挤入效果
      },
    });
  };

  return (
    <>
      <Animated.View style={animatedStyles}>
        <TouchableWithoutFeedback
          onPress={() => {
            addToPlate();
            onAdd?.(price!);
          }}
        >
          <Image source={addImage} style={styles.addImage} ref={startView} />
        </TouchableWithoutFeedback>
      </Animated.View>
      <View style={styles.plate} ref={endView}>
        <Plate />
      </View>
      <ShoppingCartView />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 280,
    right: 20,
  },
  plate: {
    top: 0,
  },
  addImage: { width: 100, height: 100 },
  latteImage: { width: 128, height: 128 },
});
