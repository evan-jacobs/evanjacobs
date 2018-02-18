import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Linking, TouchableHighlight } from 'react-native';
import { stickyFooter } from './StickyFooterComponent.js';
import { stickyHeader } from './StickyHeaderComponent.js';
import FoundAndLostComponent from './FoundAndLostComponent.js';
import FleauxzanguiComponent from './FleauxzanguiComponent.js';
import TheBannetonsComponent from './TheBannetonsComponent.js';
import SwiperComponent from './ImageSwiperComponent.js';

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
    color: 'darkgrey'
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
        <Text style={stickyHeader.container}>{fullName}</Text>
        <ScrollView contentContainerStyle={styles.container}>
          <SwiperComponent></SwiperComponent>
          <Text style={textFont.fontStyle}>Evan is a music producer, singer, actor, and aspiring developer from Reno, Nevada. Scroll down to view some of his projects. </Text>
          <FoundAndLostComponent></FoundAndLostComponent>
          <FleauxzanguiComponent></FleauxzanguiComponent>
          <TheBannetonsComponent></TheBannetonsComponent>
        </ScrollView>
        <View style={stickyFooter.container}>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.instagram.com/evanjacobs_/')}>
            <Image source={require('./instagramicon.png')} style={{height:40, width:40}} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.facebook.com/evanjacobs.fx')}>
            <Image source={require('./facebookicon.png')} style={{height:40, width:40}} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Linking.openURL('https://soundcloud.com/evanjacobsmusic')}>
            <Image source={require('./soundcloudicon.png')} style={{height:40, width:40}} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Linking.openURL('https://github.com/evan-jacobs')}>
            <Image source={require('./githubicon.png')} style={{height:40, width:40}} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export { nameFont, textFont, evanJacobsImageStyle };
