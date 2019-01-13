import React, { Component } from 'react'
import {  TextInput, Animated,Easing,TouchableOpacity } from 'react-native'
import Ionicon from './Icons/Ionicon';
import { BaseColor } from '../styles/theme/color';


export class SearchBar extends Component {
    constructor(props){
        super(props)
        this.animatedValue = new Animated.Value(0);

    }
    state={
        searchKey:'',
        searchBarVisibility:'',
    }
    componentDidMount=()=> {
        // this.animate;
    }
    animate() {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 650,
                easing: Easing.linear
            }
        ).start()
    }
    render() {
        const increaseWidth = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 150]
        })

        return (
            <Animated.View  style={{width:increaseWidth,marginRight: 15,}}>
                <TouchableOpacity  style={{backgroundColor:'transparent', zIndex:300, position:'absolute',left: 5, top: 5}}>
                <Ionicon  name="search" style={{ position: 'absolute', color: BaseColor.grey, zIndex: 100,  }} size={20} />
                </TouchableOpacity>
                <TextInput onFocus={()=>this.animate()} onChangeText={(newText) => this.setState({ searchKey: newText })}  style={{ borderWidth: 2, width: '100%', height: 30, borderRadius: 30, borderColor: '#f4f4f4', backgroundColor: '#e0e0e0', color: BaseColor.grey,  padding: 0, paddingHorizontal: 30, marginVertical: 0, fontSize: 11, fontFamily: "Ubuntu-Regular" }} >
                </TextInput>
            </Animated.View>
        )
    }
}

export default SearchBar