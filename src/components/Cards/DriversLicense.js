import React, { Component } from 'react'
import {View, Image,  Animated, Easing, Dimensions, ImageBackground, TouchableWithoutFeedback  } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Right, Body, Text, Button,
        Grid, Row, Col, H1, H3} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {CardStyle, InfoText} from './style'
import StyledCard from './StyledCard'
// import AnimLogo from '../buttons/AnimatedLogo';
// import IDBackground from '../Backgrounds/Spiral';

const AnimatedCard = Animated.createAnimatedComponent(StyledCard)
const AnimatedView = Animated.createAnimatedComponent(View)
const AnimatedRow = Animated.createAnimatedComponent(Row)
let cardScale = new Animated.Value(1)
class DriversLicense extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardHeight: new Animated.Value(0.25),
            isOpen: false,
            testh: "100px"

        }
    }
    // componentDidUpdate = (prevProps)=>{
    //     if(this.props.hidden !== prevProps.hidden) {
    //         if(this.props.hidden) {
    //             Animated.timing(
    //                 this.state.cardHeight,
    //                 {
    //                     toValue: 0,
    //                     duration: 700,
    //                     easing: Easing.linear,
    //                     // useNativeDriver: true
    //                 }
    //             ).start()
    //         } else {
    //             Animated.timing(
    //                 this.state.cardHeight,
    //                 {
    //                     toValue: 0.25,
    //                     duration: 500,
    //                     easing: Easing.linear,
    //                     // useNativeDriver: true
    //                 }
    //             ).start()
    //         }
    //     }
    // }

    componentDidUpdate = (prevProps)=>{
        if(this.props.hidden !== prevProps.hidden) {
            if(this.props.hidden) {
                Animated.timing(
                    cardScale,
                    {
                        toValue: 0,
                        duration: 250,
                        easing: Easing.linear,
                        // useNativeDriver: true
                    }
                ).start()
            } else {
                Animated.timing(
                    cardScale,
                    {
                        toValue: 1,
                        duration: 300,
                        easing: Easing.linear,
                        delay: 300
                        // useNativeDriver: true
                    }
                ).start()
            }
        }
    }

    expandCard = () => {
        this.setState(prevState=>({isOpen: !prevState.isOpen,}))
        const activeCard=this.state.isOpen ? 6 : 2;
        this.props.setActiveCard(activeCard);
        Animated.timing(
            this.state.cardHeight,
            {
                toValue: this.state.isOpen ? 0.25 : 1,
                duration: 500,
                easing: Easing.linear,
                delay: 300
                // useNativeDriver: true
            }
        ).start()
    }
    render() {
        const {isOpen} = this.state;
        const {name, imgLink} = this.props
        const {width, height} = Dimensions.get('window')
        const cardHeight = this.state.cardHeight.interpolate({
            inputRange: [0, 0.25, 1],
            outputRange: [0, (height-110)/5, height/1.3]
        })

        const itemOpacity = this.state.cardHeight.interpolate({
            inputRange: [0, 0.25, 1],
            outputRange: [0, 0, 1]
        })
        const itemOpacityb = this.state.cardHeight.interpolate({
            inputRange: [0, 0.25, 1],
            outputRange: [1, 1, 0]
        })
        const margin = this.state.cardHeight.interpolate({
            inputRange: [0, 0.25, 1],
            outputRange: [0, 4, 4]
        })
        const translateValue = this.state.cardHeight.interpolate({
            inputRange: [0, 0.25, 1],
            outputRange: [0, 0, -((height-650)/5) ]
        })
        const avatar = '../../assests/img/avatar.png';
        const qr = '../../assests/img/qr.png'
        return (
            <TouchableWithoutFeedback onPress={()=> !isOpen && this.expandCard()}>
            <Animated.View>
            <AnimatedCard  height={cardHeight} translateY={translateValue} scaleY={cardScale} margin={margin} bgColor="#039be5">
            {
            // <View style={{ flex:1, position: 'absolute',  opacity: 0.3}}>
            // <IDBackground/>
            // </View>
            }
            <Grid>
            <Row style={{...CardStyle.row, paddingBottom:0}}>
            <Text style={{...CardStyle.cardHeader}}>{"Driver's License"}</Text>
            <Thumbnail style={{ marginLeft: "auto"}} square resizeMode="contain"  source={require('../../assests/img/frsc.png')}/>
            </Row>
            <AnimatedView style={{ opacity:itemOpacityb, height:"auto", }}>
            <Row style={{...CardStyle.rowb}}>
            <InfoText isKey>HOLDER:</InfoText><InfoText>Oluwaseun Ayerinde</InfoText>
            </Row>
            {
                <Row style={{...CardStyle.rowb}}>
                <InfoText isKey>DOCUMENT NUMBER:</InfoText><InfoText>4812640614</InfoText>
                </Row>
            }
            </AnimatedView>
            <AnimatedView style={{ opacity:itemOpacity, height:"auto", }}>
            <Image style={CardStyle.avatar} source={require(avatar)} resizeMode="contain"/>
            
            <Row style={{...CardStyle.row,}}>
            <Col style={CardStyle.col}><InfoText isKey>SURNAME:</InfoText><InfoText>Ayerinde</InfoText></Col>
            <Col style={CardStyle.col}><InfoText isKey>FIRSTNAME:</InfoText><InfoText>Oluwaseun</InfoText></Col>
            
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
            <Col style={CardStyle.col}><H1 style={CardStyle.cardHeader}>5394</H1></Col>
            <Col style={CardStyle.col}><H1 style={CardStyle.cardHeader}>5394</H1></Col>
            <Col style={CardStyle.col}><H1 style={CardStyle.cardHeader}>5394</H1></Col>
            <Col style={CardStyle.col}><H1 style={CardStyle.cardHeader}>5394</H1></Col>
            </Row>

            <Row>
            <Image style={{...CardStyle.avatar, height: 50}} source={require(qr)} resizeMode="contain"/>
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
            onPress={()=>this.expandCard()}><Icon name={isOpen ? "expand-less" : "expand-more"} size={25} color="#fff"/>
            {/*<Text style={{color:"#000"}}>{isOpen? "Less": "M0re"}</Text>*/}
            </Button>
            </AnimatedCard>
            </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}

export default DriversLicense