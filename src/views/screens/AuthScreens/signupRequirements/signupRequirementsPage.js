
import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import mainStyle from '../../../../styles/mainStyle';
import requirement from './styles'
import Steps from './Steps'
import { NextButton } from '../../../../components/buttons/Butons'
import Logo from '../../../../components/logo/Logo'
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
          <Text style={requirement.HeaderTitle}>Signup Requirements</Text>
        </View>
        <Steps number={1}>Active phone number</Steps>
        <Steps number={2}>BVN</Steps>
        <Steps number={3}>OTP</Steps>
        <Steps number={4}>Account generation</Steps>
        <NextButton onPress={() => alert("Are you ready?")} title={"ID"} />
      </View>
    )
  }
}

export default SignupRequirementsPage
