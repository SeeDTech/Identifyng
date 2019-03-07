import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { BaseColor } from '../../../styles/theme/color';

class MyCards extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',backgroundColor:BaseColor.light, alignContent:'center',alignItems:'center'}}>
        <Text>My Cards</Text>
      </View>
    )
  }
}

export default MyCards
