import React, { Component } from 'react'
import { Text, View, ImageBackground, StatusBar,Platform } from 'react-native'
import { ButtonNoBorder, TransparentButton, NextButton } from '../../../../components/buttons/Butons';
import { MainIdLogoGreen } from '../../../../components/logo/Logo';
import { Container, Content, Form, Label, Item, Input } from 'native-base';
import { BaseColor } from '../../../../styles/theme/color';
import ProgressBar from '../ProgressBar/ProgressBar'
import forms from './styles';
import Icon from "react-native-vector-icons/FontAwesome";
import phonenumber from '../PhoneNumber/styles';
class AllForms extends Component {

    state = {
        error:false,
        firstField: '',
        secondField: '',
        thirdField: '',
        fourthField: '',
        formKey: 0,
        phoneNumber:'',
    }

    onChanghandler = (id) => {
        this.inputs[id]._root.focus();
    }

    handlePhoneSubmit=()=>{
        const {phoneNumber,formKey} = this.state;
        if(!phoneNumber) return this.setState({error:true})
        this.setState({
            isCheck:true,
            error:false,
            formKey:formKey+1,
        })

    }
    formhandler=()=>{
        const {formKey}=this.state;
        switch(formKey){
            case 0:
            return this.handlePhoneSubmit();
            default:
            return alert('mess');
        }
    }
    render() {
        const {formKey, error}=this.state;
        const BackgroundImage = require('../../../../components/logo/images/whiteIdBackground.png');
        const RenderErrorMessage = ()=>{ return  error && <Text style={phonenumber.errorMessage}><Icon name='info-circle' style={{marginRight:5}} size={15}/>Invalid PhoneNumber</Text>}
        const { navigation } = this.props;
        const RenderBvnForm =()=> {
            return  formKey ===2 && (
                <View style={{ width: '100%' }}>
                    <View style={phonenumber.instruction}>
                        <Text style={[phonenumber.instructionText,]}>Input your Bvn</Text>
                    </View>
                    <Icon key={'phone'} name="phone" size={18} style={phonenumber.inputIcon} />
                    <Item floatingLabel style={phonenumber.item}>
                        <Label style={phonenumber.label}>Phone Number</Label>
                        <Input maxLength={11}  keyboardType='numeric' onChangeText={(newText) => { () => this.setState({phoneNumber:newText}) }} style={phonenumber.itemInput} />
                    </Item>
                    <RenderErrorMessage/>
                </View>
            )
        }
        
        const RenderPhoneForm = () => {
            return formKey===0 && (
                <View style={{ width: '100%' }}>
                    <View style={phonenumber.instruction}>
                        <Text style={phonenumber.instructionText}>Input your phone number</Text>
                    </View>
                    <Icon key={'phone'} name="phone" size={18} style={phonenumber.inputIcon} />
                    <Item floatingLabel style={phonenumber.item}>
                        <Label style={phonenumber.label}>Phone Number</Label>
                        <Input maxLength={11} keyboardType='numeric' onChangeText={(newText) => { () => this.setState(newText) }} style={phonenumber.itemInput} />
                    </Item>
                    {/* <RenderErrorMessage/> */}
                </View>
            )
        }
        return (
            <ImageBackground source={BackgroundImage} style={{ width: '100%', height: '100%', resizeMode: 'cover', }}>

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
                                <RenderPhoneForm />
                                <RenderBvnForm/>
                            </View>
                        </Form>
                        <View style={Platform.OS === "ios" ? [forms.button,forms.shadowIOs] : [forms.button,forms.shadowAndroid]}>
                            <NextButton onPress={() => this.formhandler()} />
                        </View>
                    </Content>
                </Container>
            </ImageBackground>
        )
    }
}

export default AllForms