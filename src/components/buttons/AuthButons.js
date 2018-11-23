import { TouchableOpacity,View,Text, StyleSheet } from 'react-native'
import React, { Component } from 'react';


class AuthButtons extends Component{

    
    handleOnPress = (e)=>{
        this.props.onPress()
    }
    render(){
        const propsToPass = {};
        const {title, style} = this.props;
        
        return(
            <View>
                <TouchableOpacity  onPress={this.handleOnPress} style={styles.button}
                >
                    <Text style={styles.text} >{title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button:{
        
        width: "100%",
        height:50,
        backgroundColor:'#e0f7fa',
        color:'#ffffff',
        justifyContent:'center',
        textAlign:'center',
        marginBottom:20,
        borderRadius:4,
        borderWidth:1,
        borderColor: '#00363a',

    },
    text:{
        marginLeft: '45%',
        width: '60%',
        fontSize: 18,
        color:'#00363a',
        fontWeight: 'bold',
    }
    

})
export default AuthButtons