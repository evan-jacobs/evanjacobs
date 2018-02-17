import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, WebView, Dimensions } from 'react-native';
import { nameFont, textFont } from './App.js';

/* Variables */

const year = '- 2017 -';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    height: 950,
    flexGrow: 1
  },

  headerBarRow: {
    flexDirection:'row',
    padding: 8,
  },

  videoWeb: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    height: 320,
    width: Dimensions.get('window').width,
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
        <Text style={textFont.fontStyle}>Songs by The Bannetons.</Text>
        <Text style={textFont.fontStyle}></Text>
        <Text style={textFont.fontStyle}></Text>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          style={styles.videoWeb}
          startInLoadingState={true}
          scalesPageToFit={true}
          source={{uri: 'https://open.spotify.com/embed/album/1NPTBBuAJkqgrcZC0Ps6KZ'}}
        />
      </View>
    );
  }
}
