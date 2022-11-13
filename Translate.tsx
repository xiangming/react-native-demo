import React, { useRef, useState } from 'react';
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';
import { FadeTransform } from './components';

// export type TranslateXProps = { x: number };

const Translate = () => {
  const [visible, setVisible] = useState(true);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  return (
    <View style={styles.container}>
      <FadeTransform style={styles.fadingContainer} visible={visible} translateX={translateX} translateY={translateY}>
        <Text style={styles.box}>Box!</Text>
      </FadeTransform>
      <View style={styles.buttonRow}>
        <Button title='左移20' onPress={() => setTranslateX(-20)} />
        <Button title='右移20' onPress={() => setTranslateX(20)} />
        <Button title='上移20' onPress={() => setTranslateY(-20)} />
        <Button title='下移20' onPress={() => setTranslateY(20)} />
        <Button title='start Fade' onPress={() => setVisible(!visible)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // border: '1px solid black',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  box: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default Translate;
