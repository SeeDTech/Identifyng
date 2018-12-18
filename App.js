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
import { TouchableOpacity,Text,View } from 'react-native'
import SlidingScreen from './src/views/screens/Sliders/SlidingScreen';
import Dashboard from './src/views/screens/Dashboard/Dashboard';
import Search from './src/views/screens/Search/Search';
import MyCards from './src/views/screens/MyCards/MyCards';
import Ionicon from './src/components/Icons/Ionicon';
import SettingsScreen from './src/views/screens/Settings/SettingsScreen';
import AuthLoading from './src/views/screens/AuthLoading';
import { BaseColor } from './src/styles/theme/color';


const AuthStackNavigator = createStackNavigator({
  SlideScreen:{
    screen:SlidingScreen,
    navigationOptions:{
      header:null
    }
  },
  Welcome:{
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
      
       },
    },
    OTP:{
      screen:OtpPage,
      navigationOptions:{
        headerTransparent:{},
      //  headerStyle:{
      //   backgroundColor:'#fff',
      //  },
      // title:'IDentifyng',
      // headerTitleStyle: {
      //   alignSelf: 'center',
      //   textAlign: "center",
      //   marginRight:70,
      //   justifyContent: 'center',
      //   flex: 1,
      //   color:'#097a34',
      //   fontWeight: 'bold',
      //   textAlignVertical: 'center'
      //   }
      },
           }
    

  
});

const AppTabNavigator = createBottomTabNavigator({
  
  Dashboard:{
    screen:Dashboard,
    navigationOptions:({navigation})=>({
      title:'Home',
      tabBarIcon: ({ tintColor }) => (
        <Ionicon name="home" size={27} color={tintColor} />
      ),
      // tabBarOptions: {
      //   activeTintColor: BaseColor.light,
      //   labelStyle: {
      //     fontSize: 14,
      //   }
      // }
    })
  },
  Settings:{
    screen:SettingsScreen,
    navigationOptions:({navigation})=>({
      title:'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Ionicon name="settings" color={tintColor} size={27} c/>
      ),
      // tabBarOptions: {
      //   activeTintColor: BaseColor.light,
      //   labelStyle: {
      //     fontSize: 14,
      //   }
      // }
      
    })
  },
  Search:{
    screen:Search,
    navigationOptions:({navigation})=>({
      title:'Search',
      tabBarIcon: ({ tintColor }) => (
        <Ionicon name="search" color={tintColor} size={27} />

      ),
      // tabBarOptions: {
      //   activeTintColor: BaseColor.light,
      //   labelStyle: {
      //     fontSize: 14,
      //   }
      // }
    })
  },
  ID:{
    screen:MyCards,
    navigationOptions:({navigation})=>({
      title:'My Cards',
      tabBarIcon: ({ tintColor }) => (
        <Ionicon name="card" color={tintColor} size={27}/>
      ),
      // tabBarOptions: {
      //   activeTintColor: BaseColor.light,
      //   labelStyle: {
      //     fontSize: 14,
      //   }
      // }
    })
  },
},{
  navigationOptions:({navigation})=>({
    tabBarOptions : {
      activeTintColor: BaseColor.light,
      inactiveTintColor:'#69f0ae',
      style: {
        backgroundColor: BaseColor.base,
      borderTopColor:BaseColor.light,
borderTopWidth:2,
      },
      showLabel: false,

    }
  })
});







const AppStacknavigator = createStackNavigator({

  AppTabNavigator:{
    screen:AppTabNavigator,

    navigationOptions:({navigation})=>({
      tabBarLabel: 'Browse',
      headerLeft:(
<View style={{borderWidth:1, width:40,height:40,backgroundColor:'#f4f4f4',borderRadius:40, marginLeft:10,}}></View>
      ),
      
      headerTitleStyle:{
        alignSelf:'center',
        color:BaseColor.base,
        textAlign: 'center',
        justifyContent:'center',
        fontFamily: "Ubuntu-Regular",
        width: '90%',
        },
      headerRight:(
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()} >
        <View style={{paddingHorizontal:10, color:BaseColor.grey}}>
        <Ionicon name="menu" size={27} />
        </View>
        </TouchableOpacity>
      )
    })
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Home:AppStacknavigator
})
export default createSwitchNavigator({
  AuthLoading:AuthLoading,
  Auth:AuthStackNavigator,
  App:AppDrawerNavigator
})
