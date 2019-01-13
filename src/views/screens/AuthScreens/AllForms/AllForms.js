import React, { Component } from 'react'
import { Text, View, ImageBackground, StatusBar, Platform, Animated, Easing, Dimensions } from 'react-native'
import { ButtonNoBorder, TransparentButton, NextButton } from '../../../../components/buttons/Butons';
import { MainIdLogoGreen } from '../../../../components/logo/Logo';
import { Container, Content, Form, Label, Item, Input } from 'native-base';
import { BaseColor } from '../../../../styles/theme/color';
import ProgressBar from '../ProgressBar/ProgressBar'
import forms from './styles';
import Icon from "react-native-vector-icons/FontAwesome";
import phonenumber from '../PhoneNumber/styles';
import otp from '../OTP/styles';
import SignupRequirementsPage from '../signupRequirements/SignupRequirementsPage';

const ScreenWidth = Dimensions.get('window').width;
class AllForms extends Component {
    constructor(props) {
        super(props)
        this.inputs = {}
        this.animatedValue = new Animated.Value(0)
        this.springValue = new Animated.Value(0)
    }
  
    componentWillMount = () => {
        this.animate();
        this.spring()
    }
    animate() {
        this.animatedValue.setValue(0)
        Animated.timing(
            
            this.animatedValue,
            {
                
                toValue: 1,
                duration: 750,
                easing: Easing.linear
            }
        ).start()

    }
    spring() {
        
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 1,
                tension:45,
            }
           
        ).start()
      
    }
    state = {
        error: false,
        isCheck: 0,
        firstField: '',
        secondField: '',
        thirdField: '',
        fourthField: '',
        formKey: 0,
        phoneNumber: null,
        bvn: '',
        otp: '',
        bvnError: 'Invalid BVN',
        phoneError: 'Invalid Phone number',
        optError: 'Invalid OTP',
        errorBorder: {
            borderBottomColor: BaseColor.red,
        }
    }

    // static navigationOptions = ({ navigation }) => {
    //     const screenID = navigation.state.screenID ? navigation.state.screenID : 0;
    // }
    // goForward = (key) => { 
    //     const params = { screenID: key+1 }
    //      if (Math.random() > .75) params.plain = true
    //     this.props.navigation.navigate('Forms',params)
    //   }
    onChanghandler = (id) => {
        this.inputs[id]._root.focus();
    }

    onSubmitOtp = () => {
        const { firstField, secondField, thirdField, fourthField, isCheck } = this.state;
        if (!firstField || !secondField || !thirdField || !fourthField) {
            alert('OTP cannot be empty');
        } else {
            const otp = firstField + secondField + thirdField + fourthField;
            this.setState({ otp, isCheck: isCheck + 1, error: false, })
            this.props.navigation.navigate('Registration');
        }
    }

    handlePhoneSubmit = () => {
        const { phoneNumber, formKey, isCheck } = this.state;
        if (!phoneNumber) {
            this.setState({ error: true })
        } else {
            this.setState({
                isCheck: isCheck + 1,
                error: false,
                formKey: formKey + 1,
            }, () => this.animate());
            // this.goForward(formKey)
        }
    }
    RenderErrorMessage = (message) => { this.spring(); return (this.state.error && <Text style={[phonenumber.errorMessage, { transform: [{ scale: 0.8 }] }]}><Text style={{ marginRight: 15 }}><Icon name='info-circle' size={12} /></Text>{message}</Text>) }

    handleBvnSubmit = () => {
        const { bvn, formKey, isCheck } = this.state;
        if (!bvn) return this.setState({ error: true })
        this.setState({
            isCheck: isCheck + 1,
            error: false,
            formKey: formKey + 1,
        }, () => this.animate());
        // this.goForward(formKey)
    }
    //Choose onSubmit function base on form type
    formhandler = () => {
        const { formKey } = this.state;
        switch (formKey) {
            case 0:
                return this.handlePhoneSubmit();
            case 1:
                return this.handleBvnSubmit();
            default:
                return this.onSubmitOtp();

        }
    }
    render() {
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [ScreenWidth * 2, 0]
        })

        const marginRight = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [ScreenWidth * 2, 0]
        })
        
        const { formKey,
            phoneError,
            bvnError,
            isCheck,
            optError,
            error,
            errorBorder
        } = this.state;



        const BackgroundImage = require('../../../../components/logo/images/whiteIdBackground.png');
         const errorStyle  = error?errorBorder:'';
        //get screen parameter
        //  const screenID = this.props.navigation.state.params ? this.props.navigation.state.params.screenID : 0
        const RenderBvnForm = formKey === 1 && (
            <Animated.View style={{ marginLeft, minWidth: '100%' }} key={formKey} >
                <View style={phonenumber.instruction}>
                    <Text style={[phonenumber.instructionText,]}>Input your Bvn</Text>
                </View>
                <Icon key={'phone'} name="phone" size={18} style={phonenumber.inputIcon} />
                <Item floatingLabel style={[phonenumber.item,errorStyle]}>
                    <Label style={phonenumber.label}>Bvn</Label>
                    <Input maxLength={11} keyboardType='numeric' onChangeText={(newText) => this.setState({ bvn: newText })} style={phonenumber.itemInput} />
                </Item>
                {this.RenderErrorMessage(bvnError)}
            </Animated.View>
        )


        const RenderPhoneForm = formKey === 0 && (
            <Animated.View key={formKey} style={{ marginLeft, minWidth: '100%' }}>
                <View style={phonenumber.instruction}>
                    <Text style={phonenumber.instructionText}>Input your phone number</Text>
                </View>
                <Icon key={'phone'} name="phone" size={18} style={phonenumber.inputIcon} />
                <Item floatingLabel style={[phonenumber.item,errorStyle]}>
                    <Label style={phonenumber.label}>Phone Number</Label>
                    <Input maxLength={11} keyboardType='numeric' onChangeText={(newText) => this.setState({ phoneNumber: newText })} style={phonenumber.itemInput} />
                </Item>
                {this.RenderErrorMessage(phoneError)}
            </Animated.View>
        )

        const RenderOtpForm = formKey === 2 && (
            <Animated.View key={formKey} style={{ marginLeft, minWidth: '100%' }}>
                <View key={formKey} style={phonenumber.instruction}>
                    <Text style={otp.instructionText}>Input the One Time Password(OTP) </Text>
                    <Text style={otp.instructionText}>sent to +234345******23</Text>
                </View>
                <View style={{ alignSelf: "center", alignItems: "center", alignContent: "center", flexDirection: 'row' }}>
                    <Item style={otp.itemSection}>
                        <Input
                            secureTextEntry={true}
                            ref={(input) => this.inputs[1] = input}
                            onChange={() => this.onChanghandler(2)}
                            id={1}
                            maxLength={1}
                            keyboardType='phone-pad'
                            onChangeText={(newText) => this.setState({ firstField: newText })}
                            style={otp.itemInput}
                        />
                    </Item>
                    <Item style={otp.itemSection}>

                        <Input
                            secureTextEntry={true}
                            ref={(input) => this.inputs[2] = input}
                            onChange={() => this.onChanghandler(3)} id={2}
                            maxLength={1}
                            keyboardType='phone-pad'
                            onChangeText={(newText) => this.setState({ secondField: newText })}
                            style={otp.itemInput}
                        />
                    </Item>
                    <Item style={otp.itemSection}>
                        <Input secureTextEntry={true}
                            ref={(input) => this.inputs[3] = input}
                            id={3} onChange={() => this.onChanghandler(4)}
                            maxLength={1}
                            keyboardType='phone-pad'
                            onChangeText={(newText) => this.setState({ thirdField: newText })}
                            style={otp.itemInput}
                        />
                    </Item>
                    <Item style={otp.itemSection}>

                        <Input
                            secureTextEntry={true}
                            id={4}
                            ref={(input) => this.inputs[4] = input}
                            onChangeText={(newText) => this.setState({ fourthField: newText }, () => this.onSubmitOtp())}
                            maxLength={1} keyboardType='phone-pad'
                            style={otp.itemInput}
                        />
                    </Item>
                </View>
                {this.RenderErrorMessage(optError)}
                <View style={{ alignItems: 'center', position: "relative", top: 50 }}>
                    <Text style={otp.instructionText}>Resend OTP?</Text>
                </View>
            </Animated.View>
        )

        return (

            <ImageBackground source={BackgroundImage} style={{ width: '100%', height: '100%', resizeMode: 'cover' }}>
                <Container
                    style={forms.container}>
                    <StatusBar
                        backgroundColor={BaseColor.dark}
                        barStyle="light-content" />
                    <Content>
                        <View style={{ flexDirection: "column", justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                            <ProgressBar isCheck={isCheck} />
                            <MainIdLogoGreen />
                        </View>
                        <Form style={forms.formSection}>
                            <View style={forms.dynamicInput}>
                                {RenderPhoneForm}
                                {RenderBvnForm}
                                {RenderOtpForm}
                            </View>
                            <View style={Platform.OS === "ios" ? [forms.button, forms.shadowIOs] : [forms.button, forms.shadowAndroid]}>
                                <NextButton onPress={() => this.formhandler()} />
                            </View>
                        </Form>
                    </Content>
                </Container>
            </ImageBackground>

        )
    }
}

export default AllForms