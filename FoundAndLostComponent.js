import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Image, WebView, Dimensions, Linking } from 'react-native';
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
    height: 420
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
    height: 180,
    width: Dimensions.get('window').width,
    borderRadius: 40
  }

});

/* Found and Lost Component */
/*<Text style={textFont.fontStyle}>track "Found and Lost"</Text>*/
/*<Text style={{color: 'blue'}}
onPress={() => Linking.openURL('http://google.com')}>
Google
</Text>*/

export default class FoundAndLost extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={nameFont.fontStyle}>{year}</Text>
        <Text style={textFont.fontStyle}>Evan co-produced and sang on the</Text>
        <Text style={{fontFamily: 'Hiragino Sans', fontWeight: 'bold', fontSize: 15, color: 'blue'}} onPress={() => Linking.openURL('https://soundcloud.com/vybsz/vybsz-found-and-lost-ft-evan-jacobs')}>track "Found and Lost"</Text>
        <Text style={textFont.fontStyle}>(ft. Evan Jacobs) by Vybsz</Text>
        <Text style={textFont.fontStyle}>and also co-produced and starred in</Text>
        <Text style={{fontFamily: 'Hiragino Sans', fontWeight: 'bold', fontSize: 15, color: 'blue'}} onPress={() => Linking.openURL('https://vimeo.com/134502457')}>the accompanying music video.</Text>
        <Text style={textFont.fontStyle}></Text>
        <Text style={textFont.fontStyle}></Text>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          style={styles.videoWeb}
          decelerationRate="normal"
          startInLoadingState={true}
          scalesPageToFit={true}
          source={{uri: 'https://player.vimeo.com/video/134502457'}} />
        <Text style={textFont.fontStyle}></Text>
        <Text style={textFont.fontStyle}></Text>
      </View>
    );
  }
};
