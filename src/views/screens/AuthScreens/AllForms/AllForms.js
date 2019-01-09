import React, { Component } from 'react'
import { Text, View, ImageBackground, StatusBar, Platform } from 'react-native'
import { ButtonNoBorder, TransparentButton, NextButton } from '../../../../components/buttons/Butons';
import { MainIdLogoGreen } from '../../../../components/logo/Logo';
import { Container, Content, Form, Label, Item, Input } from 'native-base';
import { BaseColor } from '../../../../styles/theme/color';
import ProgressBar from '../ProgressBar/ProgressBar'
import forms from './styles';
import Icon from "react-native-vector-icons/FontAwesome";
import phonenumber from '../PhoneNumber/styles';
import otp from '../OTP/styles';
class AllForms extends Component {
    constructor(props) {
        super(props)
        this.inputs = {}
    }
    state = {
        error: false,
        isCheckPhone: false,
        isCheckBvn: false,
        isCheckOtp: false,
        firstField: '',
        secondField: '',
        thirdField: '',
        fourthField: '',
        formKey: 0,
        phoneNumber: null,
        bvn: '',
        otp: '',
    }

    onChanghandler = (id) => {
        this.inputs[id]._root.focus();
    }

    onSubmitOtp = () => {
        const { firstField, secondField, thirdField, fourthField } = this.state;
        if (!firstField || !secondField || !thirdField || !fourthField) {
          alert('OTP cannot be empty');
        } else {
          const otp = firstField + secondField + thirdField + fourthField;
          this.setState({otp, isCheckOtp:true,error:false,})
          this.props.navigation.navigate('Registration');
        }
      }

    handlePhoneSubmit = () => {
        const { phoneNumber, formKey } = this.state;
        if (!phoneNumber) {
            this.setState({ error: true })
        } else {
            this.setState({
                isCheckPhone: true,
                error: false,
                formKey: formKey + 1,
            });
        }
    }

    handleBvnSubmit = () => {
        const { bvn,formKey } = this.state;
        if (!bvn) return this.setState({ error: true })
        this.setState({
            isCheckBvn: true,
            error: false,
            formKey: formKey + 1,
        });
    }
    //Choose onSubmit function base on form
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
        const { formKey, error } = this.state;
        const BackgroundImage = require('../../../../components/logo/images/whiteIdBackground.png');
        const RenderErrorMessage = () => { return error && <Text style={phonenumber.errorMessage}>Invalid Phone number</Text> }
        const { navigation } = this.props;

        const RenderBvnForm = formKey === 1 && (
            <View style={{ width: '100%' }}>
                <View style={phonenumber.instruction}>
                    <Text style={[phonenumber.instructionText,]}>Input your Bvn</Text>
                </View>
                <Icon key={'phone'} name="phone" size={18} style={phonenumber.inputIcon} />
                <Item floatingLabel style={phonenumber.item}>
                    <Label style={phonenumber.label}>Bvn</Label>
                    <Input maxLength={11} keyboardType='numeric' onChangeText={(newText) => this.setState({ bvn: newText })} style={phonenumber.itemInput} />
                </Item>
                <RenderErrorMessage />
            </View>
        )


        const RenderPhoneForm = formKey === 0 && (
            <View style={{ width: '100%' }}>
                <View style={phonenumber.instruction}>
                    <Text style={phonenumber.instructionText}>Input your phone number</Text>
                </View>
                <Icon key={'phone'} name="phone" size={18} style={phonenumber.inputIcon} />
                <Item floatingLabel style={phonenumber.item}>
                    <Label style={phonenumber.label}>Phone Number</Label>
                    <Input maxLength={11} keyboardType='numeric' onChangeText={(newText) => this.setState({ phoneNumber: newText })} style={phonenumber.itemInput} />
                </Item>
                <RenderErrorMessage />
            </View>
        )

        const RenderOtpForm = formKey === 2 && (
            <View >
                <View style={phonenumber.instruction}>
                    <Text style={otp.instructionText}>Input the One Time Password(OTP) </Text>
                    <Text style={otp.instructionText}>sent to +234345******23</Text>
                </View>
                <View style={{ alignSelf:"center",alignItems:"center",alignContent:"center", flexDirection: 'row' }}>

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
                <RenderErrorMessage />
            </View>
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
                            <ProgressBar />
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