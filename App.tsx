import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Hello from './Hello';
import Drag from './Drag';
import Fade from './Fade';
import FadeInOut from './FadeInOut';
import Translate from './Translate';
import { Order, Plate, BottomBar, TopBar, Address, Divider } from './containers';

export default function App() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* <LinearGradient style={styles.container} colors={['#F5F5F5', '#FFEDED']} locations={[0, 1.78]} start={[1, 0]} end={[0, 20]}> */}
        <TopBar />
        {/* <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </Text>
        </ScrollView> */}
        <Translate />
        {/* <FadeInOut /> */}
        {/* <Fade /> */}
        {/* <Drag /> */}
        {/* <Text>Open up App.tsx to start working on your app!</Text> */}
        {/* <Hello name='Arvin' /> */}
        <Order />
        <Divider />
        <Plate />
        <Address />
        {/* <StatusBar style='auto' /> */}
        <BottomBar />
        {/* </LinearGradient> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    // display: 'flex',
    // width: '100%',
    // height: '100%',
    backgroundColor: '#f5f5f5',
    // backgroundColor: '#FFEDED',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // scrollView: {
  //   backgroundColor: 'pink',
  // },
  // text: {
  //   fontSize: 42,
  // },
});
