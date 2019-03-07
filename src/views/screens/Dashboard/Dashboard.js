import React, { Component } from 'react'
import { Text, View, StatusBar, Animated, Easing } from 'react-native'
import { BaseColor } from '../../../styles/theme/color';
import {Header, Container, Content} from 'native-base'
import DashboardStyle from './style'
import Cards from '../../../components/Cards/Cards'
import NimcCard from '../../../components/Cards/NimcCard';
import DriversLicense from '../../../components/Cards/DriversLicense';
import Passport from '../../../components/Cards/Passport';
import VotersCard from '../../../components/Cards/VotersCard';

// const IDs = [
//   {name:'NIMC', imgLink:'../../assests/img/nimc.png', id:'nimc'},
//   {name: "Driver's License", imgLink:'../../assests/img/nimc.png', id:'frsc'},
//   {name: "Voters Card", imgLink:'../../assests/img/nimc.png', id:'pvc'},
//   {name: "International Passport", imgLink:'../../assests/img/nimc.png', id:'passport'},
// ]

const AnimatedView = Animated.createAnimatedComponent(View)
export class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={
      activeCard: 6
    }
  }
  setActiveCard=(activeCard)=> {
    console.log("setting Active Card")
    this.setState({activeCard:activeCard})
  }
  render() {
    const {activeCard} = this.state
    // const IDlist= IDs.map((item, index) => (
    //   <Cards key={item.name} name={item.name} imgLink={item.imgLink}/>
    // ))
    return (
      <Container>
      <StatusBar backgroundColor="#daa520" barStyle="light-content" />
      <Content>
        <NimcCard hidden={activeCard<5 && activeCard!==1} setActiveCard={(activeCard)=>this.setActiveCard(activeCard)}/>
        <DriversLicense hidden={activeCard<5 && activeCard!==2} setActiveCard={(activeCard)=>this.setActiveCard(activeCard)}/>
        <Passport hidden={activeCard<5 && activeCard!==3} setActiveCard={(activeCard)=>this.setActiveCard(activeCard)}/>
        <VotersCard hidden={activeCard<5 && activeCard!==4} setActiveCard={(activeCard)=>this.setActiveCard(activeCard)}/>
      </Content>
      </Container>
    )
  }
}

export default Dashboard
