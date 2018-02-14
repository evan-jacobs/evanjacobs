import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';

const year = '2016:';
const fleauxzanguiImageStyle = StyleSheet.create({
  stretch: {
    width: 320,
    height: 320
  }
});  

export default class FleauxzanguiComponent extends React.Component {
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
          fontSize: 15}}>track "Fleauxzangui" (ft. Evan Jacobs)</Text>
        <Text style={{
          fontFamily: 'Hiragino Sans',
          fontWeight: 'bold',
          fontSize: 15}}>by Big Chocolate, which has gone on</Text>
        <Text style={{
          fontFamily: 'Hiragino Sans',
          fontWeight: 'bold',
          fontSize: 15}}>to be played extensively in various</Text>
        <Text style={{
          fontFamily: 'Hiragino Sans',
          fontWeight: 'bold',
          fontSize: 15}}>venues throughout the United States.</Text>
        <Image
          style={fleauxzanguiImageStyle.stretch}
          source={require('./botb-inverted_preview.jpeg')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  }
});
