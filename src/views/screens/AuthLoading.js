import React, { Component } from 'react'
import {Spinner} from 'native-base'
import { Text, View, ActivityIndicator,AsyncStorage } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
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
      <View style={{flex:1, justifyContent:'center',alignContent:'center'}}>
          <Spinner color="green" />
      </View>
    )
  }
}

export default AuthLoading
