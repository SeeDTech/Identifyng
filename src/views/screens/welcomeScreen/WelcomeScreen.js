import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    ImageBackground,
    StatusBar
} from 'react-native';

import { Container, Content, Form, Item, Input, Label, Spinner,Card,CardItem } from 'native-base';
import { ButtonNoBorder, Btn } from '../../../components/buttons/Butons'
import Logo, { MainIdLogoGreen } from '../../../components/logo/Logo'
import { TextWithLetterSpacing } from '../../../components/TextWithLetterSpacing'
import welcome from './styles'
import { AsyncStorage } from 'react-native'
import { BaseColor } from '../../../styles/theme/color';
import Icon from "react-native-vector-icons/FontAwesome";
import { userLogin } from '../../../helpers/Auth.helpers';
import { REG_EXPRESSION } from '../../../helpers/Constants';
import { setItem } from '../../../helpers/storage.helpers';
import AnimLogo from '../../../components/buttons/AnimatedLogo';
import Modal from "react-native-modal";
import ForgotPassword from './ForgotPassword';
const { EMAIL, PASSWORD } = REG_EXPRESSION
const background = require('../../../components/logo/images/whiteIdBackground.png');

export const IDloader = (<View style={{ flex: 1, position: 'absolute', backgroundColor: 'rgba(46, 49, 49, .95)', height: '100%', width: '100%', top: 0, alignItems: 'center', alignSelf: 'center', justifyContent: 'center', zIndex: 1000 }}><AnimLogo color={BaseColor.light} /></View>)
class WelcomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
            error: false,
            formDanger: {
                borderBottomColor: BaseColor.red,
                borderWidth: 3,
            },
            currentMail:'',
            emailValide: true,
            passwordValide: true,
            credentials: {
                email: '',
                password: '',
            }
        }
    }

    handleForgetPassword =(input)=>{
        this.setState({currentMail:input})
    }
    validateLogin = (Input, type) => {

        if (type === 'email') {
            if (EMAIL.test(Input)) {

                this.setState({
                    emailValide: true,
                    credentials: {
                        ...this.state.credentials,
                        email: Input
                    }
                })
            } else {

                this.setState({ emailValide: false })
            }
        }
        else if (type === 'password') {
            if (PASSWORD.test(Input)) {
                this.setState({
                    passwordValide: true,
                    credentials: {
                        ...this.state.credentials,
                        password: Input
                    }
                })
            } else {
                this.setState({ passwordValide: false })
            }
            // AsyncStorage.setItem('userToken', email + password)
            // this.props.navigation.navigate('App');
        }


    }
    // logged=()=>{
    //     AsyncStorage.setItem('Auth_token', this.props.userToken)
    //     return this.props.navigation.navigate('AuthLoading')
    // }

    componentWillUnmount() {
        this.setState({isModalVisible:false})
    }

    _toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isLoading !== this.props.isLoggedIn) {
            if (this.props.isLoggedIn === true) {
                this.props.navigation.navigate('AuthLoading');
            }
        }
    }

    onSubmitForm = () => {
        const { email, password } = this.state.credentials
        if (!email || !password) {
            this.setState({ error: true })
        } else {
            this.setState({
                error: false,
            })
            this.props.userLogin(this.state.credentials)
        }
    }

    render() {
        const { isLoading, errorMessage, serverError } = this.props
        const RenderLoader = isLoading && IDloader;
        const { error, emailValide, passwordValide, formDanger } = this.state;
     
        const renderErrorMessage = erromessage => (serverError || error) && <Text style={welcome.errorMessage}><Icon name='info-circle' style={{ marginRight: 5 }} size={15} /> {erromessage}</Text>
        return (
            <ImageBackground style={{ resizeMode: 'cover', width: '100%', height: '100%' }} source={background}>
                <View style={{ flex: 1, }}>
                    <Container style={{
                        display: "flex",
                        flex: 1,
                        zIndex: 100,
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
                                    marginTop: 50,
                                }}
                            >
                                {renderErrorMessage(serverError ? errorMessage : "Invalid Email or Password")}

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
                                        style={[welcome.itemSection, emailValide ? null : formDanger]}
                                        floatingLabel>
                                        <Label style={welcome.InputLabel}> identifyng@app.com</Label>

                                        <Input keyboardType="email-address"
                                            autoCapitalize="none"
                                            onChangeText={(newText) => this.validateLogin(newText, 'email')}
                                            style={welcome.InputField} >
                                        </Input>
                                    </Item>
                                    <Icon key={'password'} style={welcome.passwordInputIcon} name="unlock-alt" size={18} />
                                    <Item
                                        style={[{ marginEnd: 10, borderBottomColor: BaseColor.dark }, passwordValide ? null : formDanger,]}
                                        floatingLabel>
                                        <Label style={welcome.InputLabel}> Password</Label>
                                        <Input
                                            secureTextEntry={true}
                                            autoCapitalize='none'
                                            onChangeText={(newText) => this.validateLogin(newText, 'password')}
                                            style={welcome.InputField} />
                                    </Item>
                                    <ButtonNoBorder onPress={this._toggleModal}>
                                        <TextWithLetterSpacing textStyle={welcome.forgotPassword} spacing={1}>FORGOT PASSWORD?</TextWithLetterSpacing>
                                    </ButtonNoBorder>
                                    <View style={{ marginTop: 25 }}>
                                        <Btn onPress={() => this.onSubmitForm()} title="SIGN IN" />
                                        <Text style={welcome.askForSignup}>DON'T HAVE ACCOUNT?</Text>
                                        <ButtonNoBorder onPress={() => this.props.navigation.navigate('Requirement')} title='SIGN UP' />
                                    </View>

                                </Form>
                            </View>
                        </Content>
                    </Container>
                </View>
                <ForgotPassword toggleModal={()=>this._toggleModal()} 
                handleForgetPassword={(newText)=>this.handleForgetPassword(newText)} 
                isModalVisible={this.state.isModalVisible} 
                currentMail={this.state.currentMail}
                />
                {RenderLoader}
            </ImageBackground>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isLoading: state.Auth.isLoading,
        serverError: state.Auth.error,
        userToken: state.Auth.userToken,
        errorMessage: state.Auth.errorMessage,
        isLoggedIn: state.Auth.isLoggedIn,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (user) => dispatch(userLogin(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)

