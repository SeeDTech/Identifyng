import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions } from 'react-native'
import { MainIdLogoGreen } from '../../../components/logo/Logo';
import { Button, TransparentButton, ButtonInverse } from '../../../components/buttons/Butons';
import Swiper from 'react-native-swiper';
import {Container, Content} from 'native-base'
import { BaseColor } from '../../../styles/theme/color';
import slides from './styles';

class SlidingScreen extends Component {
  render() {
    
    return (
      <Container style={{flex:1, alignContent:'center'}}>
      <Swiper showsPagination={true} autoplay={true} dotStyle={slides.dotstyle} activeDotStyle={slides.activeDotStlye}>
        <ImageBackground style={slides.backgroundImage} source={require('../../../components/logo/images/welcomebackground.png')} >
        <View style={slides.SlideTextSection} >
        <View style={slides.slideoneSection}>
          <Text style={slides.slideOneText}>Slide One</Text>
        </View>
        </View>
          </ImageBackground>
          <ImageBackground style={slides.backgroundImage} source={require('../../../components/logo/images/welcomebackgroundb.png')}>
        <View style={slides.SlideTextSection}>
        <View style={slides.slideoneSection}>
          <Text style={slides.slideTwoText}>Slide Two</Text>
        </View>
          
        </View>
        </ImageBackground>
        <ImageBackground style={slides.backgroundImage} source={require('../../../components/logo/images/welcomebackgroundc.png')}>

        <View style={slides.SlideTextSection}>
          <Text style={slides.slideThreeText}>Slide Three</Text>
        </View>
        </ImageBackground>
      </Swiper>
      <View style={slides.logoSection}>
          <Text style={slides.logoText}>Welcome to</Text>
          <MainIdLogoGreen/>
      </View>
      <View style={slides.buttonSection}>
          <ButtonInverse onPress={()=>{this.props.navigation.navigate('Welcome')}}  title="CHECK IN"/>
      </View>
      </Container>
    )
  }
}


export default SlidingScreen
