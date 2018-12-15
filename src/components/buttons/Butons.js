import { TouchableOpacity, Platform, View, Text, StyleSheet } from 'react-native'
import React, { Component } from 'react';
import Icon from '../Icons/Ionicon'
import {ArrowRight} from '../Icons/SvgIcons/Icons'
import { styles, buttons } from './styles';


export const TransparentButton = (props) => {
    handleOnPress = (e) => {
        props.onPress()
    }
    const { title } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleOnPress} style={buttons.transparent}
            >
                <Text style={buttons.greenText} >{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export const Button = (props) => {
    handleOnPress = (e) => {
        props.onPress();
    }
    const { title,btnStyle } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleOnPress} style={buttons.primary}
            >
                <Text style={buttons.whitetext}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export const ButtonInverse = (props) => {
    handleOnPress = (e) => {
        props.onPress();
    }
    const { title,btnStyle } = props;
    return (
        <View key={title} style={[styles.container, btnStyle]}>
            <TouchableOpacity onPress={handleOnPress} style={buttons.secondary}
            >
                <Text style={buttons.greenText}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}


export const ButtonNoBorder = (props) => {
    handleOnPress = (e) => {
        props.onPress();
    }
    const { title, txtStyle } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={handleOnPress} style={buttons.noBorder}
            >
                <Text style={[buttons.greenText,txtStyle]}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export const ButtonNoBorderInverse = (props) => {
    handleOnPress = (e) => {
        props.onPress();
    }
    const { title } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={handleOnPress} style={buttons.noBorder}
            >
                <Text style={buttons.whitetext}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export const NextButton = (props) => {
    handleOnPress = (e) => {
        props.onPress();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleOnPress} style={buttons.circle}
            >
                
                <View style={{marginTop:14}}>
                    <ArrowRight/>
                    </View>
            </TouchableOpacity>
        </View>
    )
}

