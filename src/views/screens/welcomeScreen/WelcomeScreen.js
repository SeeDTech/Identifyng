import React, { Component } from 'react'
import {
    View,
    Text,
    ImageBackground,
    StatusBar
} from 'react-native';
import { TransparentButton, Button } from '../../../components/buttons/Butons'
import Logo, { ImgLogo, MainIdLogoGreen } from '../../../components/logo/Logo'
import { TextWithLetterSpacing } from '../../../components/TextWithLetterSpacing'
import welcome from './styles'
import BackgroundImageWhite from '../../../components/BackgroundImages/BackgroundImageWhite';
import FloatingLabelInput from '../../../components/FloatingLabelInput';
class WelcomeScreen extends Component {
    state = {
        password:null,
        email:null,
    }
    handleTextChange = (newText, e) => this.setState({ [e.target.id]:newText })
    render() {
        return (
            <ImageBackground style={{resizeMode: 'cover',position:'relative', top:0, width: '100%', height: '100%' }} source={require('../../../components/logo/images/sample-log-in-page-bg.png')}>
                <View style={welcome.container}>
                    <StatusBar
                        backgroundColor="#656565"
                        barStyle="light-content" />
                    <View style={welcome.logoSection}>
                        <MainIdLogoGreen />
                    </View>
                    <View style={welcome.formInputsSection}>
                        <FloatingLabelInput
                            onChangeText={(newText) => this.setState({ email: newText })}
                            id="email" 
                            value={this.state.email}
                            label="Email"
                            keyboardType="email-address"
                        />
                       
                    </View>
                    <View style={welcome.buttonSection}>
                        <Button onPress={() => this.props.navigation.navigate('Requirement')} title="Signup" />
                        <TransparentButton onPress={() => this.props.navigation.navigate('Requirement')} title="Login" />
                    </View>
                    <View style={welcome.footerSection}>
                        <Text style={welcome.footerText}>-IDentifyNG Copyright 2018-</Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}


export default WelcomeScreen


