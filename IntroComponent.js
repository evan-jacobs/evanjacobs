import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { textFont } from './TextConstants.js';

// Intro Component //

export default class IntroComponent extends Component {
  render() {
    return (
      <View style={{paddingTop:10, paddingBottom: 23}}>
        <Text style={textFont.fontStyle}>Evan is a music producer,
        singer, actor, and aspiring developer from Reno, Nevada.
        Scroll down to view a few of his projects. </Text>
      </View>
    );
  }
};
