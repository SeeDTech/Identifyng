import React, { Component } from 'react'
import { Text, View, ImageBackground, StatusBar, Platform, Animated, Easing, Dimensions } from 'react-native'
import { ButtonNoBorder, TransparentButton, NextButton } from '../../../../components/buttons/Butons';
import { MainIdLogoGreen } from '../../../../components/logo/Logo';
import { Container, Content, Form, Label, Item, Input, Spinner } from 'native-base';
import { BaseColor } from '../../../../styles/theme/color';
import ProgressBar from '../ProgressBar/ProgressBar'
import forms from './styles';
import Icon from "react-native-vector-icons/FontAwesome";
import phonenumber from '../PhoneNumber/styles';
import otp from '../OTP/styles'
import {connect} from 'react-redux'
import { validatePhone } from '../../../../helpers/form.helper';
import { ERROR_CONST } from '../../../../helpers/Constants';
import { ArrowRight } from '../../../../components/Icons/SvgIcons/Icons';
import { addPhoneBvn, getUserOTP, validateOTP } from '../../../../helpers/InitSignUp.helper';

const ScreenWidth = Dimensions.get('window').width;
const {PHONE,OTP,BVN} = ERROR_CONST;

class AllForms extends Component {
    constructor(props) {
        super(props)
        this.inputs = {}
        this.animatedValue = new Animated.Value(0)
        this.springValue = new Animated.Value(0)
    }
  
