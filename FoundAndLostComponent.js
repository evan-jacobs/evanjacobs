import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';

const year = '2015:';
const foundAndLostImageStyle = StyleSheet.create({
  stretch: {
    width: 320,
    height: 320
  }
});

export default class FoundAndLost extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{
          fontFamily: 'Hiragino Sans',
          fontWeight: 'bold',
          fontSize: 40,
          padding: 20}}>{year}</Text>
        <Text style={{
          fontFamily: 'Hiragino Sans',
          fontWeight: 'bold',
          fontSize: 15}}>Evan co-produced and sang on the</Text>
        <Text style={{
          fontFamily: 'Hiragino Sans',
          fontWeight: 'bold',
          fontSize: 15}}>track "Found and Lost"</Text>
        <Text style={{
          fontFamily: 'Hiragino Sans',
          fontWeight: 'bold',
          fontSize: 15}}>(ft. Evan Jacobs) by Vybsz</Text>
        <Text style={{
          fontFamily: 'Hiragino Sans',
          fontWeight: 'bold',
          fontSize: 15}}>and also co-produced and starred in</Text>
        <Text style={{
          fontFamily: 'Hiragino Sans',
          fontWeight: 'bold',
          fontSize: 15}}>the accompanying music video.</Text>
        <Image
          style={foundAndLostImageStyle.stretch}
          source={require('./found-and-lost-music-video-shoot-day-1.png')}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  }
});
