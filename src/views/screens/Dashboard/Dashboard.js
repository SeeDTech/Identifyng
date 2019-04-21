import React, { Component } from 'react'
import { Text, View, StatusBar, Animated, Easing, WebView, Dimensions, ImageBackground, } from 'react-native'
import { BaseColor } from '../../../styles/theme/color';
import {Header, Container, Content, Button,} from 'native-base'
import DashboardStyle from './style'
import Cards from '../../../components/Cards/Cards'
import NimcCard from '../../../components/Cards/NimcCard';
import DriversLicense from '../../../components/Cards/DriversLicense';
import Passport from '../../../components/Cards/Passport';
import VotersCard from '../../../components/Cards/VotersCard';
import Card from '../../../components/Cards/Card';
import ExpandedCard from '../../../components/Cards/ExpandedCard'
import Icon from 'react-native-vector-icons/MaterialIcons'


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
      activeCard: 6,
      yOffset: null, 
      xOffset: null, 
      selectedCard: null,
      webUrl:0
    }
  }
  setActiveCard=(activeCard)=> {
    console.log("setting Active Card")
    this.setState({activeCard:activeCard})
  }

  setWebUrl=(webUrl)=> {
    this.setState({webUrl:webUrl})
  }
  render() {
    const {activeCard, webUrl} = this.state
    // const IDlist= IDs.map((item, index) => (
    //   <Cards key={item.name} name={item.name} imgLink={item.imgLink}/>
    // ))
    const {width, height} = Dimensions.get('window')
    return (
      <Container>
      <ImageBackground style={DashboardStyle.backgroundImage} source={require('../../../components/logo/images/dashboard.png')} >
     
      {activeCard === 0 && 
        <WebView
        source={{uri: webUrl === 3 ? 'https://immigration.gov.ng' : webUrl == 4 ? 'https://www.inecnigeria.org/' : 'https://google.com'}}
        style={{marginTop: 0, flex:1}}
        />
      }
      {
        activeCard === 0 &&
        <Button style={DashboardStyle.closeWebView} 
        onPress={()=>this.setState({activeCard:6})}><Icon name="close" size={25} color="#000"/>
        {/*<Text style={{color:"#000"}}>{isOpen? "Less": "M0re"}</Text>*/}
        </Button>
      }
      {activeCard!==0 &&
        <Content contentContainerStyle={{flex: 1, justifyContent:"space-around", paddingTop:20, paddingBottom:20}}>
 
      
        <NimcCard hidden={activeCard<5 && activeCard!==1} setActiveCard={(activeCard)=>this.setActiveCard(activeCard)} setWebUrl={(webUrl)=>this.setWebUrl(webUrl)}  style={{position:"fixed", opacity: 0}}/>
        <DriversLicense hidden={activeCard<5 && activeCard!==2} setActiveCard={(activeCard)=>this.setActiveCard(activeCard)} setWebUrl={(webUrl)=>this.setWebUrl(webUrl)} style={{position:"absolute"}}/>
        <Passport hidden={activeCard<5 && activeCard!==3} setActiveCard={(activeCard)=>this.setActiveCard(activeCard)} setWebUrl={(webUrl)=>this.setWebUrl(webUrl)} style={{position:"absolute"}}/>
        <VotersCard hidden={activeCard<5 && activeCard!==4} setActiveCard={(activeCard)=>this.setActiveCard(activeCard)} setWebUrl={(webUrl)=>this.setWebUrl(webUrl)} style={{position:"absolute"}}/>
      {
      //   [1, 2, 3, 4].map(i => (
      //   <Card
      //     key={i}
      //     id={i}
      //     style={{flex:1}}
      //     selectCard={(px, py, id) =>
      //       this.setState({ yOffset: py, xOffset: px, selectedCard: id })
      //     }
      //   />
      // ))
    }
      
      {
      //   this.state.selectedCard && (
      //   <ExpandedCard
      //     yOffset={this.state.yOffset}
      //     xOffset={this.state.xOffset}
      //     unselectCard={() => this.setState({ selectedCard: null })}
      //   />
      // )
    }
      </Content>
      }
      </ImageBackground>
      </Container>
    )
  }
}

export default Dashboard

// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableWithoutFeedback
// } from "react-native";

// import Card from "../../../components/Cards/Card";
// import ExpandedCard from "../../../components/Cards/ExpandedCard";

// export default class Dashboard extends React.Component {
//   state = { yOffset: null, xOffset: null, selectedCard: null };

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.title}>
//           <Text style={styles.titleText}>Expanding ScrollView Example</Text>
//         </View>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={styles.list}
//         >
//           {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
//             <Card
//               key={i}
//               id={i}
//               selectCard={(px, py, id) =>
//                 this.setState({ yOffset: py, xOffset: px, selectedCard: id })
//               }
//             />
//           ))}
//         </ScrollView>

//         {this.state.selectedCard && (
//           <ExpandedCard
//             yOffset={this.state.yOffset}
//             xOffset={this.state.xOffset}
//             unselectCard={() => this.setState({ selectedCard: null })}
//           />
//         )}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#05386b"
//   },
//   title: {
//     height: 60,
//     backgroundColor: "#edf5e1",
//     paddingTop: 20,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   titleText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#05386b"
//   },
//   list: {
//     alignItems: "center",
//     paddingTop: 20
//   }
// });
