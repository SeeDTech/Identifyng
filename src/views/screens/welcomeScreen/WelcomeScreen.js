import React, { Component } from 'react'
import {
    View,
    Text,
    StatusBar
} from 'react-native';
import {TransparentButton, Button} from '../../../components/buttons/Butons'
import Logo from '../../../components/logo/Logo'
import { TextWithLetterSpacing } from '../../../components/TextWithLetterSpacing'
import welcome from './styles'
class WelcomeScreen extends Component {

    render() {
        return (
            <View style={welcome.container}>
            <StatusBar 
             backgroundColor="#097a34"
             barStyle ="light-content"/>
                <View style={welcome.logoSection}>
                    <Logo />
                    <View style={welcome.logoText}>
                        <TextWithLetterSpacing spacing={4} textStyle={welcome.logoText}>IDentifyNG</TextWithLetterSpacing>
                        <View style={welcome.logoRule}></View>
                    </View>

                </View>
                <View style={welcome.buttonSection}>
                    <Button onPress={() => this.props.navigation.navigate('Requirement')} title="Signup"/> 
                    <TransparentButton onPress={() => this.props.navigation.navigate('Requirement')} title="Login"/>
                </View>
                <View style={welcome.footerSection}>
                    <Text style={welcome.footerText}>-IDentifyNG Copyright 2018-</Text>
                </View>
            </View>
        )
    }
}


export default WelcomeScreen


