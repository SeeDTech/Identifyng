import React, { Component } from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import { Btn } from '../../../components/buttons/Butons';
import { BaseColor } from '../../../styles/theme/color';

class SettingsScreen extends Component {
    signOut = async()=>{

        AsyncStorage.clear(),
        this.props.navigation.navigate('AuthLoading')
          
      }
  render() {
    return (
      <View  style={{alignContent:'center',backgroundColor:BaseColor.light, alignItems:"center", justifyContent:'center', flex:1 }}>
        <Btn onPress={this.signOut} title="LOGOUT"/>
      </View>
    )
  }
}

export default SettingsScreen
