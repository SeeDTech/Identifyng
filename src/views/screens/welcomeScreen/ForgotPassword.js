import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import { Container, Content, Form, Item, Input, Label, Spinner,Card,CardItem } from 'native-base';
import welcome from './styles';
import { Btn } from '../../../components/buttons/Butons';
import { BaseColor } from '../../../styles/theme/color';


class ForgotPassword extends Component {

state={
    phase:0,
}
handlePhase=()=>{
    let {phase} =this.state;
    this.setState({phase:phase+1})
}
  render() {
      const {isModalVisible,currentMail} =this.props;
      const {phase} = this.state;

      const setEmail=( <View style={{ flex: 1,marginLeft:10,marginTop:15 }}>
        <Icon key={'email'} name="envelope" size={18} style={[welcome.emailInputIcon,{top:25,left:8}]} />
            <Item
                style={welcome.itemSection}
                floatingLabel>
                <Label style={welcome.InputLabel}>Enter your email</Label>
                <Input keyboardType="email-address"
                    autoCapitalize="none"
                    value={currentMail}
                    onChangeText={(newText) => this.props.handleForgetPassword(newText)}
                    style={welcome.InputField} >
                </Input>
            </Item>
            <Btn btnStyle={{marginTop:25,height:42}} title="Verify Email" onPress={this.handlePhase} />
        </View>)

 const setPassword=( <View style={{ flex: 1,marginLeft:10,marginTop:15 }}>
        <Icon key={'password'} name="unlock-alt" size={18} style={[welcome.emailInputIcon,{top:25,left:8}]} />
            <Item
                style={welcome.itemSection}
                floatingLabel>
                <Label style={welcome.InputLabel}>Enter New Password</Label>
                <Input keyboardType="email-address"
                    autoCapitalize="none"
                    value={currentMail}
                    onChangeText={(newText) => this.props.handleForgetPassword(newText)}
                    style={welcome.InputField} >
                </Input>
            </Item>
            <Icon key={'passwordConfirm'} name="unlock-alt" size={18} style={[welcome.emailInputIcon,{top:90,left:8}]} />
            <Item
                style={[welcome.itemSection,{marginTop:10}]}
                floatingLabel>
                <Label style={welcome.InputLabel}>Confirm Password</Label>
                <Input keyboardType="email-address"
                    autoCapitalize="none"
                    value={currentMail}
                    onChangeText={(newText) => this.props.handleForgetPassword(newText)}
                    style={welcome.InputField} >
                </Input>
            </Item>
            <Btn btnStyle={{marginBottom:5,marginTop:25,height:42}} title="Reset Password" onPress={this.handlePhase} />
        </View>)
    return (
        <Modal isVisible={isModalVisible}
        animationInTiming={500}
        animationOutTiming={500}
        onBackdropPress={()=>this.setState({phase:0},this.props.toggleModal)}
        backdropTransitionOutTiming={500}
        backdropTransitionInTiming={500}
        >
        <Card>
        <CardItem header bordered>
              <Text style={{ fontFamily:'HurmeGeometricSans1',color:BaseColor.dark,textAlign:'center'}}>
              Forgot password
              </Text>
       
            </CardItem>
            <CardItem>
          {this.state.phase>0 ? phase===1?setPassword:<Text>Acknowledge</Text>:setEmail}
            </CardItem>
            </Card>
        </Modal>
    )
  }
}

export default ForgotPassword
