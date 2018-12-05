
import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import Logo from '../../../../components/logo/Logo'
import { NextButton } from '../../../../components/buttons/Butons'
import { Phone } from '../../../../components/Icons/SvgIcons/Icons'
import phonenumber from './styles'
import FloatingLabelInput from '../../../../components/FloatingLabelInput'
 class PhoneNumber extends Component {

  state={
    PhoneNumber:'',
  }
    handleTextChange = (newText) => this.setState({ PhoneNumber: newText });
    
  render() {
    return (
      <View style={phonenumber.container}>
        <View style={phonenumber.logoSection}>
          <Logo />
        </View>
        <View style={phonenumber.inputSection}>
          <View style={phonenumber.icon}>
            <Phone />
          </View>
          <FloatingLabelInput
          onChangeText={(newText) => this.setState({ PhoneNumber: newText })}
          value={this.state.value}
          id="PhoneNumber"
            label="Phone Number"
            keyboardType="numeric"
          />
          {/* <TextInput 
            placeholderTextColor='#9e9e9e'
            placeholder="Phone Number"
            keyboardType="number-pad"
            style={phonenumber.inputs}></TextInput> */}
        </View>
        <View style={phonenumber.btnSection}>
          <NextButton onPress={() => this.props.navigation.navigate('BVN')} />
        </View>
      </View>
    )
  }
}

export default PhoneNumber


