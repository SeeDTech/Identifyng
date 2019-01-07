import React, { Component } from 'react'
import { StyleSheet,ImageBackground,Image, View } from 'react-native'
import Logo,{MainIdLogoGreen} from '../../../../components/logo/Logo'
import phonenumber from '../PhoneNumber/styles'
import {Input, Item, Label,Text, Button,Form, Container,Content} from 'native-base'
import ProgressBar from '../ProgressBar/ProgressBar'
import { BaseColor } from '../../../../styles/theme/color';
import bvn from './styles';

export class Bvn extends Component {
  state={
    bvn:'',
  }
    
  render() {
    return (
      <ImageBackground source={require('../../../../components/logo/images/whiteIdBackground.png')} style={{width:'100%', height:'100%',resizeMode: 'cover',}}>
      <Container style={phonenumber.container}>
      <Content >
        <View style={{position:'relative',top:25}}>
          <ProgressBar />
        </View>
        <View style={phonenumber.logoSection}>
          <MainIdLogoGreen />
        </View>
          <Form
          style={bvn.form}
          >
          <View style={bvn.instruction}>
            <Text style={bvn.instructionText}>Input your Bank Verification
             Number</Text>
             
          </View>
          <Image source={require('../../../../components/logo/images/bvn.png')} style={bvn.inputIcon} />
            <Item floatingLabel style={bvn.item}>
              <Label style={bvn.label}>BVN</Label>
              <Input keyboardType='numeric' maxLength={11} onChangeText={(newText) => this.setState({ bvn: newText })} style={bvn.input} />
            </Item>
            <View style={bvn.buttonSection}>
            <Button style={bvn.button} onPress={()=>this.props.navigation.navigate('OTP')} bordered>
            <Text style={bvn.buttonText}>VERIFY</Text>
          </Button>
            </View>

          </Form>
      </Content>
      </Container>
      </ImageBackground>
    )
  
  }
}


export default Bvn


