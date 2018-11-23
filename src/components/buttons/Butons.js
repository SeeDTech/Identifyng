import { TouchableOpacity,View,Text, StyleSheet } from 'react-native'
import React, { Component } from 'react';
import { styles, buttons } from './styles'; 


export const TransparentButton=(props)=>{
    handleOnPress = (e)=>{
       
    }
    const {title}=props;
    return(
        <View style={styles.container}>
                <TouchableOpacity  onPress={this.handleOnPress} style={buttons.transparent}
                >
                    <Text style={buttons.greenText} >{title}</Text>
                </TouchableOpacity>
            </View>
    )
}

export const Button=(props)=>{
    handleOnPress = (e)=>{
        
    }
    const {title}=props;
    return(
        <View style={styles.container}>
                <TouchableOpacity  onPress={this.handleOnPress} style={buttons.primary}
                >
                    <Text style={buttons.whitetext} >{title}</Text>
                </TouchableOpacity>
            </View>
    )
}

