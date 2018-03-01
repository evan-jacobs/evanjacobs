import React from 'react';
import { StyleSheet, View, Image, Linking, TouchableOpacity } from 'react-native';

// Sticky Footer Variables //

const stickyFooter = StyleSheet.create({
  container: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'flex-end',
    justifyContent: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'cornflowerblue'
  }
});
const iconStyle = StyleSheet.create({
  style: {
    height:40,
    width:40,
    bottom: 2
  }
});

// Sticky Footer Component //

export default class StickyFooterComponent extends React.Component {
  render() {
    return (
      <View style={stickyFooter.container}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/evanjacobs_/')}>
          <Image source={require('./instagramicon.png')} style={iconStyle.style}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/evanjacobs.fx')}>
          <Image source={require('./facebookicon.png')} style={iconStyle.style}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://soundcloud.com/evanjacobsmusic')}>
          <Image source={require('./soundcloudicon.png')} style={iconStyle.style}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/evan-jacobs')}>
          <Image source={require('./githubicon.png')} style={iconStyle.style}/>
        </TouchableOpacity>
      </View>
    );
  }
};
