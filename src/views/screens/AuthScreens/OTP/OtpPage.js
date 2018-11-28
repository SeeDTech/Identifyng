
import React, { Component } from 'react'
import { Text,TextInput, View } from 'react-native'
import Logo from '../../../../components/logo/Logo'
import {NextButton} from '../../../../components/buttons/Butons'
import FloatingLabelInput from '../../../../components/FloatingLabelInput'
import phonenumber from '../PhoneNumber/styles'
import { BaseColor } from '../../../../styles/theme/color';

export class OtpPage extends Component {

state={
  value:null,
}
  handleTextChange = (newText) => this.setState({ value: newText });
  render() {
    return (
      <View style={phonenumber.container}>
        <View style={phonenumber.logoSection}>
          <Logo />
        </View>
        <View style={{alignItems:'center',width:280,padding:10}}>
          <Text style={{textAlign:'center', fontFamily:'serif',fontSize:18,color:BaseColor.dark}}>Please type the one time password (OTP) that was sent to you on 0903******5</Text>
        </View>
        <View style={phonenumber.inputSection}>
        <FloatingLabelInput
        value={this.state.value}
        onChangeText={this.handleTextChange}
            label="OTP"
            keyboardType="number-pad"
          />
        </View>
        <View style={{alignItems:'center',width:280,marginBottom:30}}>
          <Text style={{opacity:.5,textAlign:'center', fontFamily:'serif',fontSize:18,color:'#424242'}}>Resend OTP?</Text>
        </View>
        <View>
            <NextButton />
        </View>
      </View>
    )
  
  }
}

export default OtpPage

