import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { BaseColor } from '../../../styles/theme/color';

export class Dashboard extends Component {
  render() {
    return (
      <View  style={{flex:1,justifyContent:'center',backgroundColor:BaseColor.light, alignContent:'center',alignItems:'center'}}>
        <Text> MY Dashboard </Text>
      </View>
    )
  }
}

export default Dashboard
