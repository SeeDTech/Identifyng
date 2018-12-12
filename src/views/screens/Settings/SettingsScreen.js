import React, { Component } from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import { Button } from '../../../components/buttons/Butons';

class SettingsScreen extends Component {
    signOut = async()=>{

        AsyncStorage.clear(),
        this.props.navigation.navigate('AuthLoading')
          
      }
  render() {
    return (
      <View  style={{alignContent:'center', alignItems:"center", justifyContent:'center', flex:1 }}>
        <Button onPress={this.signOut} title="LOGOUT"/>
      </View>
    )
  }
}

export default SettingsScreen
