import React, { useState } from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { FadeInOut } from './components';

const App = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <FadeInOut visible={visible}>
        <Text>Default duration</Text>
      </FadeInOut>
      <FadeInOut visible={visible} duration={1000}>
        <Text>Duration = 1000</Text>
      </FadeInOut>
      <FadeInOut visible={visible} rotate={true}>
        <Text>Rotate</Text>
      </FadeInOut>
      <FadeInOut visible={visible} scale={true}>
        <Text>Scale</Text>
      </FadeInOut>
      <Button onPress={toggleVisible} title='Start Fade' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default App;
