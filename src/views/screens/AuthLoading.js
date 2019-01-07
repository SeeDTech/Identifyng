import React, { Component } from 'react'
import {Spinner} from 'native-base'
import { Text, View, ActivityIndicator,AsyncStorage } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import AnimLogo from '../../components/buttons/AnimatedLogo';
import { BaseColor } from '../../styles/theme/color';
export class AuthLoading extends Component {


    loading = async()=>{
        const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(userToken ?'App':'Auth');
    }
    componentDidMount = () => {
       SplashScreen.hide()
      this.loading()
    }
    
  render() {
    return (
      <View style={{flex:1,alignItems:"center", justifyContent:'center',backgroundColor:BaseColor.dark,alignContent:'center'}}>
         <AnimLogo/>
      </View>
    )
  }
}

export default AuthLoading
