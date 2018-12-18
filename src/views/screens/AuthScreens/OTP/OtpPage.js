
import React, { Component } from 'react'
import {Image, ImageBackground, View } from 'react-native'
import Logo, {MainIdLogoGreen} from '../../../../components/logo/Logo'
import phonenumber from '../PhoneNumber/styles'
import {Container,Text, Item,Content,Form,Label,Button, Input} from 'native-base'
import { BaseColor } from '../../../../styles/theme/color';
import ProgressBar from '../ProgressBar/ProgressBar';
import otp from './styles';
export class OtpPage extends Component {

state={
  
    firstField:'',
    secondField:'',
    thirdField:'',
    fourthField:'',
  
}
onSubmitOtp =()=>{
  const {firstField,secondField,thirdField,fourthField} =this.state;
if(!firstField||!secondField||!thirdField||!fourthField){
alert('OTP cannot be empty');
}else{
  const otp = firstField+secondField+thirdField+fourthField;
  alert('OTP '+otp+' was entered correctly');
}
}
  render() {
    return (
      <ImageBackground source={require('../../../../components/logo/images/whiteIdBackground.png')} style={{width:'100%', height:'100%',resizeMode: 'cover',}}>
      <Container style={phonenumber.container}>
      <Content >
        
        <View style={{position:'relative',top:25}}>
         <ProgressBar/>
        </View>
        <View style={phonenumber.logoSection}>
          <MainIdLogoGreen />
        </View>
          <Form
          style={otp.form}
          >
          <View style={otp.instruction}>
            <Text style={otp.instructionText}>Input the One Time Password(OTP) </Text>
            <Text style={otp.instructionText}>sent to +234345******23</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Item  style={otp.itemSection}>
            
            <Input secureTextEntry={true}  ref={(r) => this.input1 = r} onChange={() => this.input2._root.focus()}   id={1} maxLength={1}  keyboardType='phone-pad' onChangeText={(newText) => this.setState({ firstField: newText })} style={otp.itemInput} />
             </Item>
             <Item  style={otp.itemSection}>
            
            <Input secureTextEntry={true} ref={(r) => this.input2 = r} onChange={() => this.input3._root.focus()}  id={2} maxLength={1}  keyboardType='phone-pad' onChangeText={(newText) => this.setState({ secondField: newText })} style={otp.itemInput} />
             </Item>
             <Item  style={otp.itemSection}>
            
            <Input secureTextEntry={true}  ref={(r) => this.input3 = r} id={3}  onChange={() => this.input4._root.focus()}  maxLength={1}  keyboardType='phone-pad' onChangeText={(newText) => this.setState({ thirdField: newText })} style={otp.itemInput} />
             </Item>
             <Item  style={{width:40, marginEnd:10,borderColor:BaseColor.dark, marginTop:40, alignContent:"center",}}>
                         
            <Input secureTextEntry={true}  id={4} ref={(r) => this.input4 = r}    maxLength={1}  keyboardType='phone-pad' onChangeText={(newText) => this.setState({ fourthField: newText })} style={otp.itemInput} />
             </Item>
            
          </View>

            <View style={otp.buttonSection}>
            <Button style={otp.button} onPress={()=>this.onSubmitOtp()} bordered>
            <Text style={otp.buttonText}>VERIFY</Text>
          </Button>
            </View>
          </Form>
      </Content>
      </Container>
      </ImageBackground>
    )
  }
}

export default OtpPage

