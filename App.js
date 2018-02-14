import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import FoundAndLostComponent from './FoundAndLostComponent.js';
import FleauxzanguiComponent from './FleauxzanguiComponent.js';

/* Introduction Component */

const fullName = 'Evan Jacobs';
const name = 'Evan';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{
          fontFamily: 'Hiragino Sans',
          fontWeight: 'bold',
          fontSize: 40,
          padding: 20}}>{fullName}</Text>
        <Text style={{
          fontFamily: 'Hiragino Sans',
          fontWeight: 'bold',
          fontSize: 15}}>is a music producer, singer, actor,</Text>
        <Text style={{
          fontFamily: 'Hiragino Sans',
          fontWeight: 'bold',
          fontSize: 15}}>and aspiring developer</Text>
        <Text style={{
          fontFamily: 'Hiragino Sans',
          fontWeight: 'bold',
          fontSize: 15}}>from Reno, Nevada.</Text>
        <Text style={{
          fontFamily: 'Hiragino Sans',
          fontWeight: 'bold',
          fontSize: 15}}>Scroll down to view some projects.</Text>
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

/* nameFont: {
  fontFamily: 'Hiragino Sans',
  fontWeight: 'bold',
  nameFontSize: 40
};

textFont: {
    fontFamily: 'Hiragino Sans',
    fontWeight: 'bold',
    nameFontSize: 15
}; */

//////////////////////////////////////////////

/* 2015 Component */
