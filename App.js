/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import WelcomeScreen from './src/views/screens/WelcomeScreen'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <WelcomeScreen/>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
});
