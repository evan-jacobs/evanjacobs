import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import FoundAndLostComponent from './FoundAndLostComponent.js';
import FleauxzanguiComponent from './FleauxzanguiComponent.js';

/* Variables */

const fullName = 'Evan Jacobs';
const name = 'Evan';
const nameFont = StyleSheet.create({
  fontStyle: {
    fontFamily: 'Hiragino Sans',
    fontWeight: 'bold',
    fontSize: 40,
    padding: 20
  }
});
const textFont = StyleSheet.create({
  fontStyle: {
    fontFamily: 'Hiragino Sans',
    fontWeight: 'bold',
    fontSize: 15
  }
});

/* Introduction Component */

export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={nameFont.fontStyle}>{fullName}</Text>
        <Text style={textFont.fontStyle}>is a music producer, singer, actor,</Text>
        <Text style={textFont.fontStyle}>and aspiring developer</Text>
        <Text style={textFont.fontStyle}>from Reno, Nevada.</Text>
        <Text style={textFont.fontStyle}>Scroll down to view some projects.</Text>
        <FoundAndLostComponent></FoundAndLostComponent>
        <FleauxzanguiComponent></FleauxzanguiComponent>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export { nameFont, textFont };
