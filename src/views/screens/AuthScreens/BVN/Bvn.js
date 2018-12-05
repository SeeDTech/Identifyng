import React, { Component } from 'react'
import { Text,TextInput,StyleSheet,Image, View } from 'react-native'
import Logo,{ImgLogo} from '../../../../components/logo/Logo'
import {NextButton} from '../../../../components/buttons/Butons'
import FloatingLabelInput from '../../../../components/FloatingLabelInput'
import phonenumber from '../PhoneNumber/styles'

export class Bvn extends Component {
  state={
    bvn:'',
  }
    handleTextChange = (newText) => this.setState({ bvn: newText });
    
  render() {
    return (
      <View style={phonenumber.container}>
      
        <View style={phonenumber.logoSection}>
        <ImgLogo />
        </View>
        <View style={{alignItems:'center',width:300,padding:10}}>
        
          <Text style={{fontWeight:'normal', textAlign:'center', fontFamily:'sans-serif-medium',fontSize:18,color:'#424242'}}>Kindly type your bank verification number (BVN)</Text>
        </View>
        <View style={phonenumber.inputSection}>

          <FloatingLabelInput
            label="BVN"
            value={this.state.bvn}
            onChangeText={this.handleTextChange}
            keyboardType="number-pad"
          />
       
        </View>
        
        <View>
            <NextButton onPress={() => this.props.navigation.navigate('OTP')}/>
        </View>
      </View>
    )
  
  }
}

  const styles = StyleSheet.create({
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(69,85,117,0.7)',
      opacity:.2,
      overlayColor:''
    }
})

export default Bvn


