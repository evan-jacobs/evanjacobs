import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Image } from 'react-native';
import { nameFont, textFont } from './App.js';
/* Variables */

const year = '- 2015 -';
const foundAndLostImageStyle = StyleSheet.create({
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

/* Found and Lost Component */

export default class FoundAndLost extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={nameFont.fontStyle}>{year}</Text>
        <Text style={textFont.fontStyle}>Evan co-produced and sang on the</Text>
        <Text style={textFont.fontStyle}>track "Found and Lost"</Text>
        <Text style={textFont.fontStyle}>(ft. Evan Jacobs) by Vybsz</Text>
        <Text style={textFont.fontStyle}>and also co-produced and starred in</Text>
        <Text style={textFont.fontStyle}>the accompanying music video.</Text>
        <Text style={textFont.fontStyle}></Text>
        <Text style={textFont.fontStyle}></Text>
        <Image
          style={foundAndLostImageStyle.stretch}
          source={require('./FoundAndLost.jpg')}/>
        <Text style={textFont.fontStyle}></Text>
        <Text style={textFont.fontStyle}></Text>
      </View>
    );
  }
};
