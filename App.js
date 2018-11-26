/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createSwitchNavigator,
  createStackNavigator,
   createDrawerNavigator,
   createBottomTabNavigator,
  } from 'react-navigation';
  import SignupRequirementsPage from './src/views/screens/AuthScreens/signupRequirements/SignupRequirementsPage'
  import WelcomeScreen from './src/views/screens/welcomeScreen/WelcomeScreen'
  //import { View, StyleSheet } from 'react-native'

export default createStackNavigator({
  welcome:{
   screen:WelcomeScreen,
   navigationOptions:{
     header:null
   }
  },
  Requirement:{
    screen: SignupRequirementsPage,
    navigationOptions:{
      
    headerTransparent:{},
       } 
      }
  
});

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//       <WelcomeScreen/>    
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',

//   }
// });
