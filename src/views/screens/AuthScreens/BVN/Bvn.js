import React, { Component } from 'react'
import { Text,TextInput, View } from 'react-native'
import Logo from '../../../../components/logo/Logo'
import {NextButton} from '../../../../components/buttons/Butons'
import FloatingLabelInput from '../../../../components/FloatingLabelInput'
import phonenumber from '../PhoneNumber/styles'

export class Bvn extends Component {
  constructor(){
    super()
    this.state={
     
    }
  }
  render() {
    return (
      <View style={phonenumber.container}>
        <View style={phonenumber.logoSection}>
          <Logo />
        </View>
        <View style={phonenumber.inputSection}>

          <FloatingLabelInput
            label="Enter BVN"
            keyboardType="number-pad"
          />
       
        </View>
        <View>
            <NextButton onPress={() => this.props.navigation.navigate('OTP')}/>
        </View>
      </View>
    )
  
  }
}

export default Bvn


