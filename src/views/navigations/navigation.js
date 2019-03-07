import React, { Component } from 'react';
import {
    createSwitchNavigator,
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,
} from 'react-navigation';
import SlidingScreen from '../screens/Sliders/SlidingScreen';
import WelcomeScreen from '../screens/welcomeScreen/WelcomeScreen';
import SignUpRequirement from '../screens/AuthScreens/SignUp/SignupRequirements'
import AccountGeneration from '../screens/AuthScreens/AccountGeneration/AccountGeneration';
import Ionicon from '../../components/Icons/Ionicon';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import { TouchableOpacity, View,TextInput } from 'react-native'
import Search from '../screens/Search/Search';
import MyCards from '../screens/MyCards/MyCards';
import { BaseColor } from '../../styles/theme/color';
import AuthLoading from '../screens/AuthLoading';
import Dashboard from '../screens/Dashboard/Dashboard';
import Drawer from '../screens/Drawer/Drawer';
import AllForms from '../screens/AuthScreens/AllForms/AllForms'
import Styles from './styles'
import navigations from './styles';
import TransitionConfiguration from './TransitionConfiguration';
import ProfilePage from '../screens/ProfileScreens/ProfilePage';
import SearchBar from '../../components/SearchBar';



const searchBar =<SearchBar/>

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
        screen:SignUpRequirement,
        navigationOptions: {
            headerTransparent: {},
        }
    },
    Forms:{
        screen: AllForms,
        navigationOptions: {
            header: null
        }

    },
    Registration: {
        screen: AccountGeneration,
        navigationOptions: {
            headerTransparent: {},
        }
    },
   
},{
    transitionConfig: TransitionConfiguration,
});



const AppStacknavigator = createStackNavigator({

    
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
    
   
   
    ID: {
        screen: MyCards,
        navigationOptions: ({ navigation }) => ({
           
            tabBarIcon: ({tintColor})=> (
                <Ionicon name="card" color={tintColor}  size={27} />
            ),

        })
    },

    
}, {
    lazyLoad: true,
    backBehavior: 'none',
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


            },
        }),
    });

const AppStacknavigator = createStackNavigator({

    AppTabNavigator: {
        screen: AppTabNavigator,

        navigationOptions: ({ navigation }) => ({
            title: 'Dashboard',
            tabBarLabel: 'Browse',
            // headerRight: searchBar ,

            headerTitleStyle: {
                alignSelf: 'center',
                color: BaseColor.base,
                textAlign: 'center',
                justifyContent: 'center',
                fontFamily: "Ubuntu-Regular",
                
            },
            headerLeft:(<TouchableOpacity  onPress={() => navigation.toggleDrawer()}>
            <View  style={{ borderWidth: 1, width: 30, height: 30, backgroundColor: '#f4f4f4', borderRadius: 30, margin: 10, }}></View>
        </TouchableOpacity>)

                // <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
                //     <View style={{ paddingHorizontal: 10, color: BaseColor.grey }}>
                //         <Ionicon name="menu" size={27} />
                //     </View>
                // </TouchableOpacity>
           
        })
    }

},{
    transitionConfig: TransitionConfiguration,
})

const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppStacknavigator,
        navigationOptions: ({ navigation }) => ({
            drawerLabel: 'Dashboard',
            drawerIcon: (
                <Ionicon name='home' size={20} style={{color:BaseColor.light}} />
            ),
        })
    },
    ID: {
        screen: MyCards,
        navigationOptions: ({ navigation }) => ({
            drawerLabel: 'My ID',
            drawerIcon: (
                <Ionicon name="card" style={{color:BaseColor.light}}  size={20} />
            ),

        })
    },
    Profile:{
        screen:ProfilePage,
        navigationOptions: ({ navigation }) => ({
            
            drawerIcon: (
                <Ionicon name="book"style={{color:BaseColor.light}} size={20}  />
            ),
        })
    },
    Settings: {
        screen: SettingsScreen,
        title:'Settings',
        navigationOptions: ({ navigation }) => ({
            
            drawerIcon:(
                <Ionicon name="settings"style={{color:BaseColor.light}} size={20}  />
            ),

        })
    },

}, {
        contentOptions: {
            labelStyle: {
                fontFamily: 'HurmeGeometricSans1',
                color: BaseColor.light,
            },
        },
        drawerBackgroundColor: BaseColor.dark,
        contentComponent: Drawer,
    });
const Routes = createSwitchNavigator({
    AuthLoading: AuthLoading,
    Auth: AuthStackNavigator,
    App: AppDrawerNavigator,
})
export default Routes