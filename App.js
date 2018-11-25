/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import { createSwitchNavigator,
//   createStackNavigator,
//    createDrawerNavigator,
//    createBottomTabNavigator,
//   } from 'react-navigation';
import { StyleSheet,View} from 'react-native'
import WelcomeScreen from './src/views/screens/welcomeScreen/WelcomeScreen'
import Requirement from './src/views/screens/AuthScreens/signupRequirements/SignupRequirementsPage'


// export default createSwitchNavigator({
//   welcome: WelcomeScreen,
//   Requirement:Requirement
// });

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
