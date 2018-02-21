import React from 'react';
import { StyleSheet, View, Text, ScrollView, Linking } from 'react-native';
import StickyHeaderComponent from './StickyHeaderComponent.js';
import SwiperComponent from './ImageSwiperComponent.js';
import IntroComponent from './IntroComponent.js';
import FoundAndLostComponent from './FoundAndLostComponent.js';
import FleauxzanguiComponent from './FleauxzanguiComponent.js';
import TheBannetonsComponent from './TheBannetonsComponent.js';
import StickyFooterComponent from './StickyFooterComponent.js';

// Variables //

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});

// Main Application - Highest Order Component //

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black', marginTop: 20}}>
        <StickyHeaderComponent />
        <ScrollView contentContainerStyle={styles.container}>
          <SwiperComponent />
          <IntroComponent />
          <FoundAndLostComponent />
          <FleauxzanguiComponent />
          <TheBannetonsComponent />
        </ScrollView>
        <StickyFooterComponent />
      </View>
    );
  }
};
