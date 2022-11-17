import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Image, StyleSheet, Animated, ImageSourcePropType, Alert } from 'react-native';
import { FoodProps } from '../components';
import { AddButton } from './AddButton';
import { FoodsContext } from '../context';
import { useTranslateX } from '../hooks';

export type PlateItemProps = Omit<FoodProps, 'direction'> & {
  image: ImageSourcePropType;
  width: number;
  height: number;
};

export type PlateProps = {
  data: PlateItemProps[];
};

export type Position = {
  x: number;
  y: number;
};

function getEndPosition(count: number, endPosition: Position) {
  let position = { x: 0, y: 0 };
  switch (count) {
    case 0:
      position.x = endPosition.x;
      position.y = endPosition.y - 70;
      break;
    case 1:
      position.x = endPosition.x - 60;
      position.y = endPosition.y;
      break;
    case 2:
      position.x = endPosition.x + 50;
      position.y = endPosition.y - 20;
      break;
    default:
      break;
  }
  return position;
}

function measureView(view: View): Promise<{
  x: number;
  y: number;
  width: number;
  height: number;
}> {
  return new Promise((resolve) => {
    view.measureInWindow((x, y, width, height) => resolve({ x, y, width, height }));
  });
}

let count = 0;

export const Plate = ({ data }: PlateProps) => {
  const { onAdd, currentIndex } = useContext(FoodsContext);

  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [endPosition, setEndPosition] = useState({ x: 0, y: 0 });

  const startView = useRef(null);
  const endView = useRef(null);

  const foodIndexes = React.useMemo(() => data.map((item, index) => index), []);
  const topPositions = React.useRef(foodIndexes.map(() => new Animated.Value(0))).current;
  const leftPositions = React.useRef(foodIndexes.map(() => new Animated.Value(0))).current;
  const scales = React.useRef(foodIndexes.map(() => new Animated.Value(0))).current;

  const { translateX, onTranslateX } = useTranslateX();

  const animation = foodIndexes.map((item, index) =>
    Animated.parallel([
      Animated.timing(topPositions[index], {
        toValue: getEndPosition(count, endPosition).y,
        useNativeDriver: false,
      }),
      Animated.timing(leftPositions[index], {
        toValue: getEndPosition(count, endPosition).x,
        useNativeDriver: false,
      }),
      Animated.timing(scales[index], {
        toValue: 1,
        useNativeDriver: false,
      }),
    ]),
  );

  // animation callback
  function shift(count: number) {
    if (count === 2) {
      onTranslateX(20);
    }
    if (count === 3) {
      onTranslateX(0);
    }
  }

  const addToPlate = async () => {
    // We can only add three items to the plate for now
    if (count > 2) return Alert.alert("It's full", 'We can only serve three items for now', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);

    // update the total
    const { price } = data[currentIndex];
    onAdd?.(price!);

    leftPositions[currentIndex].setValue(startPosition.x);
    topPositions[currentIndex].setValue(startPosition.y);
    scales[currentIndex].setValue(0.5);
    animation[currentIndex].start(() => shift(count));
    count++;
  };

  useEffect(() => {
    async function setStartPositions() {
      const positions = await measureView(startView.current!);
      setStartPosition(positions);
    }
    async function setEndPositions() {
      const { x, y, width, height } = await measureView(endView.current!);
      setEndPosition({ x: x + width / 2, y: y + height / 2 });
    }
    setTimeout(() => {
      setStartPositions();
      setEndPositions();
    }, 100);
  }, []);

  return (
    <>
      <View style={styles.addButton} ref={startView}>
        <AddButton onAdd={addToPlate} />
      </View>
      <View style={styles.container}>
        <Image source={require('../assets/plate/plate.png')} style={styles.plateImage} ref={endView} />
      </View>
      <Animated.View
        style={[
          {
            position: 'absolute',
            transform: [
              {
                translateX,
              },
            ],
          },
        ]}
      >
        {data.map(({ name, image, width, height }, index) => (
          <Animated.View
            style={[
              {
                position: 'absolute',
                top: topPositions[index],
                left: leftPositions[index],
                transform: [
                  {
                    translateX: -width * 0.5,
                  },
                  {
                    translateY: -height * 0.5,
                  },
                  {
                    scale: scales[index],
                  },
                ],
              },
            ]}
            key={`${name}${index}`}
          >
            <Image source={image} style={{ width, height }} />
          </Animated.View>
        ))}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    position: 'absolute',
    top: 280,
    right: 20,
  },
  plateImage: { width: 276, height: 121 },
});
