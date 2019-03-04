import React, { Component } from 'react'
import {Spinner} from 'native-base'
import { Text, View, ActivityIndicator,AsyncStorage } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import {connect} from 'react-redux'
import AnimLogo from '../../components/buttons/AnimatedLogo';
import { BaseColor } from '../../styles/theme/color';
export class AuthLoading extends Component {


    loading = ()=>{
      const {isLoggedIn}=this.props
    this.props.navigation.navigate(isLoggedIn ?'App':'Auth');
    }
    componentDidMount = () => {
       SplashScreen.hide()
     setTimeout(()=>{this.loading()},700) 
    }
    
  render() {
    return (
      <View style={{flex:1,alignItems:"center", justifyContent:'center',backgroundColor:BaseColor.dark,alignContent:'center'}}>
         <AnimLogo/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn:state.Auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(AuthLoading)
