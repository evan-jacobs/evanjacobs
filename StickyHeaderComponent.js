import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// Variables //

const fullName = 'Evan Jacobs';
const stickyHeader = StyleSheet.create({
  container: {
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

// Sticky Header Component //

export default class StickyHeader extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={()=>{alert("He's A Bad Motherfucker")}}>
        <View stlye={stickyHeader.container}>
          <Text style={stickyHeader.container}>{fullName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};
