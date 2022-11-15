import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import { Order, Plate, BottomBar, TopBar, Address, Divider, AddButton } from './containers';
import { OrderProvider } from './provider';

const data = [
  {
    name: 'FRIES',
    price: 4,
    image1: require('./assets/order/fries1.png'),
    image2: require('./assets/order/fries2.png'),
    starPositions: [
      {
        top: 114,
        left: 209,
      },
      {
        top: 141,
        left: 25,
      },
      {
        top: 40,
        left: 172,
      },
    ],
  },
  {
    name: 'LATTE',
    price: 3,
    image1: require('./assets/order/latte1.png'),
    image2: require('./assets/order/latte2.png'),
  },
  {
    name: 'BURGER',
    price: 6,
    image1: require('./assets/order/burger1.png'),
    image2: require('./assets/order/burger2.png'),
  },
];

export default function App() {
  return (
    <OrderProvider>
      <SafeAreaView style={styles.page}>
        <View style={styles.container}>
          <TopBar />
          <Order data={data} />
          <Divider />
          <AddButton data={data} />
          {/* <Plate /> */}
          <Address />
          <BottomBar />
        </View>
      </SafeAreaView>
    </OrderProvider>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    // backgroundColor: '#f5f5f5',
    backgroundColor: '#FFEDED',
    // TODO: gradient backgroundColor
  },
});
