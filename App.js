import React from 'react';
import { View, ScrollView } from 'react-native';
import StickyHeaderComponent from './StickyHeaderComponent.js';
import SwiperComponent from './ImageSwiperComponent.js';
import IntroComponent from './IntroComponent.js';
import { Tabs } from './TabNavigator.js';
import StickyFooterComponent from './StickyFooterComponent.js';

// Main Application - Root Component //

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black', marginTop: 20}}>
        <StickyHeaderComponent />
        <ScrollView>
          <SwiperComponent />
          <IntroComponent />
          <Tabs />
        </ScrollView>
        <StickyFooterComponent />
      </View>
    );
  }
};
