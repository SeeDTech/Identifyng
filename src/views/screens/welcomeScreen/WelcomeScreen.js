import React, { Component } from 'react'
import {
    View,
    Text,
    ImageBackground,
    StatusBar
} from 'react-native';
import { Container,Content, Form, Item, Input, Label } from 'native-base';
import {ButtonNoBorder, Btn } from '../../../components/buttons/Butons'
import Logo, { MainIdLogoGreen } from '../../../components/logo/Logo'
import { TextWithLetterSpacing } from '../../../components/TextWithLetterSpacing'
import welcome from './styles'
import { AsyncStorage } from 'react-native'
import { BaseColor } from '../../../styles/theme/color';
import Icon from "react-native-vector-icons/FontAwesome";
class WelcomeScreen extends Component {

    state = {
        error:false,
        password: null,
        email: null,
    }


    onSubmitForm = () => {
        const { email, password } = this.state;
        if (!email || !password) {
           this.setState({error:true})
        } else {
            this.setState({error:false})
            AsyncStorage.setItem('userToken', email + password)
            this.props.navigation.navigate('App');
        }

    }
    render() {
        const {error} = this.state;
        const renderErrorMessage = erromessage => (erromessage && error) && <Text style={welcome.errorMessage}><Icon name='info-circle' style={{marginRight:5}} size={15}/> {erromessage}</Text>
        return (
            <ImageBackground style={{ resizeMode: 'cover', width: '100%', height: '100%' }} source={require('../../../components/logo/images/whiteIdBackground.png')}>
                <Container style={{
                    flex: 1,
                    width: '100%',
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                }}>
                    <StatusBar
                        backgroundColor={BaseColor.base}
                        barStyle="light-content" />
                    <Content>
                        <View style={welcome.logoSection}>
                            <MainIdLogoGreen />
                        </View>
                        <View

                            style={{
                                alignItems: "center",
                                justifyContent: 'center',
                                marginTop:50,
                            }}
                        >

                            {renderErrorMessage("Invalid Email or Password")}
                            <Form style={{
                                width: '95%',
                                flex: 0,
                                alignContent: 'center',
                                flexDirection: "column",
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                   <Icon key={'email'} name="envelope" size={18} style={welcome.emailInputIcon} />
                                                                                                      
                                <Item
                                    style={welcome.itemSection}
                                    floatingLabel>

                                  
                                   <Label style={welcome.InputLabel}> id@app.com</Label>
                            
                                    <Input keyboardType="email-address"
                                        onChangeText={(newText) => this.setState({ email: newText })}
                                        style={welcome.InputField} >
                                  </Input>
                                </Item>
                                <Icon key={'password'} style={welcome.passwordInputIcon} name="unlock-alt" size={18} /> 
                                <Item
                                    style={{ marginEnd: 10, borderBottomColor: BaseColor.dark }}
                                    floatingLabel>
                                    <Label style={welcome.InputLabel}> Password</Label>
                                    <Input 
                                        secureTextEntry={true}
                                        onChangeText={(newText) => this.setState({ password: newText })}

                                        style={welcome.InputField} />
                                </Item>

                                <TextWithLetterSpacing textStyle={welcome.forgotPassword} spacing={1}>FORGOT PASSWORD?</TextWithLetterSpacing>
                                <View style={{ marginTop: 25 }}>
                                    <Btn onPress={() => this.onSubmitForm()} title="SIGN IN" />
                                    <Text style={welcome.askForSignup}>DON'T HAVE ACCOUNT?</Text>
                                    <ButtonNoBorder onPress={() => this.props.navigation.navigate('Requirement')} title='SIGN UP' />
                                </View>

                            </Form>
                        </View>
                    </Content>
                </Container>
            </ImageBackground>
        )
    }
}


export default WelcomeScreen


