import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    View,
    Text,
    ImageBackground,
    StatusBar
} from 'react-native';
import { Container,Content, Form, Item, Input, Label, Spinner } from 'native-base';
import {ButtonNoBorder, Btn } from '../../../components/buttons/Butons'
import Logo, { MainIdLogoGreen } from '../../../components/logo/Logo'
import { TextWithLetterSpacing } from '../../../components/TextWithLetterSpacing'
import welcome from './styles'
import { AsyncStorage } from 'react-native'
import { BaseColor } from '../../../styles/theme/color';
import Icon from "react-native-vector-icons/FontAwesome";
import { userLogin } from '../../../helpers/Auth.helpers';
import { REG_EXPRESSION } from '../../../helpers/Constants';
import { setItem } from '../../../helpers/storage.helpers';

const {EMAIL,PASSWORD} = REG_EXPRESSION

class WelcomeScreen extends Component {
constructor(props){
    super(props)
    this.state={
        error:false,
        formDanger:{
            borderBottomColor:BaseColor.red,
            borderWidth:3,
        },
        emailValide:true,
        passwordValide:true,
        credentials:{
            email:'',
            password:'',
        }
    }
}
    validateLogin = (Input,type) =>{
        
        if(type==='email'){
            if (EMAIL.test(Input)) {
               
                this.setState({
                    emailValide:true,
                    credentials:{
                        ...this.state.credentials,
                        email:Input
                    }
                })
             }else{
               
                this.setState({emailValide:false})
             }
        }
       else if(type==='password'){
            if(PASSWORD.test(Input)){
                this.setState({passwordValide:true,
                    credentials:{
                        ...this.state.credentials,
                        password:Input
                    }
                })
            }else{
                this.setState({passwordValide:false})
            }
            // AsyncStorage.setItem('userToken', email + password)
            // this.props.navigation.navigate('App');
        }
        
        
    }
    onSubmitForm = () => {
        const {email,password}= this.state.credentials
       if(!email||!password){
           this.setState({error:true})
       }else{
           this.setState({
               error:false,
           })
           this.props.userLogin(this.state.credentials) 
         if(this.props.userToken){
             setItem(usertoken, this.props.userToken)
             this.props.navigation.navigate('App')
         }

       }
    } 
    render() {
        const {isLoading,errorMessage,serverError}= this.props
        const RenderLoader = isLoading && <Spinner/>
        const {error,emailValide,passwordValide, formDanger} = this.state;
        const renderErrorMessage = erromessage => (serverError || error) && <Text style={welcome.errorMessage}><Icon name='info-circle' style={{marginRight:5}} size={15}/> {erromessage}</Text>
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
                            {renderErrorMessage(serverError? errorMessage:"Invalid Email or Password")}
                            
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
                                    style={[welcome.itemSection,emailValide?null:formDanger]}
                                    floatingLabel>
                                   <Label style={welcome.InputLabel}> identifyng@app.com</Label>
                            
                                    <Input keyboardType="email-address"
                                        onChangeText={(newText) => this.validateLogin(newText, 'email')}
                                        style={welcome.InputField} >
                                  </Input>
                                </Item>
                                <Icon key={'password'} style={welcome.passwordInputIcon} name="unlock-alt" size={18} /> 
                                <Item
                                    style={[ { marginEnd: 10, borderBottomColor: BaseColor.dark },passwordValide? null:formDanger,]}
                                    floatingLabel>
                                    <Label style={welcome.InputLabel}> Password</Label>
                                    <Input 
                                        secureTextEntry={true}
                                        onChangeText={(newText) => this.validateLogin(newText, 'password')}
                                        style={welcome.InputField} />
                                </Item>
                                {RenderLoader}
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


const mapStateToProps = (state) => {
    return {
        isLoading: state.Auth.isLoading,
        serverError: state.Auth.error,
        userToken:state.Auth.userToken,
        errorMessage: state.Auth.errorMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (user) => dispatch(userLogin(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)

