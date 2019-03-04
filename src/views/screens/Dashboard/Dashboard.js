import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { BaseColor } from '../../../styles/theme/color';
import {Header, Container, Content} from 'native-base'
import DashboardStyle from './style'
import Cards from '../../../components/Cards/Cards'
import NimcCard from '../../../components/Cards/NimcCard';
import DriversLicense from '../../../components/Cards/DriversLicense';

const IDs = [
  {name:'NIMC', imgLink:'../../assests/img/nimc.png', id:'nimc'},
  {name: "Driver's License", imgLink:'../../assests/img/nimc.png', id:'frsc'},
  {name: "Voters Card", imgLink:'../../assests/img/nimc.png', id:'pvc'},
  {name: "International Passport", imgLink:'../../assests/img/nimc.png', id:'passport'},
]
export class Dashboard extends Component {
  render() {
    const IDlist= IDs.map((item, index) => (
      <Cards key={item.name} name={item.name} imgLink={item.imgLink}/>
    ))
    return (
      <Container>
      <StatusBar backgroundColor="#daa520" barStyle="light-content" />
      <Content>
        <NimcCard/>
        <DriversLicense/>
      </Content>
      </Container>
    )
  }
}

export default Dashboard
