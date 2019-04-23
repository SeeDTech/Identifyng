import React, { Component } from 'react'
import { View, Image, Animated, Easing, Dimensions, ImageBackground, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import {
    Container, Header, Content, Card, CardItem, Thumbnail, Left, Right, Body, Text, Button,
    Grid, Row, Col, H1, H3
} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { CardStyle, InfoText } from './style'
import StyledCard from './StyledCard'
import QRCode from 'react-native-qrcode-svg';
import { BaseColor } from '../../styles/theme/color';
// import AnimLogo from '../buttons/AnimatedLogo';
// import IDBackground from '../Backgrounds/Spiral';

const AnimatedCard = Animated.createAnimatedComponent(StyledCard)
const AnimatedView = Animated.createAnimatedComponent(View)
const AnimatedRow = Animated.createAnimatedComponent(Row)

let cardScale = new Animated.Value(1)
class LasrraCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardHeight: new Animated.Value(0.25),
            isOpen: false,
            testh: "100px",
            cardScale: new Animated.Value(1)

        }
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.hidden !== prevProps.hidden) {
            if (this.props.hidden) {
                Animated.timing(
                    cardScale,
                    {
                        toValue: 0,
                        duration: 300,
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
        console.log("expanding card")
        this.setState(prevState => ({ isOpen: !prevState.isOpen, }))
        const activeCard = this.state.isOpen ? 6 : 1;
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
        const { isOpen, } = this.state;
        const { name, imgLink } = this.props
        const { width, height } = Dimensions.get('window')
        const cardHeight = this.state.cardHeight.interpolate({
            inputRange: [0, 0.25, 1],
            outputRange: [0, (height - 110) / 5, height / 1.3]
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

        const cardScaleVal = this.state.cardScale.interpolate({
            inputRange: [0, 0.25, 1],
            outputRange: [0, 1, 0]
        })
        const cardScaleb = this.state.cardHeight.interpolate({
            inputRange: [0, 0.25, 1],
            outputRange: [2, 1, 0]
        })

        const translateValue = this.state.cardHeight.interpolate({
            inputRange: [0, 0.25, 1],
            outputRange: [0, 0, 50]
        })
        // const avatar = '../../assests/img/avatar.png'
        const avatar = '../../assests/img/passport.png';
        const logo = '../../assests/img/lasrra.png';
        const qr = '../../assests/img/qr.png';
        return (
            <TouchableWithoutFeedback onPress={() => !isOpen && this.expandCard()}>
                <Animated.View>
                    <AnimatedCard height={cardHeight} translateY={translateValue} scaleY={cardScale} elavation={9} margin={margin} bgColor="#43a047">
                        {
                            // <View style={{ flex:1, position: 'absolute',  opacity: 0.3}}>
                            // <IDBackground/>
                            // </View>
                        }
                        <Grid>
                            <Row style={{ ...CardStyle.row, paddingBottom: 0 }}>
                                <Text style={{ ...CardStyle.cardHeader, fontSize: 17}}>Lagos State Residents Registration Agency</Text>
                                <Image style={{...CardStyle.logob, }} source={require(logo)} resizeMode="contain" />
                            </Row>

                            <AnimatedView style={{ opacity: itemOpacityb, height: "auto", }}>
                                <Row style={{ ...CardStyle.rowb }}>
                                    <InfoText isKey>HOLDER:</InfoText><InfoText>Oluwaseun Ayerinde</InfoText>
                                </Row>
                                {
                                    <Row style={{ ...CardStyle.rowb }}>
                                        <InfoText isKey>DOCUMENT NUMBER:</InfoText><InfoText>4812640614</InfoText>
                                    </Row>
                                }
                            </AnimatedView>

                            <AnimatedView style={{ opacity: itemOpacity, height:'auto', flex: 0,
                                paddingTop: 25,
                                paddingBottom:25,
                                marginLeft:-10, marginRight:-10,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'stretch',  backgroundColor:'#1b5e20'   }}>
                                <View style={{width: "55%", }}>
                                    <View style={CardStyle.infoContainer}>
                                        <View style={CardStyle.infoView}>
                                        <InfoText isKey>SURNAME</InfoText>
                                        <InfoText >Ayerindee</InfoText>
                                        </View>
                                        <View style={CardStyle.infoView}>
                                        <InfoText isKey>FIRSTNAME</InfoText>
                                        <InfoText >Oluwaseun</InfoText>
                                        </View>
                                    </View>

                                    

                                    <View style={CardStyle.infoContainer}>
                                        <View style={CardStyle.infoView}>
                                        <InfoText isKey>DOB:</InfoText>
                                        <InfoText >01/10/60</InfoText>
                                        </View>
                                        <View style={CardStyle.infoView}>
                                        <InfoText isKey>NATIONALITY:</InfoText>
                                        <InfoText >NGA</InfoText>
                                        </View>
                                    </View>
                                    
                                    <View style={CardStyle.infoContainer}>
                                        <View style={CardStyle.infoView}>
                                        <InfoText isKey>SEX:</InfoText>
                                        <InfoText >M</InfoText>
                                        </View>
                                        <View style={CardStyle.infoView}>
                                        <InfoText isKey>HEIGHT:</InfoText>
                                        <InfoText >178</InfoText>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                <Image style={CardStyle.avatar} source={require(avatar)} resizeMode="contain" />
                                <View style={CardStyle.infoContainerb}>
                                        <View style={CardStyle.infoViewb}>
                                        <InfoText isKey>ISSUED:</InfoText>
                                        <InfoText >28/8/14</InfoText>
                                        </View>
                                        <View style={CardStyle.infoViewb}>
                                        <InfoText isKey>EXPIRY:</InfoText>
                                        <InfoText >28/8/21</InfoText>
                                        </View>
                                    </View>
                                </View>
                                
                            </AnimatedView>
                            <AnimatedView style={{ ...CardStyle.qr, opacity: itemOpacity, flex: 0,  flexDirection: 'column',
                            justifyContent: 'center',}}>
                                <QRCode
                                    color={BaseColor.light}
                                    activeOpacity={0.7}
                                    value='Anything would do!'
                                    backgroundColor='transparent'
                                    size={110}
                                />
                                <InfoText style={{alignSelf: 'center'}}>4812640614</InfoText>
                            </AnimatedView>
                        </Grid>
                        
                        <Button style={CardStyle.expandButton}
                            onPress={() => this.expandCard()}><Icon name={isOpen ? "expand-less" : "expand-more"} size={25} color="#fff" />
                            {/*<Text style={{color:"#000"}}>{isOpen? "Less": "M0re"}</Text>*/}
                        </Button>
                    </AnimatedCard>
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}

export default LasrraCard