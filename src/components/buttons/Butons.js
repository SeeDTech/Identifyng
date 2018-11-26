import { TouchableOpacity,View,Text, StyleSheet } from 'react-native'
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { styles, buttons } from './styles'; 


export const TransparentButton=(props)=>{
    handleOnPress = (e)=>{
        props.onPress()
    }
    const {title}=props;
    return(
        <View style={styles.container}>
                <TouchableOpacity  onPress={handleOnPress} style={buttons.transparent}
                >
                    <Text style={buttons.greenText} >{title}</Text>
                </TouchableOpacity>
            </View>
    )
}

export const Button=(props)=>{
    handleOnPress = (e)=>{
        props.onPress();
    }
    const {title}=props;
    return(
        <View style={styles.container}>
                <TouchableOpacity  onPress={handleOnPress} style={buttons.primary}
                >
                    <Text style={buttons.whitetext} >{title}</Text>
                </TouchableOpacity>
            </View>
    )
}

export const NextButton=(props)=>{
    handleOnPress = (e)=>{
        props.onPress();
    }
    const {title}=props;
    
    return(
        <View style={styles.container}>
                <TouchableOpacity  onPress={handleOnPress} style={buttons.circle}
                >
                    <Text style={buttons.whitetext}>{title}</Text>
                </TouchableOpacity>
            </View>
    )
}

