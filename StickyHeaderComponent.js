import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Linking } from 'react-native';

/* Variables */

const stickyHeader = StyleSheet.create({
  container: {
    marginTop: 20,
    fontFamily: 'Hiragino Sans',
    fontWeight: 'bold',
    fontSize: 40,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'ivory',
    backgroundColor: 'cornflowerblue',
    textAlign: 'center',
    height: 60,
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 2
  }
});

/* Sticky Header Component */

export default class StickyHeader extends React.Component {
  render() {
    return (
      <View stlye={stickyHeader.container}>

      </View>
    );
  }
}

export { stickyHeader };
