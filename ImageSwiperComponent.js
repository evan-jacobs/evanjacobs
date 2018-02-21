import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Swiper from 'react-native-swiper';

// Variables //

const imageStyle = StyleSheet.create({
  stretch: {
    width: 320,
    height: 320,
    borderRadius: 20
  }
});
const swiperStyles = StyleSheet.create({
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

// Image Swiper Component //

export default class SwiperComponent extends Component {
  render(){
    return (
      <Swiper style={swiperStyles.wrapper} showsButtons={true}>
        <View style={swiperStyles.slide1}>
          <TouchableHighlight onLongPress={()=>{alert("Sophisticated As Fuck")}}>
            <Image
              style={imageStyle.stretch}
              source={require('./EvanJacobs.jpg')}/>
          </TouchableHighlight>
        </View>
        <View style={swiperStyles.slide2}>
          <TouchableHighlight onLongPress={()=>{alert("Driven As Fuck")}}>
            <Image
              style={imageStyle.stretch}
              source={require('./EvanDriving.jpg')}/>
          </TouchableHighlight>
        </View>
        <View style={swiperStyles.slide3}>
          <TouchableHighlight onLongPress={()=>{alert("Furry As Fuck")}}>
            <Image
              style={imageStyle.stretch}
              source={require('./EvanFur.jpg')}/>
          </TouchableHighlight>
        </View>
        <View style={swiperStyles.slide4}>
          <TouchableHighlight onLongPress={()=>{alert("Victorious As Fuck")}}>
            <Image
              style={imageStyle.stretch}
              source={require('./EvanVictory.jpg')}/>
          </TouchableHighlight>
        </View>
        <View style={swiperStyles.slide5}>
          <TouchableHighlight onLongPress={()=>{alert("Musical As Fuck")}}>
            <Image
              style={imageStyle.stretch}
              source={require('./EvanGuitar.jpg')}/>
          </TouchableHighlight>
        </View>
        <View style={swiperStyles.slide6}>
          <TouchableHighlight onLongPress={()=>{alert("Mysterious As Fuck")}}>
            <Image
              style={imageStyle.stretch}
              source={require('./EvanGreen.jpg')}/>
          </TouchableHighlight>
        </View>
      </Swiper>
    );
  }
};
