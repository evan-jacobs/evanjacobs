import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { evanJacobsImageStyle } from './App.js';
import Swiper from 'react-native-swiper';
import Lightbox from 'react-native-lightbox';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 320,
    marginTop: 20
  },
  slide1: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide2: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide3: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide4: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide5: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stretch: {
    width: 320,
    height: 320,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class SwiperComponent extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <TouchableHighlight onLongPress={()=>{alert("Sophisticated As Fuck")}}>
            <Image
              style={evanJacobsImageStyle.stretch}
              source={require('./EvanJacobs.jpg')}/>
          </TouchableHighlight>
        </View>
        <View style={styles.slide2}>
          <TouchableHighlight onLongPress={()=>{alert("Driven As Fuck")}}>
            <Image
              style={evanJacobsImageStyle.stretch}
              source={require('./EvanDriving.jpg')}/>
          </TouchableHighlight>
        </View>
        <View style={styles.slide3}>
          <TouchableHighlight onLongPress={()=>{alert("Furry As Fuck")}}>
            <Image
              style={evanJacobsImageStyle.stretch}
              source={require('./EvanFur.jpg')}/>
          </TouchableHighlight>
        </View>
        <View style={styles.slide4}>
          <TouchableHighlight onLongPress={()=>{alert("Victorious As Fuck")}}>
            <Image
              style={evanJacobsImageStyle.stretch}
              source={require('./EvanVictory.jpg')}/>
          </TouchableHighlight>
        </View>
        <View style={styles.slide5}>
          <TouchableHighlight onLongPress={()=>{alert("Musical As Fuck")}}>
            <Image
              style={evanJacobsImageStyle.stretch}
              source={require('./EvanGuitar.jpg')}/>
          </TouchableHighlight>
        </View>
        <View style={styles.slide6}>
          <TouchableHighlight onLongPress={()=>{alert("Mysterious As Fuck")}}>
            <Image
              style={evanJacobsImageStyle.stretch}
              source={require('./EvanGreen.jpg')}/>
          </TouchableHighlight>
        </View>
      </Swiper>
    );
  }
}
