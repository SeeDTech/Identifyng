import React, { Component } from 'react'
import {View, Image,  Animated, Easing, Dimensions, ImageBackground  } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Right, Body, Text, Button,
        Grid, Row, Col, H1, H3} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {CardStyle, InfoText} from './style'
import StyledCard from './StyledCard'
import AnimLogo from '../buttons/AnimatedLogo';
import IDBackground from '../Backgrounds/Spiral';

const AnimatedCard = Animated.createAnimatedComponent(StyledCard)
const AnimatedView = Animated.createAnimatedComponent(View)
const AnimatedRow = Animated.createAnimatedComponent(Row)
class DriversLicense extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardHeight: new Animated.Value(0),
            isOpen: false,
            testh: "100px"

        }
    }

    expandCard = () => {
        this.setState({isOpen: !this.state.isOpen,})
        Animated.timing(
            this.state.cardHeight,
            {
                toValue: this.state.isOpen ? 0 : 1,
                duration: 500,
                easing: Easing.linear,
            }
        ).start()
    }
    render() {
        const {isOpen} = this.state;
        const {name, imgLink} = this.props
        const {width, height} = Dimensions.get('window')
        const cardHeight = this.state.cardHeight.interpolate({
            inputRange: [0, 1],
            outputRange: [(height-110)/4, height-100]
        })

        const itemOpacity = this.state.cardHeight.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        })
        const itemOpacityb = this.state.cardHeight.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
        })
        const avatar = '../../assests/img/avatar.png'
        return (
            <Animated.View>
            <AnimatedCard  height={cardHeight} bgColor="#039be5">
            {
            // <View style={{ flex:1, position: 'absolute',  opacity: 0.3}}>
            // <IDBackground/>
            // </View>
            }
            <Grid>
            <Row style={CardStyle.row}>
            <Text style={{margin:0, padding:0}}>{"Driver's License"}</Text>
            <Thumbnail style={{ marginLeft: "auto"}} square resizeMode="contain"  source={require('../../assests/img/nimc.png')}/>
            </Row>
            <AnimatedView style={{ opacity:itemOpacityb, height:"auto", }}>
            <Row style={{...CardStyle.rowb}}>
            <InfoText isKey>HOLDER:</InfoText><InfoText>Onoja Oche Ben</InfoText>
            </Row>
            {
                <Row style={{...CardStyle.rowb}}>
                <InfoText isKey>DOCUMENT NUMBER:</InfoText><InfoText>4812640614</InfoText>
                </Row>
            }
            </AnimatedView>
            <AnimatedView style={{ opacity:itemOpacity, height:"auto", }}>
            <Image style={CardStyle.avatar} source={require(avatar)} resizeMode="contain"/>
            
            <Row style={{...CardStyle.row}}>
            <Col style={CardStyle.col}><InfoText isKey>SURNAME:</InfoText><InfoText>Onoja</InfoText></Col>
            <Col style={CardStyle.col}><InfoText isKey>FIRSTNAME:</InfoText><InfoText>Oche</InfoText></Col>
            <Col style={CardStyle.col}><InfoText isKey>MIDDLENAME:</InfoText><InfoText>Ben</InfoText></Col>
            </Row>
            <Row style={{...CardStyle.row}}>
            <Col style={CardStyle.col}><InfoText isKey>DOB:</InfoText><InfoText>01/10/60</InfoText></Col>
            <Col style={CardStyle.col}><InfoText isKey>ISSUED:</InfoText><InfoText>28/8/14</InfoText></Col>
            <Col style={CardStyle.col}><InfoText isKey>EXPIRY:</InfoText><InfoText>01/19</InfoText></Col>
            </Row>
            <Row style={{...CardStyle.row}}>
            <Col style={CardStyle.col}><InfoText isKey>NATIONALITY:</InfoText><InfoText>NGA</InfoText></Col>
            <Col style={{...CardStyle.col, justifyContent:"center"}}><InfoText isKey>SEX:</InfoText><InfoText>M</InfoText></Col>
            <Col style={CardStyle.col}><InfoText isKey>HEIGHT:</InfoText><InfoText>{"178cm"}</InfoText></Col>
            </Row>
            <Row style={{...CardStyle.rowb}}>
            <InfoText isKey>DOCUMENT NUMBER:</InfoText><InfoText>4812640614</InfoText>
            </Row>
            <Row style={{...CardStyle.row, paddingTop: 20}}>
            <Col style={CardStyle.col}><H1>5394</H1></Col>
            <Col style={CardStyle.col}><H1>5394</H1></Col>
            <Col style={CardStyle.col}><H1>5394</H1></Col>
            <Col style={CardStyle.col}><H1>5394</H1></Col>
            </Row>
            
            </AnimatedView>
            </Grid>
            {
                // <Row style={{...CardStyle.expandButton, ...CardStyle.rowb,  right: 10, left: 0}}>
                // <InfoText isKey>DOCUMENT NUMBER:</InfoText><InfoText>4812640614</InfoText>
                // </Row>
            }
            {
                // <AnimatedRow style={{...CardStyle.rowb, opacity:itemOpacity}}>
                // <InfoText isKey>DOCUMENT NUMBER:</InfoText><InfoText>4812640614</InfoText>
                // </AnimatedRow>
            }
            <Button style={CardStyle.expandButton} 
            onPress={()=>this.expandCard()}><Icon name={isOpen ? "expand-less" : "expand-more"} size={25} color="#000"/>
            {/*<Text style={{color:"#000"}}>{isOpen? "Less": "M0re"}</Text>*/}
            </Button>
            </AnimatedCard>
            </Animated.View>
        )
    }
}

export default DriversLicense