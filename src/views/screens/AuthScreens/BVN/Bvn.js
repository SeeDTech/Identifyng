import React, { Component } from 'react'
import { StyleSheet,ImageBackground, View } from 'react-native'
import Logo,{MainIdLogoGreen} from '../../../../components/logo/Logo'
import phonenumber from '../PhoneNumber/styles'
import {Input, Item, Label,Text, Button,Form, Container,Content} from 'native-base'
import ProgressBar from '../ProgressBar/ProgressBar'
import Icon from "react-native-vector-icons/FontAwesome";
import { BaseColor } from '../../../../styles/theme/color';

export class Bvn extends Component {
  state={
    bvn:'',
  }
    handleTextChange = (newText) => this.setState({ bvn: newText });
    
  render() {
    return (
      <ImageBackground source={require('../../../../components/logo/images/whiteIdBackground.png')} style={{width:'100%', height:'100%',resizeMode: 'cover',}}>
      <Container style={phonenumber.container}>
      <Content >
        <View style={{position:'relative',top:25}}>
          <ProgressBar />
        </View>
        <View style={phonenumber.logoSection}>
          <MainIdLogoGreen />
        </View>
          <Form
          style={{
            flex: 0,
            alignContent:'center',
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'center'
          }}
          >
          <View style={{alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontFamily:'Ubuntu-Regular',opacity:0.7, fontSize:18, color:BaseColor.grey}}>Input your Bank Verification Number</Text>
          </View>

            <Item floatingLabel style={{marginEnd:10,borderBottomColor:BaseColor.dark, marginTop:40, width:'90%', alignContent:"center",}}>
              <Label style={{color:BaseColor.grey, fontFamily: 'Ubuntu-Regular',}}><Icon name="phone" size={20} /> BVN</Label>
              <Input  onChangeText={(newText) => this.setState({ bvn: newText })} style={{padding:10,marginTop:4, borderBottomColor: BaseColor.dark, fontFamily: "Ubuntu-Regular", color: BaseColor.base}} />
            </Item>
            <View style={{flex:1,marginTop:'50%', alignSelf:"center"}}>
            <Button style={{width:250,borderColor:BaseColor.dark, justifyContent:'center'}}  bordered>
            <Text style={{ fontSize:18,fontFamily:'HurmeGeometricSans1 Bold',color:BaseColor.dark,}}>VERIFY</Text>
          </Button>
            </View>

          </Form>
      </Content>
      </Container>
      </ImageBackground>
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


