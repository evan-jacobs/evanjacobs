import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Image, WebView, Dimensions } from 'react-native';
import { nameFont, textFont } from './App.js';
/* Variables */

const year = '- 2015 -';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height: 600
  },

  headerBarRow: {
    flexDirection:'row',
    padding: 8,
  },

  videoWeb: {
    flex: 0,
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
    height: 320,
    width: Dimensions.get('window').width,
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
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          style={styles.videoWeb}
          decelerationRate="normal"
          startInLoadingState={true}
          scalesPageToFit={true}
          source={{uri: 'https://player.vimeo.com/video/134502457'}}
        />
        <Text style={textFont.fontStyle}></Text>
        <Text style={textFont.fontStyle}></Text>
      </View>
    );
  }
};