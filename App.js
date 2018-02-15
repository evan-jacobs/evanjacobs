import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import FoundAndLostComponent from './FoundAndLostComponent.js';
import FleauxzanguiComponent from './FleauxzanguiComponent.js';
import TheBannetonsComponent from './TheBannetonsComponent.js';

/* Variables */

const fullName = 'Evan Jacobs';
const name = 'Evan';
const nameFont = StyleSheet.create({
  fontStyle: {
    fontFamily: 'Hiragino Sans',
    fontWeight: 'bold',
    fontSize: 40,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'darkgrey'
  }
});
const textFont = StyleSheet.create({
  fontStyle: {
    fontFamily: 'Hiragino Sans',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white'
  }
});
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const evanJacobsImageStyle = StyleSheet.create({
  stretch: {
    width: 320,
    height: 320}
});

/* Introduction Component */

export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={textFont.fontStyle}></Text>
        <Text style={textFont.fontStyle}></Text>
        <Text style={nameFont.fontStyle}>{fullName}</Text>
        <Image
          style={evanJacobsImageStyle.stretch}
          source={require('./EvanJacobs.jpg')}/>
        <Text style={textFont.fontStyle}></Text>
        <Text style={textFont.fontStyle}></Text>
        <Text style={textFont.fontStyle}>Evan is a music producer, singer,</Text>
        <Text style={textFont.fontStyle}>actor, and aspiring developer</Text>
        <Text style={textFont.fontStyle}>from Reno, Nevada.</Text>
        <Text style={textFont.fontStyle}>Scroll down to view some projects.</Text>
        <Text style={textFont.fontStyle}></Text>
        <Text style={textFont.fontStyle}></Text>
        <FoundAndLostComponent></FoundAndLostComponent>
        <FleauxzanguiComponent></FleauxzanguiComponent>
        <TheBannetonsComponent></TheBannetonsComponent>
      </ScrollView>
    );
  }
}

export { nameFont, textFont };
