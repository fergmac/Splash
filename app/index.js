import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router } from './navigation/routes';
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

export default class Splash extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('navigationLayout')} />
      </NavigationProvider>
    );
  }
}