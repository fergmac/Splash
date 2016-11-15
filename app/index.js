import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Random from './scenes/Random';

export default class Splash extends Component {
  render() {
    return (
      <View>
        <Random />
      </View>
    );
  }
}