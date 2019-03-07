
import React, { Component } from 'react'
import { TextInput, View, ImageBackground, Dimensions } from 'react-native'
import Logo, { MainIdLogoGreen } from '../../../../components/logo/Logo'
import phonenumber from './styles'
import { Container, Content, Form, Item, Label, Button, Input, Text } from 'native-base';
import { BaseColor } from '../../../../styles/theme/color';
import Icon from "react-native-vector-icons/FontAwesome";
import ProgressBar from '../ProgressBar/ProgressBar';
import { validatePhone } from '../../../../helpers/form.helper';
class PhoneNumber extends Component {

  state = {
    activeNext: false,
    errorMessage: 'invalid phone number',
    error: false,
    isCheck: false,
    PhoneNumber: '',
    isPhoneValid: false,
  }

  validate = (newText) => {
    this.setState({
      isPhoneValid: validatePhone(newText),
      PhoneNumber: phonenumber,

    })
  }
  onSubmitForm = () => {
    const { isPhoneValid, PhoneNumber } = this.state;
    const { navigation } = this.props;
    if (true) {
      this.setState({ isCheck: true, error: false })
      this.props.formKey +=1;
    } else {
      this.setState({ error: true })
    }
  }

  render() {
    return (
      <View>
        <View style={phonenumber.instruction}>
          <Text style={phonenumber.instructionText}>Input your phone number</Text>
        </View>
        <RenderErrorMessage />
        <Icon key={'phone'} name="phone" size={18} style={Phonenumber.inputIcon} />
        <Item floatingLabel style={phonenumber.item}>
          <Label style={phonenumber.label}>Phone Number</Label>
          <Input maxLength={11} keyboardType='numeric' onChangeText={(newText) => { () => this.setState({phonenumber: newText}) }} 
          style={phonenumber.itemInput} />
        </Item>
      </View>
    )
  }
}
export default PhoneNumber


