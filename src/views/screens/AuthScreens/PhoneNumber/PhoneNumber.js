
import React, { Component } from 'react'
import { TextInput, View, ImageBackground,Dimensions } from 'react-native'
import Logo, { MainIdLogoGreen } from '../../../../components/logo/Logo'
import phonenumber from './styles'
import Icon from "react-native-vector-icons/FontAwesome";
import { Container,Content,Form,Item,Label ,Button,Input,Text } from 'native-base';
import { BaseColor } from '../../../../styles/theme/color';
import ProgressBar from '../ProgressBar/ProgressBar';
 class PhoneNumber extends Component {

  state={
    PhoneNumber:'',
  }
    handleTextChange = (newText) => this.setState({ PhoneNumber: newText });
    
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
          style={phonenumber.form}
          >
          <View style={phonenumber.instruction}>
            <Text style={phonenumber.instructionText}>Input your phone number</Text>
          </View>

            <Item floatingLabel style={phonenumber.item}>
              <Label style={phonenumber.label}><Icon name="phone" size={20} /> Phone Number</Label>
              <Input maxLength={11} keyboardType='numeric' onChangeText={(newText) => this.setState({ phonenumber: newText })} style={phonenumber.itemInput} />
            </Item>
            <View style={phonenumber.btnSection}>
            <Button onPress={()=>this.props.navigation.navigate('BVN')} style={phonenumber.btn}  bordered>
            <Text style={phonenumber.btntext}>VERIFY</Text>
          </Button>
            </View>

          </Form>
      </Content>
      </Container>
      </ImageBackground>
    )
  }
}

export default PhoneNumber


