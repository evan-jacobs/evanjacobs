import React from 'react';
import { StyleSheet, View, Text, WebView, Dimensions, Linking } from 'react-native';
import { textFont, hyperLinkTextFont } from './TextConstants.js';

// Found And Lost Variables //

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    height: 420
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

// Found And Lost Description & Music Video Component //

export default class FoundAndLostComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={textFont.fontStyle}>Evan co-produced and sang on the track
          <Text style={hyperLinkTextFont.fontStyle}
                onPress={() => Linking.openURL('https://soundcloud.com/vybsz/vybsz-found-and-lost-ft-evan-jacobs')}> Found and Lost (ft. Evan Jacobs) by Vybsz </Text>
          <Text style={textFont.fontStyle}>and also co-produced and starred in </Text>
          <Text style={hyperLinkTextFont.fontStyle}
                onPress={() => Linking.openURL('https://vimeo.com/134502457')}>the accompanying music video.</Text>
        </Text>
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
