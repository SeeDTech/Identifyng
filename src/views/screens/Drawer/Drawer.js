import React, { Component } from 'react'
import { Text, View,StyleSheet, Image, StatusBar } from 'react-native'
import { DrawerItems } from 'react-navigation'
import { Container, Content, Header, Body } from 'native-base';
import { BaseColor } from '../../../styles/theme/color';
import Ionicon from '../../../components/Icons/Ionicon';
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../../../components/buttons/styles';

export class Drawer extends Component {
    
    render() {
        return (
            <Container>
                <StatusBar
                    backgroundColor={BaseColor.base}
                    barStyle="light-content" />
                <Header style={{ width: '100%', backgroundColor: BaseColor.dark, height: 180 }}>
                    <Body>
                        <View style={{ alignItems: 'flex-start', flexDirection: "column", padding: 10 }}>
                            <View style={{ width: 50, height: 50, borderRadius: 50, borderBottomColor: BaseColor.light, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(10,50,10,0.2)' }}>
                                {/* <Ionicon name='User' size={40} style={{padding:3}}/> */}
                                <Image source={require('../../../assests/img/pp.jpg')} width={50} height={50} style={{borderRadius:50, borderColor: BaseColor.light,borderWidth:1,marginBottom:10}} alt='authUser' />
                                {/* <Icon name="user" size={50} style={{ color: BaseColor.light }} /> */}
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 5 }}>
                                <Icon name='user-o' size={16} style={{marginEnd:10,color:BaseColor.light}}></Icon>
                                <Text style={{ fontSize: 16, fontFamily: 'Ubuntu-Bold', color: BaseColor.light }}>Oluwaseun Ayerinde</Text>
                            </View>
                            <View style={{ alignContent: "center", margin: 2  }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name='envelope-o' size={16} style={{marginEnd:10,color:BaseColor.light}}></Icon>
                                    <Text style={{ fontSize: 16, fontFamily: 'Ubuntu-Regular', color: BaseColor.light, }}>oluwaseun@gmail.com</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <Ionicon name="card" size={16} style={{ color: BaseColor.light }} />
                                <Text style={{ fontSize: 16, color: BaseColor.light, fontFamily: 'Ubuntu-MediumItalic', marginLeft: 5 }}>identify-0000123</Text>
                            </View>
                        </View>
                    </Body>
                </Header>
                <Content>
                   <View style={{height:'100%'}} >
                   <LinearGradient style={{height:'100%'}} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[BaseColor.dark,'#44bba1f3','#52dabc']} style={{flex:0}}>
                        <DrawerItems {...this.props} />
                        </LinearGradient>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default Drawer
