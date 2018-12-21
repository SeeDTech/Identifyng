import React, { Component } from 'react';
import {
    createSwitchNavigator,
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,
} from 'react-navigation';
import SlidingScreen from '../screens/Sliders/SlidingScreen';
import WelcomeScreen from '../screens/welcomeScreen/WelcomeScreen';
import SignupRequirementsPage from '../screens/AuthScreens/signupRequirements/SignupRequirementsPage';
import PhoneNumber from '../screens/AuthScreens/PhoneNumber/PhoneNumber';
import Bvn from '../screens/AuthScreens/BVN/Bvn';
import OtpPage from '../screens/AuthScreens/OTP/OtpPage';
import AccountGeneration from '../screens/AuthScreens/AccountGeneration/AccountGeneration';
import Ionicon from '../../components/Icons/Ionicon';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import { TouchableOpacity, View } from 'react-native'
import Search from '../screens/Search/Search';
import MyCards from '../screens/MyCards/MyCards';
import { BaseColor } from '../../styles/theme/color';
import AuthLoading from '../screens/AuthLoading';
import Dashboard from '../screens/Dashboard/Dashboard';
import Drawer from '../screens/Drawer/Drawer';
import Styles from './styles';
import navigations from './styles';



const AuthStackNavigator = createStackNavigator({
    SlideScreen: {
        screen: SlidingScreen,
        navigationOptions: {
            header: null
        }
    },
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
            header: null
        }
    },
    Requirement: {
        screen: SignupRequirementsPage,
        navigationOptions: {

            headerTransparent: {},
        }
    },
    PhoneNumber: {
        screen: PhoneNumber,
        navigationOptions: {

            headerTransparent: {},
        }
    },
    BVN: {
        screen: Bvn,
        navigationOptions: {

            headerTransparent: {},

        },
    },
    OTP: {
        screen: OtpPage,
        navigationOptions: {
            headerTransparent: {},
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
    },
    Registration: {
        screen: AccountGeneration,
        navigationOptions: {
            headerTransparent: {},
        }
    }



});

const AppTabNavigator = createBottomTabNavigator({

    Dashboard: {
        screen: Dashboard,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
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
    Settings: {
        screen: SettingsScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Settings',
            tabBarIcon: ({ tintColor }) => (
                <Ionicon name="settings" color={tintColor} size={27} c />
            ),
            // tabBarOptions: {
            //   activeTintColor: BaseColor.light,
            //   labelStyle: {
            //     fontSize: 14,
            //   }
            // }

        })
    },
    Search: {
        screen: Search,
        navigationOptions: ({ navigation }) => ({
            title: 'Search',
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
    ID: {
        screen: MyCards,
        navigationOptions: ({ navigation }) => ({
            title: 'My Cards',
            tabBarIcon: ({ tintColor }) => (
                <Ionicon name="card" color={tintColor} size={27} />
            ),
            // tabBarOptions: {
            //   activeTintColor: BaseColor.light,
            //   labelStyle: {
            //     fontSize: 14,
            //   }
            // }
        })
    },
}, {
        navigationOptions: ({ navigation }) => ({
            tabBarOptions: {
                activeTintColor: BaseColor.light,
                inactiveTintColor: '#69f0ae',
                style: {
                    backgroundColor: BaseColor.base,
                    borderTopColor: BaseColor.light,
                    borderTopWidth: 2,
                },
                showLabel: false,
                animationEnabled: true,


            }
        })
    });







const AppStacknavigator = createStackNavigator({

    AppTabNavigator: {
        screen: AppTabNavigator,

        navigationOptions: ({ navigation }) => ({
            
            tabBarLabel: 'Browse',
            headerRight: (
                <View style={{ borderWidth: 1, width: 40, height: 40, backgroundColor: '#f4f4f4', borderRadius: 40, margin: 10, }}></View>
            ),

            headerTitleStyle: {
                alignSelf: 'center',
                color: BaseColor.base,
                textAlign: 'center',
                justifyContent: 'center',
                fontFamily: "Ubuntu-Regular",
                width: '90%',
            },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
                    <View style={{ paddingHorizontal: 10, color: BaseColor.grey }}>
                        <Ionicon name="menu" size={27} />
                    </View>
                </TouchableOpacity>
            )
        })
    }
})

const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen :AppStacknavigator,
        navigationOptions: ({ navigation }) => ({
            
            drawerIcon:(
                <Ionicon name='home' size={20} style={{ color: BaseColor.dark}} />
            ),
        })
    }

}, {
    contentOptions: {
        labelStyle: {
          fontFamily: 'HurmeGeometricSans1',
          color: BaseColor.dark,
        },
      },
        drawerBackgroundColor: BaseColor.dark,
        contentComponent: Drawer,
    });
const Routes = createSwitchNavigator({
    AuthLoading: AuthLoading,
    Auth: AuthStackNavigator,
    App: AppDrawerNavigator
})
export default Routes