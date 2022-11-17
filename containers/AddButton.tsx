import React, { useContext, useEffect } from 'react';
import { Animated, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { FoodsContext } from '../context';
import { useFade } from '../hooks';

export type AddButtonProps = {
  onAdd?: () => void;
};

export const AddButton = (props: AddButtonProps) => {
  const { onAdd } = props;
  const { currentIndex } = useContext(FoodsContext);

  const { opacity, onFade } = useFade();

  // no dependencies to make it animate
  useEffect(() => {
    onFade();
  }, [currentIndex]);

  return (
    <>
      <Animated.View
        style={[
          {
            opacity,
          },
        ]}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            onAdd?.();
          }}
        >
          <Image source={require('../assets/order/add.png')} style={styles.addImage} />
        </TouchableWithoutFeedback>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  addImage: { width: 100, height: 100 },
});
