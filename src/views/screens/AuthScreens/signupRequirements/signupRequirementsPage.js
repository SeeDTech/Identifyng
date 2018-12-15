
import React, { Component } from 'react'
import { Text, View, StatusBar, ImageBackground } from 'react-native'
import mainStyle from '../../../../styles/mainStyle';
import requirement from './styles'
import { Container, Content, Item, Right } from 'native-base'
import Steps from './Steps'
import { NextButton, ButtonNoBorder, Button, ButtonInverse } from '../../../../components/buttons/Butons'
import Logo, { MainIdLogoGreen } from '../../../../components/logo/Logo'
import { TextWithLetterSpacing } from '../../../../components/TextWithLetterSpacing'
import PropTypes from 'prop-types'
import { BaseColor } from '../../../../styles/theme/color';

export class SignupRequirementsPage extends Component {
  static propTypes = {

  }
  render() {
    return (
      <ImageBackground style={{ resizeMode: 'cover', width: '100%', height: '100%' }} source={require('../../../../components/logo/images/whiteIdBackground.png')}>
      <Container style={{ 
                    flex:1,
                    width:'100%',
                    alignContent:'center',
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor: 'transparent'}}>
        <StatusBar
          backgroundColor={BaseColor.base}
          barStyle="light-content" />
       
          <View style={requirement.logoSection}>
          <Text style={{position:"absolute", top:30, opacity:.5,  fontFamily:'Ubuntu-Regular', color:BaseColor.grey, fontSize:18}}>
              Welcome to
          </Text>
            <MainIdLogoGreen />
          </View>
          <View style={requirement.card}>
          <View style={requirement.cardHeader}>
          <TextWithLetterSpacing spacing={3} textStyle={requirement.textSpace}>
          SIGN UP
          </TextWithLetterSpacing>
            <TextWithLetterSpacing spacing={3} textStyle={requirement.textSpace}>
               REQUIREMENTS
            </TextWithLetterSpacing>
          </View>
            <View style={requirement.ListSection}>
              <Steps>Active phone number</Steps>
               <Steps>BVN</Steps>
              <Steps>OTP</Steps>
              <Steps>Account Generation</Steps>
            </View>
          </View>
        <View>
          <Button title="GET STARTED" />
        </View>
          <View style={{ justifyContent:"flex-end", marginLeft:250}}>
            <ButtonNoBorder onPress={()=>this.props.navigation.navigate('Welcome')} title="SIGN IN" txtStyle={{fontSize:15}} />
          </View>
      </Container>
      </ImageBackground>
    )
  }
}

export default SignupRequirementsPage
