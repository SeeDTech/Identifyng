
import React, { Component } from 'react'
import { TextInput, View, ImageBackground,Dimensions } from 'react-native'
import Logo, { MainIdLogoGreen } from '../../../../components/logo/Logo'
import phonenumber from './styles'
import { Container,Content,Form,Item,Label ,Button,Input,Text } from 'native-base';
import { BaseColor } from '../../../../styles/theme/color';
import Icon from "react-native-vector-icons/FontAwesome";
import ProgressBar from '../ProgressBar/ProgressBar';
import { validatePhone } from '../../../../helpers/form.helper';
 class PhoneNumber extends Component {

  state={
    activeNext:false,
    errorMessage:'invalid phone number',
    error:false,
    isCheck:false,
    PhoneNumber:'',
    isPhoneValid:false,
  }
    
  validate =(newText) => {
    this.setState({
      isPhoneValid: validatePhone(newText),
      PhoneNumber:phonenumber,
      
    })
  }
    onSubmitForm=()=>{
      const {isPhoneValid, PhoneNumber} =this.state;
      const {navigation} =this.props;
      if(isPhoneValid){
        this.setState({isCheck:true,error:false})
        navigation.navigate('BVN')
      }else{
        this.setState({error:true})        
      }
    }

  render() {
    const {isCheck,errorMessage,error}=this.state;
    const BackgroundImage = require('../../../../components/logo/images/whiteIdBackground.png');
    const RenderErrorMessage = ()=>{ return  error && <Text style={phonenumber.errorMessage}><Icon name='info-circle' style={{marginRight:5}} size={15}/> {errorMessage}</Text>}

    return (
      <ImageBackground source={BackgroundImage} style={{width:'100%', height:'100%',resizeMode: 'cover',}}>
      <Container style={phonenumber.container}>
      <Content >
        <View style={{position:'relative',top:25}}>
          <ProgressBar activeNext={isCheck} checkPhone={isCheck} />
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
          <RenderErrorMessage/>
          <Icon key={'phone'} name="phone" size={18} style={phonenumber.inputIcon} />
            <Item floatingLabel style={phonenumber.item}>
              <Label style={phonenumber.label}>Phone Number</Label>
              <Input maxLength={11} keyboardType='numeric' onChangeText={(newText) =>{()=>this.validate(newText)}} style={phonenumber.itemInput} />
            </Item>
            <View style={phonenumber.btnSection}>
            <Button onPress={this.onSubmitForm} style={phonenumber.btn}  bordered>
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


