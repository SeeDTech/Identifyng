
import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import mainStyle from '../../../../styles/mainStyle';
import requirement from './styles'
import Steps from './Steps'
import { NextButton } from '../../../../components/buttons/Butons'
import Logo from '../../../../components/logo/Logo'
import {TextWithLetterSpacing} from '../../../../components/TextWithLetterSpacing'
import PropTypes from 'prop-types'

export class SignupRequirementsPage extends Component {
  static propTypes = {

  }
  render() {
    return (

      <View style={requirement.base}>
        <StatusBar
          backgroundColor="#019a00"
          barStyle="light-content" />
        <View>
          <View style={requirement.upperLayer}>
            <View style={requirement.logoCircle}>
              <Logo />
            </View>
          </View>
        </View>
        <View style={requirement.header}>
        <TextWithLetterSpacing spacing={2} textStyle={requirement.HeaderTitle}>SIGNUP</TextWithLetterSpacing>
        <TextWithLetterSpacing spacing={2} textStyle={requirement.HeaderTitle}>REQUIREMENTS</TextWithLetterSpacing>         
        </View>
        <Steps number={1}>Active phone number</Steps>
        <Steps number={2}>BVN</Steps>
        <Steps number={3}>OTP</Steps>
        <Steps number={4}>Account generation</Steps>
        <NextButton onPress={() => this.props.navigation.navigate('PhoneNumber')} title={"ID"} />
      </View>
    )
  }
}

export default SignupRequirementsPage
