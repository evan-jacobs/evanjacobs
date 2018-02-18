import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { evanJacobsImageStyle } from './App.js';
import Swiper from 'react-native-swiper';

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
          <Image
            style={evanJacobsImageStyle.stretch}
            source={require('./EvanJacobs.jpg')}/>
        </View>
        <View style={styles.slide2}>
          <Image
            style={evanJacobsImageStyle.stretch}
            source={require('./EvanDriving.jpg')}/>
        </View>
        <View style={styles.slide3}>
          <Image
            style={evanJacobsImageStyle.stretch}
            source={require('./EvanFur.jpg')}/>
        </View>
        <View style={styles.slide4}>
          <Image
            style={evanJacobsImageStyle.stretch}
            source={require('./EvanVictory.jpg')}/>
        </View>
        <View style={styles.slide5}>
          <Image
            style={evanJacobsImageStyle.stretch}
            source={require('./EvanGreen.jpg')}/>
        </View>
      </Swiper>
    );
  }
}