    componentDidMount = () => {
        setTimeout(()=>this.setState({loader:false}),750)
        this.animate();
        this.spring()
    }
    animate() {
        this.animatedValue.setValue(0)
        Animated.timing(
            
            this.animatedValue,
            {
                
                toValue: 1,
                duration: 650,
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
        loader:false,
        formKey: 0,
        phoneNumber: '',
        bvn: '',
        otp: '',
        otpCounter:false,
        errorBorder: {
            borderBottomColor: BaseColor.red,
        }
    }

    validateOtpOnsupmit =()=>{
        const { firstField, secondField, thirdField, fourthField, isCheck } = this.state;
        const otp = firstField + secondField + thirdField + fourthField;
        this.setState({ otp, isCheck: isCheck + 1, error: false, })
     return  this.props.validateOTP(otp);
    }
   
    callOTP=()=>{
        setTimeout(()=>{this.setState({otpCounter:true})},20000)
        const {phoneNumber,bvn}= this.state;
        let credentials ={
            phone:phoneNumber,
            bvn
        }
        return this.props.getUserOTP(credentials)
    }
    componentDidUpdate=(prevProps,prevState)=>{
        
    const {isCheck,formKey}=this.state
        if(prevProps.bvnIsValid !==this.props.bvnIsValid){
            if(this.props.bvnIsValid===true){
                this.setState({
                    isCheck: isCheck + 1,
                    error: false,
                    formKey: formKey + 1,
                }, () => {this.animate(),
                    this.callOTP()}
                );
            }
        }
        if(prevProps.bvnError!==this.props.bvnError){
            if(this.props.bvnError===true){
                this.setState({error:this.props.bvnError})
            }
        }
        if(prevProps.isValidOTP !==this.props.isValidOTP){
            if(this.props.isValidOTP===true)
            this.props.navigation.navigate('Registration');
        }
    }

    onChanghandler = (id) => {
        this.inputs[id]._root.focus();
    }

    handlePhoneChange =(phoneInput)=>{
        const {error, phoneValue} = validatePhone(phoneInput)
        this.setState({
            phoneNumber:phoneValue,
            error
        })
      }
    onSubmitOtp = () => {
        const { firstField, secondField, thirdField, fourthField, isCheck } = this.state;
        this.setState({loader:false})
        if (!firstField || !secondField || !thirdField || !fourthField) {
            alert(OTP.EMPTY_STRING);
        } else {      
           this.validateOtpOnsupmit()
        }
    }

    bvnChangeHandler =(bvnInput)=>{
      
            this.setState({ bvn: bvnInput },()=>{
                if(this.state.bvn.length!==11){
                    this.setState({error:true})
                }else{
                   this.setState({
                       error:false
                   }) 
                }
            })
    }
    handlePhoneSubmit = () => {
        const { phoneNumber,error, formKey, isCheck } = this.state;
        if (!phoneNumber||error) {
            this.setState({ error: true })
        } else {
            this.setState({
                isCheck: isCheck + 1,
                error: false,
                formKey: formKey + 1,
            }, () => this.animate());
            
        }
        setTimeout(()=>this.setState({loader:false}),750) 
    }
    RenderErrorMessage = (message) => { this.spring(); return ((this.state.error)&& <Text style={[phonenumber.errorMessage, { transform: [{ scale: 0.8 }] }]}><Text style={{ marginRight: 15 }}><Icon name='info-circle' size={12} /></Text> {message}</Text>) }

    handleBvnSubmit = () => {
       setTimeout(()=>this.setState({loader:false}),750) 
        const { bvn,isCheck,formKey} = this.state;
        if (!bvn  ||this.state.bvn.length !==11) return this.setState({ error: true })
        let phoneBvn ={
            phone:this.state.phoneNumber,
            bvn:this.state.bvn,
        }
         this.props.addPhoneBvn(phoneBvn)
    
        
    }
    //Choose onSubmit function base on form type
    formhandler = () => {
        this.setState({loader:true})
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
        const{loader, bvn} =this.state;
        const {isLoading,bvnError}= this.props
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [ScreenWidth * 2, 0]
        })

        const marginRight = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [ScreenWidth * 2, 0]
        })
        
        const { formKey,
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
                    <Input maxLength={11} keyboardType='numeric' onChangeText={(newText) => {this.bvnChangeHandler(newText)}} style={phonenumber.itemInput} />
                </Item>
                {this.RenderErrorMessage(bvn.length?BVN.INVALID:BVN.EMPTY_STRING)}
            </Animated.View>
        )


        const RenderPhoneForm = formKey === 0 && (
            <Animated.View key={formKey} style={{ marginLeft, minWidth: '100%' }}>
                <View style={phonenumber.instruction}>
                    <Text style={phonenumber.instructionText}>Input your phone number</Text>
                </View>
                <Icon key={'phone'} name="phone" size={18} style={phonenumber.inputIcon} />
                <Item floatingLabel style={[phonenumber.item,errorStyle]}>
                    <Label style={phonenumber.label}>Phone number</Label>
                    <Input maxLength={14} keyboardType='phone-pad' onChangeText={(newText) => this.handlePhoneChange(newText)} style={phonenumber.itemInput} />
                </Item>
                {this.RenderErrorMessage(PHONE.INVALID)}
            </Animated.View>
        )

        const RenderOtpForm = formKey === 2 && (
            <Animated.View key={formKey} style={{ marginLeft, minWidth: '100%' }}>
                <View key={formKey} style={phonenumber.instruction}>
                    <Text style={otp.instructionText}>Input the One Time Password(OTP) </Text>
                    <Text style={otp.instructionText}>sent to <>{this.state.phoneNumber}</></Text>
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
                {this.RenderErrorMessage(OTP.INVALID)}
                <View style={{ alignItems: 'center', position: "relative", top: 50 }}>
              {this.state.otpCounter && <ButtonNoBorder onPress={()=>this.callOTP()}  txtStyle={otp.instructionText} title='Resend OTP'/>}
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
                            {/* <ProgressBar  isCheck={isCheck} /> */}
                            <MainIdLogoGreen />
                        </View>
                        <Form style={forms.formSection}>
                            <View style={forms.dynamicInput}>
                                {RenderPhoneForm}
                                {RenderBvnForm}
                                {RenderOtpForm}
                            </View>
                           <View style={{position:'absolute',top:'30%'}}>
                                {(loader ||isLoading)&& <Spinner color={BaseColor.base}/>}
                            </View>
                            <View style={Platform.OS === "ios" ? [forms.button, forms.shadowIOs] : [forms.button, forms.shadowAndroid]}>
                                <NextButton onPress={() => this.formhandler()} >
                                {loader? <Spinner color={BaseColor.light}/>:<ArrowRight/>}
                                </NextButton>
                            </View>
                        </Form>
                    </Content>
                   
                </Container>
            </ImageBackground>

        )
    }
}
const mapStateToProps = (state) => {
    return{
        bvnIsValid: state.InitSignUp.bvnIsValid,
       bvnError:state.InitSignUp.error,
       isLoading:state.InitSignUp.isLoading,
       isValidOTP:state.InitSignUp.isValidOTP
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPhoneBvn: (phoneData) => dispatch(addPhoneBvn(phoneData)),
        getUserOTP:(phoneBvn) =>dispatch(getUserOTP(phoneBvn)),
        validateOTP:(otp)=>dispatch(validateOTP(otp))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AllForms)