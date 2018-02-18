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
    height: 60
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
