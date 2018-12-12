import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { MainIdLogoGreen } from '../../../components/logo/Logo';
import { Button, TransparentButton } from '../../../components/buttons/Butons';


 class SlidingScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor:'#fff', alignContent:"center",justifyContent:'space-around', flex:1}}>
      <View style={{alignContent:"center", alignItems:"center"}}>
          <MainIdLogoGreen/>
      </View>
      <View style={{alignContent:"center", alignItems:"center"}}>
        <Text> Sliding Screen </Text>
      </View>
      <View style={{alignContent:"center",justifyContent:'space-around', flex:0}}>
          <Button onPress={()=>{this.props.navigation.navigate('Welcome')}} title="LOGIN"/>
          <TransparentButton onPress={()=>this.props.navigation.navigate('Requirement')} title="SIGN UP" />
      </View>
      </View>
    )
  }
}


export default SlidingScreen
