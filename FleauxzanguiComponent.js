import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { nameFont, textFont } from './App.js';

/* Variables */

const year = '2016:';
const fleauxzanguiImageStyle = StyleSheet.create({
  stretch: {
    width: 320,
    height: 320
  }
});

/* Fleauxzangui Component */

export default class FleauxzanguiComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={nameFont.fontStyle}>{year}</Text>
        <Text style={textFont.fontStyle}>Evan co-produced and sang on the</Text>
        <Text style={textFont.fontStyle}>track "Fleauxzangui" (ft. Evan Jacobs)</Text>
        <Text style={textFont.fontStyle}>by Big Chocolate, which has gone on</Text>
        <Text style={textFont.fontStyle}>to be played extensively in various</Text>
        <Text style={textFont.fontStyle}>venues throughout the United States.</Text>
        <Image
          style={fleauxzanguiImageStyle.stretch}
          source={require('./botb-inverted_preview.jpeg')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  }
});
