import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Swiper from 'react-native-swiper';

// Image Swiper Variables //

const imageStyle = StyleSheet.create({
  stretch: {
    width: 320,
    height: 320,
    borderRadius: 20,
    backgroundColor: 'black'
  }
});
const swiperStyles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 320,
    marginTop: 20
  }
});

// Image Swiper Component //

export default class SwiperComponent extends Component {
  render(){
    return (
      <Swiper style={swiperStyles.wrapper} showsButtons={true}>
        <View>
          <TouchableHighlight onLongPress={()=>{alert("Sophisticated As Fuck")}}>
            <Image
              style={imageStyle.stretch}
              source={require('./EvanJacobs.jpg')}/>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight onLongPress={()=>{alert("Driven As Fuck")}}>
            <Image
              style={imageStyle.stretch}
              source={require('./EvanDriving.jpg')}/>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight onLongPress={()=>{alert("Furry As Fuck")}}>
            <Image
              style={imageStyle.stretch}
              source={require('./EvanFur.jpg')}/>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight onLongPress={()=>{alert("Victorious As Fuck")}}>
            <Image
              style={imageStyle.stretch}
              source={require('./EvanVictory.jpg')}/>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight onLongPress={()=>{alert("Musical As Fuck")}}>
            <Image
              style={imageStyle.stretch}
              source={require('./EvanGuitar.jpg')}/>
          </TouchableHighlight>
        </View>
        <View>
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
