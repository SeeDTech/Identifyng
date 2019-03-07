
import React, { Component } from 'react'
import { Image, ImageBackground, View } from 'react-native'
import Logo, { MainIdLogoGreen } from '../../../../components/logo/Logo'
import phonenumber from '../PhoneNumber/styles'
import { Container, Text, Item, Content, Form, Label, Button, Input } from 'native-base'
import { BaseColor } from '../../../../styles/theme/color';
import ProgressBar from '../ProgressBar/ProgressBar';
import otp from './styles';
export class OtpPage extends Component {
  constructor(props) {
    super(props)
    this.inputs = {};
  }
  state = {
    firstField: '',
    secondField: '',
    thirdField: '',
    fourthField: '',

  }
  onChanghandler = (id) => {
    this.inputs[id]._root.focus();
  }

  onSubmitOtp = () => {
    const { firstField, secondField, thirdField, fourthField } = this.state;
    if (!firstField || !secondField || !thirdField || !fourthField) {
      alert('OTP cannot be empty');
    } else {
      const otp = firstField + secondField + thirdField + fourthField;
      alert('OTP ' + otp + ' was entered correctly');
      this.props.navigation.navigate('Registration');
    }
  }
  render() {
    return (
      <ImageBackground source={require('../../../../components/logo/images/whiteIdBackground.png')} style={{ width: '100%', height: '100%', resizeMode: 'cover', }}>
        <Container style={phonenumber.container}>
          <Content >

            <View style={{ position: 'relative', top: 25 }}>
              <ProgressBar />
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
              <View style={{ flexDirection: 'row' }}>

                <Item style={otp.itemSection}>

                  <Input
                    secureTextEntry={true}
                    ref={(input) => this.inputs[1] = input}
                    onChange={() => this.onChanghandler(2)}
                    id={1}
                    maxLength={1}
                    keyboardType='phone-pad'
                    onChangeText={(newText) => this.setState({ firstField: newText })}
                    style={otp.itemInput}
                  />
                </Item>
                <Item style={otp.itemSection}>

                  <Input
                    secureTextEntry={true}
                    ref={(input) => this.inputs[2] = input}
                    onChange={() => this.onChanghandler(3)} id={2}
                    maxLength={1}
                    keyboardType='phone-pad'
                    onChangeText={(newText) => this.setState({ secondField: newText })}
                    style={otp.itemInput}
                  />
                </Item>
                <Item style={otp.itemSection}>

                  <Input secureTextEntry={true}
                    ref={(input) => this.inputs[3] = input}
                    id={3} onChange={() => this.onChanghandler(4)}
                    maxLength={1}
                    keyboardType='phone-pad'
                    onChangeText={(newText) => this.setState({ thirdField: newText })}
                    style={otp.itemInput}
                  />
                </Item>
                <Item style={otp.itemSection}>

                  <Input
                    secureTextEntry={true}
                    id={4}
                    ref={(input) => this.inputs[4] = input}
                    onChangeText={(newText) => this.setState({ fourthField: newText },()=>this.onSubmitOtp())}
                    maxLength={1} keyboardType='phone-pad'
                    style={otp.itemInput}
                  />
                </Item>

              </View>

              <View style={otp.buttonSection}>
                <Button style={otp.button} onPress={() => this.onSubmitOtp()} bordered>
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

