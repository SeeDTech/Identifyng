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
  import PhoneNumber from './src/views/screens/AuthScreens/PhoneNumber/PhoneNumber'
  import Bvn from './src/views/screens/AuthScreens/BVN/Bvn'
import OtpPage from './src/views/screens/AuthScreens/OTP/OtpPage';
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
      },
    PhoneNumber:{
      screen:PhoneNumber,
      navigationOptions:{
      
        headerTransparent:{},
           }
    },
    BVN:{
      screen:Bvn,
      navigationOptions:{
      
        headerTransparent:{},
           }
    },
    OTP:{
      screen:OtpPage,
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
