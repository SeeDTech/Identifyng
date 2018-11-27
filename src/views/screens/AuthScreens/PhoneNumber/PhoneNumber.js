
import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import Logo from '../../../../components/logo/Logo'
import {NextButton} from '../../../../components/buttons/Butons'
import phonenumber from './styles'
export class PhoneNumber extends Component {
  render() {
    return (
      <View style={phonenumber.container}>
        <View style={phonenumber.logoSection}>
          <Logo />
        </View>
        <View style={phonenumber.inputSection}>
          <TextInput 
            placeholderTextColor='#333'
            placeholder="Phone Number"
            keyboardType="number-pad"
            style={phonenumber.inputs}></TextInput>
        </View>
        <View>
            <NextButton />
        </View>
      </View>
    )
  }
}

export default PhoneNumber


