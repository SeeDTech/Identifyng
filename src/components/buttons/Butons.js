import { TouchableOpacity, Platform, View, Text, StyleSheet } from 'react-native'
import React, { Component } from 'react';
import Icon from '../Icons/Ionicon'
import { ArrowRight } from '../Icons/SvgIcons/Icons'
import { styles, buttons } from './styles';
import { Button } from 'native-base';
//import {Button} from 'native-base';

export const TransparentButton = (props) => {
    handleOnPress = (e) => {
        props.onPress()
    }
    const { title, btnStyle, txtStyle } = props;
    return (
        <View style={styles.container}>
            <Button bordered onPress={handleOnPress} style={[buttons.transparent, btnStyle]}>
                <Text style={[buttons.greenText, txtStyle]}>{title}</Text>
            </Button>
            {/* {<TouchableOpacity onPress={handleOnPress} style={buttons.transparent}
            >
                <Text style={buttons.greenText} >{title}</Text>
            </TouchableOpacity>} */}
        </View>
    )
}
export const Btn = (props) => {
    handleOnPress = (e) => {
        props.onPress();
    }

    const { title, btnStyle, txtStyle } = props;

    return (
        <View style={styles.container}>
            <Button onPress={handleOnPress} success style={[buttons.primary, btnStyle]}>
                <Text style={[buttons.whitetext, txtStyle]}>{title}</Text>
            </Button>
        </View>
    )
}
// export const Button = (props) => {
//     handleOnPress = (e) => {
//         props.onPress();
//     }
//     const { title,btnStyle } = props;
//     return (
//         <View style={styles.container}>
//             <TouchableOpacity onPress={handleOnPress} style={buttons.primary}
//             >
//                 <Text style={buttons.whitetext}>{title}</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

export const ButtonInverse = (props) => {
    handleOnPress = (e) => {
        props.onPress();
    }

    const { title, btnStyle, txtStyle } = props;
    return (
        <Button  primary onPress={handleOnPress} style={[buttons.secondary, btnStyle]}>
            <Text style={[buttons.greenText, txtStyle]}>{title}</Text>
        </Button>
    )
}


export const ButtonNoBorder = (props) => {
    handleOnPress = (e) => {
        props.onPress();
    }
    const { title, txtStyle, btnStyle,children } = props;
    return (
        <View style={styles.container}>
            <Button Button transparent success onPress={handleOnPress} style={[buttons.noBorder, btnStyle]} >
            <Text style={[buttons.greenText, txtStyle]} >{title}</Text>
            {children}
            </Button>
        </View>
    )
}

export const ButtonNoBorderInverse = (props) => {
    handleOnPress = (e) => {
        props.onPress();
    }
    const { title, txtStyle, btnStyle } = props;
    return (
        <View style={styles.container}>
            <Button Button transparent success onPress={handleOnPress} style={[buttons.noBorder, btnStyle]}>
                <Text style={[buttons.whitetext, txtStyle]}></Text>
            </Button>
            {/* <TouchableOpacity  onPress={handleOnPress} style={buttons.noBorder}
            >
                <Text style={buttons.whitetext}>{title}</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export const NextButton = (props) => {
    handleOnPress = (e) => {
        props.onPress();
    }

    return (
        <View style={styles.container}>
            <Button rounded onPress={handleOnPress} style={buttons.circle}>
                <View style={{marginLeft:'18%'}}>
                    {props.children}
                </View>
            </Button>
        </View>
    )
}

