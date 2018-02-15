import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { nameFont, textFont } from './App.js';

/* Variables */

const year = '- 2017 -';
const theBannetonsImageStyle = StyleSheet.create({
  stretch: {
    width: 320,
    height: 320
  }
});
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  }
});

/* The Bannetons Component */

export default class TheBannetonsComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={nameFont.fontStyle}>{year}</Text>
        <Text style={textFont.fontStyle}>Evan produced the album</Text>
        <Text style={textFont.fontStyle}>Fire Hydrant Hissing Cat Repeater</Text>
        <Text style={textFont.fontStyle}>Songs by The Bannetons</Text>
        <Text style={textFont.fontStyle}></Text>
        <Text style={textFont.fontStyle}></Text>
        <Image
          style={theBannetonsImageStyle.stretch}
          source={require('./TheBannetons.jpg')}/>
      </View>
    );
  }
}
