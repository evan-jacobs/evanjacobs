import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Linking, TouchableHighlight, TouchableOpacity } from 'react-native';
import { stickyHeader } from './StickyHeaderComponent.js';
import SwiperComponent from './ImageSwiperComponent.js';
import FoundAndLostComponent from './FoundAndLostComponent.js';
import FleauxzanguiComponent from './FleauxzanguiComponent.js';
import TheBannetonsComponent from './TheBannetonsComponent.js';
import StickyFooterComponent from './StickyFooterComponent.js';
import { stickyFooter } from './StickyFooterComponent.js';

/* Variables */

const fullName = 'Evan Jacobs';
const name = 'Evan';
const nameFont = StyleSheet.create({
  fontStyle: {
    fontFamily: 'Hiragino Sans',
    fontWeight: 'bold',
    fontSize: 40,
    padding: 10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'darkgrey',

  }
});
const textFont = StyleSheet.create({
  fontStyle: {
    fontFamily: 'Hiragino Sans',
    fontWeight: 'bold',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    padding: 1
  }
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});
const evanJacobsImageStyle = StyleSheet.create({
  stretch: {
    width: 320,
    height: 320,
    borderRadius: 20
  }
});

/* Introduction Component */

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={()=>{alert("He's A Bad Motherfucker")}}>
          <Text style={stickyHeader.container}>{fullName}</Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.container}>
          <SwiperComponent></SwiperComponent>
          <Text style={textFont.fontStyle}>Evan is a music producer, singer, actor, and aspiring developer from Reno, Nevada. Scroll down to view a few of his projects. </Text>
          <FoundAndLostComponent></FoundAndLostComponent>
          <FleauxzanguiComponent></FleauxzanguiComponent>
          <TheBannetonsComponent></TheBannetonsComponent>
        </ScrollView>
        <StickyFooterComponent></StickyFooterComponent>
      </View>
    );
  }
}

export { nameFont, textFont, evanJacobsImageStyle };
