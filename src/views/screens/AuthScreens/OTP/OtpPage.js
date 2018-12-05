
import React, { Component } from 'react'
import { Text,TextInput,Image, View } from 'react-native'
import Logo, {ImgLogo} from '../../../../components/logo/Logo'
import {NextButton} from '../../../../components/buttons/Butons'
import FloatingLabelInput from '../../../../components/FloatingLabelInput'
import phonenumber from '../PhoneNumber/styles'
import { BaseColor } from '../../../../styles/theme/color';

export class OtpPage extends Component {

state={
  otp:'',
}
  handleTextChange = (newText) => this.setState({ otp: newText });
  render() {
    return (
      <View style={phonenumber.container}>
        <View style={phonenumber.logoSection}>
          <ImgLogo />
        </View>
        <View style={{alignItems:'center',width:300,padding:10}}>
        
          <Text style={{fontWeight:'normal', textAlign:'center', fontFamily:'sans-serif-medium',fontSize:18,color:'#424242'}}>Please type the one time password (OTP) sent to  0903******5</Text>
        </View>
        <View style={phonenumber.inputSection}>
        <FloatingLabelInput
        value={this.state.otp}
        onChangeText={this.handleTextChange}
            label="OTP"
            keyboardType="numeric"
          />
        </View>
        <View style={{alignItems:'center',width:280,marginBottom:30}}>
          <Text style={{opacity:.5,textAlign:'center', fontFamily:'serif',fontSize:18,color:'#424242'}}>Resend OTP?</Text>
        </View>
        <View>
            <NextButton onPress={()=>alert("You Cant go further")} />
        </View>
      </View>
    )
  
  }
}

export default OtpPage

