import React, { Component } from 'react'
import {View, } from 'react-native'
import { Animated, Easing, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Right, Body, Text, Button,} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
// import CardStyle from './style'
import StyledCard from './StyledCard'

const AnimatedCard = Animated.createAnimatedComponent(StyledCard)
class Cards extends Component {
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
        return (
            <Animated.View>
            <AnimatedCard  height={cardHeight}
            // style={{height: cardHeight}} 
            ><Text>{name}</Text>
            <Button style={{ position:"absolute", elevation:0, backgroundColor:"#fff", bottom: 0, right:0, margin: 10}} 
            onPress={()=>this.expandCard()}><Icon name={isOpen ? "expand-less" : "expand-more"} size={25} color="#000"/>
            {/*<Text style={{color:"#000"}}>{isOpen? "Less": "M0re"}</Text>*/}
            </Button>
            <Thumbnail style={{ marginLeft: "auto"}} square resizeMode="contain"  source={require('../../assests/img/nimc.png')}/>
            </AnimatedCard>
            </Animated.View>
        )
    }
}

export default Cards